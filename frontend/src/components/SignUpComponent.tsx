import { Link, useNavigate } from "react-router-dom"
import { SignButton } from "./SignButton"
import { useState } from "react"
import { type SignupSchema } from "@ganesh0230/medium"
import axios from "axios"

export const SignUpComponent = ()=>{
    const [inputs, setInputs] = useState<SignupSchema>({
        name:"",
        email:"",
        password:""
    }) 
    const navigate = useNavigate()

    async function signup(){
        try{
            await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/user/signup`, inputs)
            alert("sign up")
            navigate('/signin')
        }
        catch(e:any){
            alert(e.response.data)
        }
    }
    
    return (
        <div className="flex h-screen justify-center items-center">
            <div className="">
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-3xl mb-1">Create an Account</h1>
                    <p className="text-gray-500">Already Have an account? <Link className="underline hover:text-black" to='/signin'>sign in</Link></p>
                </div>
                <div className="mt-5 w-80">
                            <div className="flex flex-col gap-1.5 mb-3">
                                <label className="font-bold">Username</label>
                                <input onChange={(e)=>setInputs((i)=>({...i,name:e.target.value}))} className="border border-gray-400 rounded-sm p-2" type="text" placeholder="enter your username" />
                            </div>
                            <div className="flex flex-col gap-1.5 mb-3">
                                <label className="font-bold">Email</label>
                                <input onChange={(e)=>setInputs((i)=>({...i,email:e.target.value}))} className="border border-gray-400 rounded-sm p-2" type="text" placeholder="xyz@gmail.com" />
                            </div>
                            <div className="flex flex-col gap-1.5 mb-3">
                                <label className="font-bold">Password</label>
                                <input onChange={(e)=>setInputs((i)=>({...i,password:e.target.value}))} className="border border-gray-400 rounded-sm p-2" type="password" />
                            </div>
                            <SignButton content="Sign Up" onClick={signup}/>
                </div>
            </div>
        </div>
    )
}