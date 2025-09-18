import { useState } from "react";
import LoginForm from "../components/LoginForm";
import { FakeAPI } from "../services/loginFakeAPI";
import { useNavigate, Navigate } from "react-router-dom";


export default function Login() {

    const [isLoginSucess, setIsLoginSucess] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (email, password) => {
        const response = await fetch(FakeAPI.login({ email, password }))
        console.log(response);
        setIsLoginSucess(response.success)
        if (response.success) {
            navigate('/profile', {replace: true});
        } else {
            return <h2>{response.message}</h2>
        }

    }

    if(isLoginSucess) {
        return <Navigate to='/profile' replace={true}/>
    }

    return (
        <div>
            <h1>Login Page</h1>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
}