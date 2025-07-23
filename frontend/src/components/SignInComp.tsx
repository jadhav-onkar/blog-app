import { Link, useNavigate } from "react-router-dom"
import { SignButton } from "./SignButton"
import { useState } from "react"
import { type SigninpSchema } from "@ganesh0230/medium"
import axios from "axios"

export const SignIpComp = ()=>{
    const [user, setUser] = useState<SigninpSchema>({
        email:"",
        password:""
    })
    const navigate = useNavigate()

    const signin =async ()=>{
        try{
            const token =await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/user/signin`,user)
            if(!token.data.jwt){
                alert("you are unauthorised")
                navigate('/signup')
            }
            localStorage.setItem('token', `Bearer ${token.data.jwt}`)
            alert("sign in succesfully")
            navigate('/blogs')
        }
        catch(e:any){
            alert(e.response.data)
        }
    }


    return (
        <div className="flex h-screen justify-center items-center flex-col">
            <div>
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-3xl mb-1">Sign In</h1>
                    <p className="text-gray-500">Not have account? <Link className="underline hover:text-black" to='/signup'>sign up</Link></p>
                </div>
                <div className="w-80 mt-2">
                    <div className="flex flex-col gap-1.5 mb-3">
                        <label className="font-bold">Email</label>
                        <input onChange={(e)=>setUser((i)=>({...i,email:e.target.value}))} className="border border-gray-400 rounded-sm p-2" type="text" placeholder="xyz@gmail.com" />
                    </div>
                    <div className="flex flex-col gap-1.5 mb-3">
                        <label className="font-bold">Password</label>
                        <input onChange={(e)=>setUser((i)=>({...i,password:e.target.value}))} className="border border-gray-400 rounded-sm p-2" type="password" />
                    </div>
                    <SignButton content="Sign In" onClick={signin}/>
                </div>
            </div>
        </div>
    )
}