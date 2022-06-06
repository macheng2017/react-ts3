interface Form {
    username: string;
    password: string;
}


export const Login = (form: Form) => {
    fetch(`http://localhost:3000/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(form)

    }).then(r => r.json())
}

export const Register = (form: Form) => {
    fetch(`http://localhost:3000/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(form)

    }).then(r => r.json())
}

export const Logout = () => {
}
