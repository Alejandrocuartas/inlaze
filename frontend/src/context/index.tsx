import React, { useState, createContext, useContext } from "react";
import { GlobalContextType } from "../types";
//@ts-ignore
const logContext = createContext<GlobalContextType>();
const Context = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        jwt: "",
        username: "",
        _id: "",
    })
    return (
        <logContext.Provider value={{
            user,
            setUser,
        }}>
            {children}
        </logContext.Provider>
    );
};

const useGlobalState = () => useContext(logContext);

export { Context, useGlobalState };