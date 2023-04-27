import React, { useEffect } from "react"
import { useGlobalState } from "../context";
import { useNavigate } from "react-router-dom";
const MyMessages = () => {
    const navigate = useNavigate()
    const { user } = useGlobalState()
    useEffect(() => {
        if (!user.jwt) {
            navigate("/auth")
        }
    }, [])
    return (
        <h1>hi</h1>
    )
}

export default MyMessages;