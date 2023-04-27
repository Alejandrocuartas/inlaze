import React, { useEffect } from "react"
import { useGlobalState } from "../context";
import { useNavigate } from "react-router-dom";
const CreateMessage = () => {
    const navigate = useNavigate()
    const { user } = useGlobalState()
    useEffect(() => {
        if (!user.jwt) {
            navigate("/auth")
        }
    }, [])
    return (
        <h1>hi cc</h1>
    )
}

export default CreateMessage;