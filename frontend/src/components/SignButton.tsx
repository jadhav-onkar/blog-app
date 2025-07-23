
type Content = {
    content:string
    onCLicked:()=>void
}
export const SignButton = ({content, onCLicked}:Content)=>{
    return(
        <button onClick={onCLicked} className="bg-black w-full p-2 rounded-md cursor-pointer hover:bg-gray-800 text-white">{content}</button>
    )
}