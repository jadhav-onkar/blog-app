import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { z } from 'zod'
import { decode, sign, verify } from 'hono/jwt'

type Env = {
  Bindings:{
    JWT_SECRET:string,
    DATABASE_URL:string
  }
}

const app = new Hono<Env>()

app.get('/', (c) => {
    return c.text('Hello Hono!')
})

const userSchema = z.object({
  name: z.string(),
  email: z.string().email("provide valid email"),
  password:z.string().min(6,"password must be more than 6 characters")
})


app.post('/api/v1/user/signup',async (c)=>{
  const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
      }).$extends(withAccelerate())

  const body =await c.req.json();
  const result = userSchema.safeParse(body)

  if (!result.success) {
     return c.text(result.error.issues[0].message)
  }

  try{
    const user = await prisma.users.create({
      data: body
    })
    const token = await sign({id:user.id, email:user.email}, c.env.JWT_SECRET)

    return c.json({
      data: user,
      msg:"sign up succesfully",
      token
    })
  }
  catch(e){
    return c.text("error occured"+ e,404)
  }
})


app.post('/api/v1/user/signin',(c)=>{
  return c.text("signin route")
})

app.post('/api/v1/blog',(c)=>{
  return c.text("post blog here")
})

app.put('/api/v1/blog',(c)=>{
  return c.text("put request for blog")
})

app.get('/api/v1/blog/bulk',(c)=>{
  return c.text("get blogs in bulk")
})

app.get('/api/v1/blog/:id',(c)=>{
  const id = c.req.param("id")
  console.log(id)
  return c.text("get blog")
})


export default app
