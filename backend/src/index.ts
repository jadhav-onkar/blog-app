import { Hono } from 'hono'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'
import { Bindings, Variables } from './types/env'

const app = new Hono<{
  Bindings:Bindings,
  Variables:Variables
}>()

app.route('/api/v1/user', userRouter)
app.route('/api/v1/blog', blogRouter)

export default app
