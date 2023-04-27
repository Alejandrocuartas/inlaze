import React, { useEffect } from "react"
import { useGlobalState } from "../context";
import { useNavigate } from "react-router-dom";
import Message from "../components/Message";
const Messages = () => {
    const navigate = useNavigate()
    const { user } = useGlobalState()
    useEffect(() => {
        if (user.jwt) {
            navigate("/auth")
        }
    }, [])
    return (
        <Message />
    )
}

export default Messages;