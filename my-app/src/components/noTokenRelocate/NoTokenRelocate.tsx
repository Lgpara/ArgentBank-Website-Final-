import { useEffect } from "react"
import getToken from "../../scripts/getToken.js"
import { useNavigate } from "react-router"


export default function NoTokenRelocate(){
    const navigate = useNavigate()

    useEffect(()=> {
        const token = getToken()
        if(token === null || token === undefined || token === ""){
            navigate("/login")
        }
    },[])

    return(
        <></>
    )
}