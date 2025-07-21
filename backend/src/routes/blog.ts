
import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'
import { Bindings, Variables } from '../types/env'


export const blogRouter = new Hono<{
  Bindings:Bindings,
  Variables:Variables
}>()

blogRouter.use("*", async(c,next)=>{
  const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
      }).$extends(withAccelerate())
  c.set("prisma",prisma)
  await next()
})

blogRouter.use('/blog/*',async (c,next)=>{
  let token = c.req.header("Authorization") || ""
  token = token.split(" ")[1]
  console.log(token)
  try{
    const payload = await verify(token, c.env.JWT_SECRET)
    if(payload){
      c.set("userId",`${payload}`)
      await next()
      return
    }
    return c.text("Unauthorised user")
  }
  catch(e){
    return c.text("Unauthorised user")
  }
})

blogRouter.post('/blog',(c)=>{
  return c.text("post blog here")
})

blogRouter.put('/blog',(c)=>{
  return c.text("put request for blog")
})

blogRouter.get('/blog/bulk',(c)=>{
  const userId = c.get("userId")
  console.log(userId)
  return c.text("get blogs in bulk")
})

blogRouter.get('/blog/:id',(c)=>{
  const id = c.req.param("id")
  console.log(id)
  return c.text("get blog")
})

