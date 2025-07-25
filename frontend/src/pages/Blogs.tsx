import { Appbar } from "../components/Appbar"
import { BlogsCard } from "../components/BlogsCards"
import { useBlogs } from "../hooks/UseBlogs"

export const Blogs = ()=>{
    const { blogs, loading } = useBlogs()
    if(loading){
        return <div>
            Loading...
        </div>
    }
    return(
        <div>
            <Appbar />
            <div className="flex flex-col items-center">
                {blogs.map((blog,index)=>{
                     return ( <BlogsCard key={index} id={blog.id} name={blog.author.name} createdAt="13 oct 2003" title={blog.title} content={blog.content} />)
                })}
            </div>
        </div>
    )
}