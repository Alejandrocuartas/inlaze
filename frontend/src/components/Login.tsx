import React from "react";
import "./styles/Login.css"
const Login = ({ onSignup }: { onSignup: () => void }) => {
    return (
        <div>
            <form>
                <h3>Login Here</h3>

                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Email or Phone" id="username" />

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password" />
                <button>Log In</button>
                <button onClick={onSignup}> Sign Up</button>
            </form>
        </div>
    )
}

export default Login