import axios from "axios"
import { useEffect, useState } from "react"


export const useUser = ()=>{
    const [username, setUsername] = useState("")

    useEffect(()=>{
        const fetchUser = async ()=>{
            try{
                const user = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/user/userDetails`,{
                    headers:{
                        Authorization:localStorage.getItem('token')
                    }
                })
                setUsername(user.data.user.name)
            }
            catch(e){
                alert("something went wrong")
            }
        }
        fetchUser()
    },[])
    return username
}