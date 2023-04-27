import React, { useEffect, useState } from "react"
import { useGlobalState } from "../context";
import { useNavigate } from "react-router-dom";
import Message from "../components/Message";
import { MessageType } from "../types";
import "./styles/Messages.css"
const Messages = () => {
    const [messages, setMessages] = useState<MessageType[]>([])
    const [reset, setReset] = useState(false)
    const navigate = useNavigate()
    const { user } = useGlobalState()
    const search = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchText = e.target.value
        if (searchText === "") {
            setReset(!reset)
        }
        const newList = messages.filter(m => {
            return m.text.toLowerCase().includes(searchText.toLowerCase()) || m.title.toLowerCase().includes(searchText.toLowerCase())
        })
        if (newList.length === 0) {
            return alert("There is not matching messages.")
        }
        setMessages(newList)
    }
    const searchDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const date = e.target.value
        const newList = messages.filter(m => {
            return date === m.date.split("T")[0]
        })
        if (newList.length === 0) {
            return alert("There is not messages on this day.")
        }
        setMessages(newList.reverse())
    }
    useEffect(() => {
        if (!user.jwt) {
            return navigate("/auth")
        }
        fetch(`${process.env.API}/api/message`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": user.jwt,
            }
        }).then(response => {
            if (!response.ok) {
                return alert("Error getting messages.")
            }
            return response.json()
        }).then((r: { messages: MessageType[] }) => {
            setMessages(r.messages.filter((m) => {
                return m.user.username === user.username
            }))
        })
    }, [reset])
    if (messages.length === 0) {
        return <h1>There are not messages of yours yet.</h1>
    }
    return (
        <div>
            <h1>All Messages</h1>
            <div className="search">
                <label htmlFor="name">What search?</label>
                <input onChange={search} placeholder="topic" id="name" type="search" />
                <label htmlFor="date">Date select</label>
                <input onChange={searchDate} id="date" defaultValue="today" type="date" />
            </div>
            <div className="messages-container">
                {
                    messages.reverse().map((message) => <Message key={message._id} message={message} />)
                }
            </div>
        </div>
    )
}

export default Messages;