
import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'
import { z } from 'zod'
import { Env } from '../types/env'

export const blogRouter = new Hono<Env>()

blogRouter.use("*", async(c,next)=>{
  const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
      }).$extends(withAccelerate())
  c.set("prisma",prisma)
  await next()
})

// middleware
blogRouter.use('/*',async (c,next)=>{
  let token = c.req.header("Authorization") || ""
  token = token.split(" ")[1]
  try{
    const payload = await verify(token, c.env.JWT_SECRET)
    if(payload){
      c.set("userId",`${payload}`)
      await next()
      return
    }
    return c.text("Unauthorised user",401)
  }
  catch(e){
    return c.text("Unauthorised user",401)
  }
})

const bolgSchema = z.object({
  title:z.string(),
  content:z.string()
})

blogRouter.post('/',async (c)=>{
  const body = await c.req.json()
  const { success } = bolgSchema.safeParse(body)
  const prisma = c.get('prisma')
  if(!success){
    return c.text("please enter valid data",406)
  }
  try{
    const author_id = c.get('userId')
    const blog = await prisma.blogs.create({
      data:{
        title:body.title,
        content:body.content,
        author_id
      }
    })
    return c.json({
      blog,
      msg:"blog created succesfully"
    },201)
  }
  catch(e){
    return c.text("something went wrong"+e,500)
  }
})

blogRouter.put('/',async (c)=>{
  const prisma = c.get("prisma")
    const body = await c.req.json()
  try{
    const updatesBlog = await prisma.blogs.update({
      where:{
        id:body.id
      },
      data:{
        title:body.title || undefined,
        content:body.content || undefined
      },
      select:{
        id:true,
        title:true,
        content:true
      }
    })
    console.log(updatesBlog)
    return c.json({
      updatesBlog,
      msg:"blog updates succesfully"
    },201)
  }
  catch(e){
    return c.text("something went wrong "+e,500)
  }
})

blogRouter.get('/bulk',async (c)=>{
  const prisma = c.get('prisma')
  try{
    const allBlogs = await prisma.blogs.findMany({
      select:{
        id:true,
        title:true,
        content:true
      }
    })
    return c.json({
      allBlogs
    },200)
  }
  catch(e){
    return c.text("something went wrong "+e, 500)
  }
})


blogRouter.get('/:id',async (c)=>{
  const id = c.req.param("id")
  const prisma = c.get('prisma')

  try{
    const blog = await prisma.blogs.findUnique({
      where:{
        id
      },
      select:{
        title:true,
        content:true
      }
    })
    return c.json({
      blog
    },200)
  }
  catch(e){
    return c.text("something went wrong \n"+e,500)
  }
})

