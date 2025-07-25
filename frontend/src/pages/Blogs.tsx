import { useNavigate } from "react-router-dom"
import { Appbar } from "../components/Appbar"
import { BlogsCard } from "../components/BlogsCards"
import { useBlogs } from "../hooks/UseBlogs"

export const Blogs = ()=>{
    const { blogs, loading } = useBlogs()
    const navigate = useNavigate()

    function routeToCreate(){
        console.log("called")
        navigate('/blogs/create')
    }

    if(loading){
        return <div>
            <Appbar onclick={routeToCreate} buttontext="Create Blog" />
            <div className="flex flex-col items-center">
                    <div role="status" className="animate-pulse mt-5 w-5xl">
                        <div className="h-2.5 bg-gray-200 rounded-full h-4  w-100 mb-4"></div>
                        <div className="h-2 bg-gray-200 rounded-full h-4   max-w-4xl mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full h-4   max-w-3xl mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full h-4  max-w-3xl mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full h-4  max-w-4xl mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full h-4  max-w-3xl"></div>
                        <span className="sr-only">Loading...</span>
                    </div>  
                    <div role="status" className="animate-pulse mt-5 w-5xl">
                        <div className="h-2.5 bg-gray-200 rounded-full h-4  w-100 mb-4"></div>
                        <div className="h-2 bg-gray-200 rounded-full h-4   max-w-4xl mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full h-4   max-w-3xl mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full h-4  max-w-3xl mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full h-4  max-w-4xl mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full h-4  max-w-3xl"></div>
                        <span className="sr-only">Loading...</span>
                    </div>  
                    <div role="status" className="animate-pulse mt-5 w-5xl">
                        <div className="h-2.5 bg-gray-200 rounded-full h-4  w-100 mb-4"></div>
                        <div className="h-2 bg-gray-200 rounded-full h-4   max-w-4xl mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full h-4   max-w-3xl mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full h-4  max-w-3xl mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full h-4  max-w-4xl mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full h-4  max-w-3xl"></div>
                        <span className="sr-only">Loading...</span>
                    </div>   
            </div>
        </div>
    }
    return(
        <div>
            <Appbar onclick={routeToCreate} buttontext="Create Blog" />
            <div className="flex flex-col items-center">
                {blogs.map((blog,index)=>{
                     return ( <BlogsCard key={index} id={blog.id} name={blog.author.name} createdAt="13 oct 2003" title={blog.title} content={blog.content} />)
                })}
            </div>
        </div>
    )
}