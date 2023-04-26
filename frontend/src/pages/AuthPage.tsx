import * as React from "react";
import Login from "../components/Login";
import SignUp from "../components/Signup";
const AuthPage = () => {
    const [login, setLogin] = React.useState(true)
    const change = () => {
        setLogin(!login)
    }
    return (
        <div>
            {
                login ? (
                    <Login onSignup={change}></Login>

                ) : (
                    <SignUp onLogin={change}></SignUp>
                )
            }
        </div>
    );
};

export default AuthPage;