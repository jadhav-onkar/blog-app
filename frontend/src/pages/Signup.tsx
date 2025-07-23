import { Quote } from "../components/Quote"
import { SignUpComponent } from "../components/SignUpComponent"

export const Signup = ()=>{
    return(
        <div className="grid xl:grid-cols-2">
            <SignUpComponent />
            <Quote />
        </div>
    )
}