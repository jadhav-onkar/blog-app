import { useState } from "react"
import { Appbar } from "../components/Appbar"
import axios from "axios"

export const CreateBlogs = ()=>{
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    console.log(title)
    console.log(content)
    const publish =async ()=>{
        try{
            const res =await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/blog`,{
                title,
                content
            },{
                headers: {
                    Authorization:localStorage.getItem('token')
                }
            })
            alert(res.data.msg)
        }
        catch(e){
            alert("somthing went wrong")
        }
    }
    return <div>
        <Appbar onclick={publish} buttontext="publish"/>
        <div className="flex flex-col items-center mx-15 md:mx-25 xl:mx-50">
            <div className="text-3xl font-bold my-5">Write your Blog</div>
            <input onChange={(e)=>setTitle(e.target.value)} className="border border-slate-400 rounded-md w-full p-2 font-semibold mb-2" type="text" placeholder="Title" />
            <textarea onChange={(e)=>setContent(e.target.value)} className="border border-slate-400 rounded-md w-full p-2 h-100 font-semibold h-xl align-text-top" placeholder="Once upon a time......" />
        </div>
    </div>
}