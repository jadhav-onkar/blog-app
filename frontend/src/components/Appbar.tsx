import { AppBarButton } from "./AppBarButton"
import { Avatar } from "./Avtar"

export const Appbar = ()=>{
    return <div className="flex justify-between border-b border-slate-300 px-10 lg:px-30 py-3">
        <div className="flex flex-col justify-center">
            MEDIUM
        </div>
        <div className="flex items-center">
            <AppBarButton  onClick={()=>{}} text="Create Blog" />
            <Avatar h={40} w={40} name="ganesh"/>
        </div>
    </div>
}