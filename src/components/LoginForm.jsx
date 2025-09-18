import { useState } from "react"

const LoginForm = ({onSubmit}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(email,password)
    }



    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="email" placeholder="E-mail" onChange={handleEmailChange}/> 
            <input type="text" name="password" placeholder="Password" onChange={handlePasswordChange}/> 

            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm