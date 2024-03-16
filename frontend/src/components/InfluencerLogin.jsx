import React from 'react';
import './influencerLogin.css'

const LoginComponent = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log('Email:', email, 'Password:', password);
        // Here you would add your logic to validate the user,
        // typically involving sending a request to your server.
    };

    return (
        // <div className={styles.container} >
        <div className="bground" >
        <div className="login-container">
            <div className="login-section">
                <h1 className="login-title">Influencer Login</h1>
                <form id="loginForm" className="login-form" onSubmit={handleSubmit}>
                    <div className="input-container">
                        <input type="email" id="email" name="email" placeholder="Email address" required />
                    </div>
                    <div className="input-container">
                        <input type="password" id="password" name="password" placeholder="Password" required />
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default LoginComponent;
