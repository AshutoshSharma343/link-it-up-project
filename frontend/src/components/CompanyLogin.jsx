import React from 'react';
import './companylogin.css'

const CompanyLogin = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        // Here you can handle form submission, e.g., send data to server
    };

    return (
        <div className="divbody" >
        <div className="login-container">
            <div className="login-section">
                <h1 className="login-title">Company Login</h1>
                <form id="loginForm" className="login-form" onSubmit={handleSubmit}>
                    <div className="input-container">
                        <input type="email" id="email" name="email" placeholder="Company Name" required />
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

export default CompanyLogin;
