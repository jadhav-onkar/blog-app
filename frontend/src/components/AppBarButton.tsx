import type { MouseEventHandler } from "react"

export const AppBarButton = ({text,onClick}:{text:string,onClick:MouseEventHandler<HTMLButtonElement>})=>{
    return <button onClick={onClick} className="text-white bg-green-700 hover:bg-green-800  font-medium rounded-full text-sm px-5 py-2 mr-5">{text}</button>
}