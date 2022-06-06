import React, {FormEvent} from "react";

export const LoginScreen = () => {
    const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const username = (event.currentTarget[0] as HTMLInputElement).value
        const password = (event.currentTarget[1] as HTMLInputElement).value
        console.log(username, password)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor={"username"}> username:</label>
                <input type={"text"}  />
            </div>
            <div>
                <label htmlFor={"password"}> password:</label>
                <input type={"password"}/>
            </div>
            <button type={"submit"}>login</button>
        </form>
    )
}
