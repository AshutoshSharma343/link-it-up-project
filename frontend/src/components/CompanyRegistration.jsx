import React from 'react';
import './companyreg.css';

const CompanyRegistrationForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        // Here you can handle form submission, e.g., send data to server
    };

    return (
        <div className="divbody">
        <div className="form-container">
            <h2>Company Registration Form</h2>
            <form id="registration-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="company-name">Company Name*</label>
                    <input type="text" id="company-name" name="company_name" placeholder="Enter company name" required />
                </div>
                
                <div className="form-group">
                    <label htmlFor="industry">Industry*</label>
                    <select id="industry" name="industry" required>
                        <option value="">Select Industry</option>
                        <option value="fintech">Fintech</option>
                        <option value="edutech">Edutech</option>
                        <option value="health">Health</option>
                        {/* Add other industries as needed */}
                    </select>
                </div>
                
                <div className="form-group">
                    <label htmlFor="description">Company Description (100-150 words)*</label>
                    <textarea id="description" name="description" placeholder="Describe your company (100-150 words)" required minLength="100" maxLength="150"></textarea>
                </div>
                
                <div className="form-group">
                    <label htmlFor="website">Company Website</label>
                    <input type="url" id="website" name="website" placeholder="https://yourcompany.com" />
                </div>
                
                <div className="form-group">
                    <label htmlFor="password">Password*</label>
                    <input type="password" id="password" name="password" placeholder="Create a password" required />
                </div>
                
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password*</label>
                    <input type="password" id="confirm-password" name="confirm_password" placeholder="Confirm your password" required />
                </div>
                
                <div className="form-group">
                    <button type="submit" id="register-button">Register Company</button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default CompanyRegistrationForm;
