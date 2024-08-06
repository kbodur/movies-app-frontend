import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const API = import.meta.env.VITE_BASE_URL;

    const handleLogin = async (event) => {
        event.preventDefault();
        setError("");
        try {
            const response = await fetch(`${API}/users/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            if (response.ok) {
                console.log(data);
                setUser(data.user);
                navigate(`/users/${data.user.id}/movies`);
            } else {
                setError(data.message);
            }
        } catch (error) {
            console.error("Login failed:", error);
            setError("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="login-page">
            <img className='img' src="https://media.gettyimages.com/id/1244034031/vector/cinema-poster-with-cola-film-strip-and-clapper-vector.jpg?s=612x612&w=gi&k=20&c=8ClshQC50T-wPj6CPvnPnFq1Er6Fs8fbrreXWehvdgk=" alt="Movies Background" />
            <form onSubmit={handleLogin}>
                <label>
                    Username:
                    <br />
                    <input
                        type="text"
                        name="username"
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Password:
                    <br />
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <br />
                <br />
                <button type="submit">Login</button>

                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
            <br />
            <br />
            <a href="https://accounts.google.com/signin/v2/identifier" target="_blank" rel="noopener noreferrer">
                <button>Login with Google</button>
            </a><br />
            <a href="https://www.facebook.com/login" target="_blank" rel="noopener noreferrer">
                <button>Login with Facebook</button>
            </a>


        </div>
    );
};

export default Login;
