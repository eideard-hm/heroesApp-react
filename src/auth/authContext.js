import React, { createContext, useEffect, useReducer } from "react";
import { authReducer } from "./authReducer";

const AuthContext = createContext(null);

const init = () => {
    return JSON.parse(localStorage.getItem('userAuth')) || {auth: false};
}

const AuthProvider = ({ children }) => {

    const [userAuth, dispatch] = useReducer(authReducer, {}, init);

    useEffect(() => {
        if(!userAuth) return;
        localStorage.setItem('userAuth', JSON.stringify(userAuth));
    }, [userAuth])

    const data = {
        userAuth,
        dispatch
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider };