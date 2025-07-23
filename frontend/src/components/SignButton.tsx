
type Content = {
    content:string
    onClick:()=>void
}
export const SignButton = ({content, onClick}:Content)=>{
    return(
        <button onClick={onClick} className="bg-black w-full p-2 rounded-md cursor-pointer hover:bg-gray-800 text-white">{content}</button>
    )
}