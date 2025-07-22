import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { z } from 'zod'
import { sign } from 'hono/jwt'
import { Env } from '../types/env'

export const userRouter = new Hono<Env>()

userRouter.use("*", async(c,next)=>{
  const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
      }).$extends(withAccelerate())
  c.set("prisma",prisma)
  await next()
})

const userSchema = z.object({
  name: z.string(),
  email: z.string().email("provide valid email"),
  password:z.string().min(6,"password must be more than 6 characters")
})

type User = Pick<z.infer<typeof userSchema>,'email'|'password'>

userRouter.post('/signup',async (c)=>{
  const body = await c.req.json();
  const result = userSchema.safeParse(body)
  const prisma = c.get("prisma")
  if (!result.success) {
     return c.text(result.error.issues[0].message)
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

const signinSchema = userSchema.pick({
  email:true,
  password:true
})

userRouter.post('/signin',async (c)=>{
  const prisma = c.get('prisma')
  const body = await c.req.json()
  const { success } = signinSchema.safeParse(body);

  if(!success){
    return c.text("Please enter valid inputs")
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
        jwt,
        mag:"sign in succesfully"
      },200)
    }
  }
  catch(e){
    return c.text("something went wrong",500)
  }
})

