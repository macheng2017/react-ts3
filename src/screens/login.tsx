import React, {FormEvent} from "react";
import {useAuth} from "../context/auth-context";

export const LoginScreen = () => {
    const {user, login} = useAuth()
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const username = (event.currentTarget[0] as HTMLInputElement).value
        const password = (event.currentTarget[1] as HTMLInputElement).value
        login({username, password}).then(r => {
            console.log("hao", r)
        })

    }
    return (
        <form onSubmit={handleSubmit}>
            {
                user?.name ? "欢迎: " + user.name : "not logged in"
            }
            <div>
                <label htmlFor={"username"}> username:</label>
                <input type={"text"}/>
            </div>
            <div>
                <label htmlFor={"password"}> password:</label>
                <input type={"password"}/>
            </div>
            <button type={"submit"}>login</button>
        </form>
    )
}
