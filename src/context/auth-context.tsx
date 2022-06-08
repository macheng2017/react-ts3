import {createContext, ReactNode, useContext, useState} from "react";
import * as auth from "../auth/auth-provider"
import {Form, User} from "../auth/auth-provider";

const AuthContext = createContext<{
    user: User | null,
    login: (form: Form) => Promise<void>,
    register: (form: Form) => Promise<void>,
    logout: () => Promise<void>
} | null>(null)
AuthContext.displayName = "AuthContext1"

export const AuthProvider = ({children}: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)
    const login = (form: Form) => auth.Login(form).then(user => setUser(user))
    const register = (form: Form) => auth.Register(form).then(user => setUser(user))
    const logout = () => auth.Logout().then(() => setUser(null))
    // 这里的双花括号,其中一个花括号是对象
    return <AuthContext.Provider children={children} value={{user, login, register, logout}}/>
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}
