import { Avatar } from "./Avtar"
import { Link } from 'react-router-dom'

const width = window.innerWidth
type BlogCardsProps = {
    name:string,
    createdAt:string,
    title:string,
    content:string
    id:string
}


export const BlogsCard = ({name,createdAt,title,content,id}:BlogCardsProps)=>{
    return <div className="border-b border-slate-200 flex flex-col min-w-es lg:max-w-4xl px-10  cursor-pointer py-5 hover:bg-slate-50 overflow-x-hidden">
            <Link to={`/blogs/${id}`}>
                <div className="flex gap-2 items-center mb-1">
                    <div className="flex flex-col justify-center">
                        <Avatar h={25} w={25} name={name}/>
                    </div>
                    <div>{name}</div>
                    <div>&middot;</div>
                    <div className="text-slate-500 font-thin">{createdAt}</div>
                </div>
                <div>
                    <div className="font-bold text-2xl">{title}</div>
                    <div className="text-slate-700">{width <500 ?  content.slice(0,75) : content.slice(0,235)}...</div>
                    <div className="font-thin text-slate-500">{Math.ceil(content.length / 500)} min</div>
                </div>
            </Link>
    </div>
}