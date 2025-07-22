
export type Env = {
  Bindings: {
    JWT_SECRET: string;
    DATABASE_URL: string;
  },
  Variables:{
    prisma:any
    userId:string
  };
}