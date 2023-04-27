import React, { useState } from "react";
import "./styles/Login.css"
import { UserType } from "../types";
import { useGlobalState } from "../context";
import { useNavigate } from "react-router-dom";
const Login = ({ onSignup }: { onSignup: () => void }) => {
    const navigate = useNavigate()
    const { setUser } = useGlobalState()
    const [loading, setLoading] = useState(false)
    const login = (e: any) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const password = form.get("password")
        const username = form.get("username")
        const email = username
        setLoading(true)
        fetch(`${process.env.API}/api/user/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ password, username, email })
        }).then((r) => {
            if (!r.ok) {
                setLoading(false)
                return alert("there was an error whil loging in. Please try again.")
            }
            return r.json()
        }).then((res: UserType) => {
            setLoading(false)
            setUser({
                name: res.name,
                username: res.username,
                email: res.email,
                _id: res._id,
                jwt: res.jwt,
            })
            navigate("/")
        })
    }
    return (
        <div>
            <form onSubmit={login}>
                <h3>Login Here</h3>

                <label htmlFor="username">Username</label>
                <input name="username" type="text" placeholder="Email or Username" id="username" />

                <label htmlFor="password">Password</label>
                <input name="password" type="password" placeholder="Password" id="password" />
                {
                    loading ? "Loading..." : (
                        <div>
                            <button>Log In</button>
                            <button onClick={onSignup}> Sign Up</button>
                        </div>
                    )
                }
            </form>
        </div>
    )
}

export default Login