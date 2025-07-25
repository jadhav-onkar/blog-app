import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { Env } from '../types/env'
import { signupScheme, signinScheme } from '@ganesh0230/medium'


export const userRouter = new Hono<Env>()

userRouter.use("*", async(c,next)=>{
  const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
      }).$extends(withAccelerate())
  c.set("prisma",prisma)
  await next()
})


userRouter.post('/signup',async (c)=>{
  const body = await c.req.json();
  const result = signupScheme.safeParse(body)
  const prisma = c.get("prisma")
  if (!result.success) {
     return c.text("please enter valid inputs",403)
  }
  try{
    const user = await prisma.users.create({
      data: body
    })
    const token = await sign(user.id, c.env.JWT_SECRET)

    return c.json({
      data: user,
      msg:"sign up succesfully",
      token
    },201)
  }
  catch(e){
    return c.text("something went wrong",500)
  }
})

userRouter.post('/signin',async (c)=>{
  const prisma = c.get('prisma')
  const body = await c.req.json()
  const { success } = signinScheme.safeParse(body);

  if(!success){
    return c.text("Please enter valid inputs",403)
  }
  try{
    const user =await prisma.users.findUnique({
      where:{
        email:body.email,
        password:body.password
      }
    })
    console.log(user)
    if(!user){
      return c.text("user not found",401)
    }
    else{
      const jwt = await sign(user.id, c.env.JWT_SECRET)
      return c.json({
        name:user.name,
        jwt,
        mag:"sign in succesfully"
      },200)
    }
  }
  catch(e){
    return c.text("something went wrong",500)
  }
})

