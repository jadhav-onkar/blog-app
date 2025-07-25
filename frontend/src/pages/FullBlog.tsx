import { useParams } from "react-router-dom"
import { Appbar } from "../components/Appbar"
import { Avatar } from "../components/Avtar"
import { useFullBlog } from "../hooks/UseFullBlog"

export const FullBlog = ()=>{
    const { id='' } = useParams()
    const { loading, blog } = useFullBlog(id)
    console.log(blog)
    if(loading){
        return <div>
            loading....
        </div>
    }
    return<div >
            <Appbar />
            <div className="grid grid-cols-4 px-20">
                <div className=" col-span-3 border-r border-slate-200 pr-5 pt-10">
                    <div className="text-3xl font-bold mb-2">{blog?.title}</div>
                    <div className="text-slate-800">{blog?.content}</div>
                </div>
                <div className="pl-10">
                    <div>Author</div>
                    <div className="flex mt-2">
                        <div className="flex flex-col justify-center mr-2">
                            <Avatar h={40} w={40} name={blog?.author.name || "Anonymus"}/>
                        </div>
                        <div>
                            <div>{blog?.author.name}</div>
                            <div>master of mirth, purveyor of puns, and the funniest person in kingdom</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
}