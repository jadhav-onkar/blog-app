
import { z } from 'zod'

export const signupScheme = z.object({
    name:z.string().min(1),
    email:z.string().email(),
    password:z.string().min(6)
})

export const signinScheme = z.object({
    email:z.string().email(),
    password:z.string().min(6)
})

export const creatBlogSchema = z.object({
    title:z.string().min(1),
    content:z.string().min(1)
})

export const updateBlogSchema = z.object({
    id:z.string(),
    title:z.string().optional(),
    content:z.string().optional()
})

export type SignupSchema = z.infer<typeof signupScheme>
export type SigninpSchema = z.infer<typeof signinScheme>
export type CreateBlogSchema = z.infer<typeof creatBlogSchema>
export type UpdateBlogSchema = z.infer<typeof updateBlogSchema>