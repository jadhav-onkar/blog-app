import { Hono } from 'hono'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'
import { Env } from './types/env'

const app = new Hono<Env>()

app.route('/api/v1/user', userRouter)
app.route('/api/v1/blog', blogRouter)

export default app
