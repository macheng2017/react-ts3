export interface Form {
    username: string;
    password: string;
}

export interface User {
    name: string;
    password: string;
    token: string;
}

const api_url = process.env.REACT_APP_API_URL || "http://localhost:3000";
const handleUserResponse = ({user}:{user:User}) => {
    window.localStorage.setItem("token", user.token);
    return user;
}

export const Login = (form: Form) => {
    return fetch(`${api_url}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(form)

    }).then(async r => {
            if (r.ok) {
                return handleUserResponse(await r.json())
            }
            return Promise.reject("Login failed" + r.statusText)
        }
    );
}

export const Register = (form: Form) => {
    return fetch(`${api_url}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
    }).then(
        async r => {
            if (r.ok) {
                return handleUserResponse(await r.json())
            }
            return Promise.reject("Login failed" + r.statusText)
        }
    )
}

export const Logout = () => {
    window.localStorage.removeItem("token");
    return Promise.resolve();
}
