import { Link } from "react-router-dom"
import { SignButton } from "./SignButton"

export const SignIpComp = ()=>{
    return (
        <div className="flex h-screen justify-center items-center flex-col">
            <div className="">
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-3xl mb-1">Sign In</h1>
                    <p className="text-gray-500">Not have account? <Link className="underline hover:text-black" to='/signup'>sign up</Link></p>
                </div>
                <div className="w-80 mt-2">
                        <form action="">
                            <div className="flex flex-col gap-1.5 mb-3">
                                <label className="font-bold">Email</label>
                                <input className="border border-gray-400 rounded-sm p-2" type="text" placeholder="xyz@gmail.com" />
                            </div>
                            <div className="flex flex-col gap-1.5 mb-3">
                                <label className="font-bold">Password</label>
                                <input className="border border-gray-400 rounded-sm p-2" type="text" />
                            </div>
                            <SignButton content="Sign In"/>
                        </form>
                </div>
            </div>
        </div>
    )
}