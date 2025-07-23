import { Quote } from "../components/Quote"
import { SignIpComp } from "../components/SignInComp"

export const Signin = ()=>{
    return(
            <div className="grid xl:grid-cols-2">
                <SignIpComp />
                <Quote />
            </div>
        )
}