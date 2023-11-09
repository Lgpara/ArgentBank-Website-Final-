import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useSelector } from "react-redux"


export default function NoTokenRelocate(){
    const navigate = useNavigate()
    const token = useSelector((state) => state.token)
    useEffect(()=> {
        if(token === null || token === undefined || token === ""){
            navigate("/login")
        }
    },[])

    return(
        <></>
    )
}