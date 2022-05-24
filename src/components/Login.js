import React, { useState } from "react";
import axios from 'axios';

const initCredentials = {
    username: "",
    password: ""
}

const Login = (props) => {
    const [credentials, setCredentials] = useState(initCredentials)

    const handleChange = evt => {
        setCredentials({
            ...credentials,
            [evt.target.name]: evt.target.value
        })
    }

    const login = evt => {
        evt.preventDefault();
        axios.post('http://localhost:9000/api/login', credentials)
        .then(res => {
            localStorage.setItem("token", res.data.token)
            props.history.push("/friendslist")
        })
        .catch(err => console.log(err))
    }

    return(
        <form onSubmit={login}>
            <input 
                type="text" 
                name="username" 
                placeholder="Username"
                value={credentials.username}
                onChange={handleChange}
             />
            <input 
                type="password" 
                name="password" 
                placeholder="password"
                value={credentials.password}
                onChange={handleChange}
             />
             <button>Login</button>
        </form>
    )
}

export default Login