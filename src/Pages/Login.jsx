import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        console.log('Login submitted');
    };

    return (
        <div className="login-page">
            <form onSubmit={handleLogin}>
                <label>
                    Username:
                    <br />
                    <input type="text" name="username" placeholder='username' required />
                </label> <br />
                <label>
                    Password:
                    <br />
                    <input type="password" name="password" placeholder='password' required />
                </label> <br />
                <button type="submit">Login</button><br />
                <button type="button" onClick={() => navigate('/create-account')}>
                    Create Account
                </button>
            </form>
        </div>
    );
};

export default Login;

