import React, { useEffect, useState } from "react"
import { useGlobalState } from "../context";
import { useNavigate } from "react-router-dom";
import "./styles/Create.css"
const CreateMessage = () => {
    const [loading, setLoading] = useState(false)
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const navigate = useNavigate()
    const { user } = useGlobalState()
    const publish = () => {
        setLoading(true)
        fetch(`${process.env.API}/api/message/create`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": user.jwt,
            },
            body: JSON.stringify({ title, text })
        }).then((r) => {
            if (!r.ok) {
                setLoading(false)
                return alert("there was an error while publishing. Please try again.")
            }
            setLoading(false)
            return alert("success.")
        })
    }
    useEffect(() => {
        if (!user.jwt) {
            navigate("/auth")
        }
    }, [])
    return (
        <div>
            <h1>Create Message</h1>
            <div className="form">
                <label htmlFor="title">Title</label>
                <input onChange={(e) => setTitle(e.target.value)} id="title" maxLength={20} name="title" placeholder="topic" type="text" />
                <label htmlFor="text">Text</label>
                <input onChange={(e) => setText(e.target.value)} className="input-text" id="text" name="text" placeholder="text" maxLength={700} type="text" />
                <div className="butt">
                    {
                        loading ? "Loading..." : (<button onClick={publish} className="publish-button">Publish</button>)
                    }
                </div>
            </div>
        </div>
    )
}

export default CreateMessage;