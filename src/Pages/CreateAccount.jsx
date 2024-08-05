import React from 'react';
import { Link } from 'react-router-dom';

const CreateAccount = () => {
    const handleCreateAccount = (event) => {
        event.preventDefault();
        console.log('Create account submitted');
    };

    return (
        <div className="create-account-page">
            <h2>Create Account</h2>
            <form onSubmit={handleCreateAccount}>
                <label>
                    Username: <br />
                    <input type="text" name="username" placeholder='username' required />
                </label>
                <br />
                <label>
                    Password: <br />
                    <input type="password" name="password" placeholder='password' required />
                </label>
                <br />
                <label>
                    Confirm Password: <br />
                    <input type="password" name="confirmPassword" placeholder='confirm password' required />
                </label>
                <br /> <br />
                <button type="submit">Create Account</button><br /> <br />

            </form>
            <Link to={'/'}>
                <button>Home</button>
            </Link>
        </div>
    );
};

export default CreateAccount;
