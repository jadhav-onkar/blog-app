import { z } from 'zod';
export declare const signupScheme: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export declare const signinScheme: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export declare const creatBlogSchema: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
}, z.core.$strip>;
export declare const updateBlogSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SignupSchema = z.infer<typeof signupScheme>;
export type SigninpSchema = z.infer<typeof signinScheme>;
export type CreateBlogSchema = z.infer<typeof creatBlogSchema>;
export type UpdateBlogSchema = z.infer<typeof updateBlogSchema>;
