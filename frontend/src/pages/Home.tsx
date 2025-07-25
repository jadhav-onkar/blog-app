import { useNavigate } from "react-router-dom"

export const Home = ()=>{
    const navigate = useNavigate()
    return <div className="flex h-screen w-screen justify-center items-center">
        <button className="p-5 text-2xl font-bold border border-slate-400 rounded-lg hover:border-black" onClick={()=>{
            navigate('/signin')
        }}>Signin</button>
    </div>
}