import axios from "axios"
import { useEffect, useState } from "react"

export const useBlogs =()=>{
    type Blogs = {
        id:string,
        title:string,
        content:string,
        author:{
            name:string
        }
    }

    type Loading = boolean

    const [blogs,setBlogs] = useState<Blogs[]>([])
    const [loading, setLoading] = useState<Loading>(true)

    useEffect(()=>{
        async function fetchBLogs(){
            try{
                const AllBlogs = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/blog/bulk`,{
                    headers:{
                        Authorization:localStorage.getItem('token')
                    }
                })
                setBlogs(AllBlogs.data.allBlogs)
                setLoading(false)
            }
            catch(e){
                alert("something went wrong")
            }
        }
        fetchBLogs()
    },[])
    return { blogs,loading }
}