interface Form {
    username: string;
    password: string;
}

interface User {
    username: string;
    password: string;
    token: string;
}
const api_url = process.env.REACT_APP_API_URL || "http://localhost:3000";
const handleUserResponse = (user: User) => {
    window.localStorage.setItem("token",user.token);
    return user;
}

export const Login = (form: Form) => {
    fetch(`${api_url}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(form)

    }).then(async r => handleUserResponse(await r.json()));
}

export const Register = (form: Form) => {
    fetch(`${api_url}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
    }).then(
        async r => handleUserResponse(await r.json())
    )
}

export const Logout = () => {
    window.localStorage.removeItem("token");
}
