import axios from "axios"
import { useEffect, useState } from "react"

type Blogtype = {
    id:string,
    title:string,
    content:string,
    author:{
        name:string
    }
}

export const useFullBlog= (id:string)=>{
    const [blog, setBlog] = useState<Blogtype>()
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        async function fetchBlog(){
            const oneBlog = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/blog/${id}`,{
                    headers:{
                        Authorization:localStorage.getItem('token')
                    }
                })
            setBlog(oneBlog.data.blog)
            setLoading(false)
        }
        fetchBlog()
    },[id])
    return { loading,blog }
}