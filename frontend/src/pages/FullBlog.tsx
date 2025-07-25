import { useNavigate, useParams } from "react-router-dom"
import { Appbar } from "../components/Appbar"
import { Avatar } from "../components/Avtar"
import { useFullBlog } from "../hooks/UseFullBlog"
 

export const FullBlog = ()=>{
    const { id='' } = useParams()
    const { loading, blog } = useFullBlog(id)
    const navigate = useNavigate()

    function routeToCreate(){
        console.log("called")
        navigate('/blogs/create')
}
    if(loading){
        return <div>
            loading....
        </div>
    }
    return<div >
            <Appbar onclick={routeToCreate} buttontext="Create Blog"  />
            <div className="flex flex-col lg:grid lg:grid-cols-4 px-8 lg:px-20">
                <div className=" lg:col-span-3 lg:border-r border-slate-200 pr-5 pt-10">
                    <div className="text-3xl font-bold mb-2">{blog?.title}</div>
                    <div className="text-slate-800">{blog?.content}</div>
                </div>
                <div className="lg:pl-10">
                    <div>Author</div>
                    <div className="flex mt-5 lg:mt-2 mb-10">
                        <div className="flex flex-col justify-center mr-2">
                            <Avatar h={40} w={40} name={blog?.author.name || "Anonymus"}/>
                        </div>
                        <div>
                            <div className="font-semibold">{blog?.author.name}</div>
                            <div className="font-thin w-es lg:w-full">master of mirth, purveyor of puns, and the funniest person in kingdom</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
}