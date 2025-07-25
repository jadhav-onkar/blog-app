import { useNavigate } from "react-router-dom"
import { useUser } from "../hooks/UseUser"
import { AppBarButton } from "./AppBarButton"
import { Avatar } from "./Avtar"

type AppbarProps = {
    buttontext:string,
    onclick: ()=>void
}
export const Appbar = ({buttontext,onclick}:AppbarProps)=>{
    const navigate = useNavigate()
    const username = useUser()
    return <div className="flex justify-between border-b gap-4 border-slate-300 px-10 lg:px-30 py-3 overflow-x-hidden">
        <div className="flex flex-col justify-center">
            MEDIUM
        </div>
        <div className="flex items-center">
            <AppBarButton  onClick={onclick} text={buttontext} />
            <Avatar h={40} w={40} name={username}/>
            <button onClick={()=>{
                localStorage.removeItem('token')
                navigate('/signin')
            }} className="bg-gray-400 text-gray-200 hover:bg-black hover:text-gray-100 rounded-full px-4 p-2 ml-2">Logout</button>
        </div>
    </div>
}