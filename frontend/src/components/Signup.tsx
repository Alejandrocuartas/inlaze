import React, { useState } from "react";
import "./styles/Signup.css"
import { UserType } from "../types";
import { useGlobalState } from "../context";
import { useNavigate } from "react-router-dom";
const SignUp = ({ onLogin }: { onLogin: () => void }) => {
    const navigate = useNavigate()
    const { setUser } = useGlobalState()
    const [loading, setLoading] = useState(false)
    const signup = (e: any) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get("name")
        const email = form.get("email")
        const password = form.get("password")
        const username = form.get("username")
        setLoading(true)
        fetch(`${process.env.API}/api/user/signup`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, password, username, email })
        }).then((r) => {
            if (!r.ok) {
                setLoading(false)
                return alert("there was an error whil signing up. Please try again.")
            }
            return r.json()
        }).then((res: { user: UserType, jwt: string }) => {
            setLoading(false)
            setUser({
                name: res.user.name,
                username: res.user.username,
                email: res.user.email,
                _id: res.user._id,
                jwt: res.jwt,
            })
            navigate("/")
        })
    }
    return (
        <div>
            <form className="form-signup" onSubmit={signup}>
                <h3>Signup Here</h3>
                <label htmlFor="name">Name</label>
                <input name="name" type="text" placeholder="Name" id="name" />
                <label htmlFor="email">Email</label>
                <input name="email" type="text" placeholder="Email" id="email" />
                <label htmlFor="username">Username</label>
                <input name="username" type="text" placeholder="Username" id="username" />
                <label htmlFor="password">Password</label>
                <input name="password" type="password" placeholder="Password" id="password" />
                {
                    loading ? "Loading..." : (
                        <div>
                            <button type="submit">Sign Up</button>
                            <button onClick={onLogin}>Log In</button>
                        </div>
                    )
                }
            </form>
        </div>
    )
}

export default SignUp