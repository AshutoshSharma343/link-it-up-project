import React from 'react';
import './influencerRegistration.css';

const RegistrationForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        // Here you can handle form submission, e.g., send data to server
    };

    return (
        <div className="divbody">
            <div className="container">
                <h2>Registration Form</h2>
                <form id="registrationForm" onSubmit={handleSubmit}>
                    <div className="flex-row">
                        <div className="flex-column">
                            <div className="input-group">
                                <label htmlFor="firstName">First Name:</label>
                                <input type="text" id="firstName" name="firstName" required />
                            </div>
                        </div>
                        <div className="flex-column">
                            <div className="input-group">
                                <label htmlFor="lastName">Last Name:</label>
                                <input type="text" id="lastName" name="lastName" required />
                            </div>
                        </div>
                    </div>

                    {/* Gender and Date of Birth in one line */}
                    <div className="flex-row">
                        <div className="flex-column">
                            <div className="input-group">
                                <label htmlFor="gender">Gender:</label>
                                <select id="gender" name="gender" required>
                                    <option value="">Please Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex-column">
                            <div className="input-group">
                                <label htmlFor="dob">Date of Birth:</label>
                                <input type="date" id="dob" name="dob" required />
                            </div>
                        </div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email ID:</label>
                        <input type="email" id="email" name="email" placeholder="example@example.com" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="youtubeUserName">YouTube Username:</label>
                        <input type="text" id="youtubeUserName" name="youtubeUserName" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="instagramUsername">Instagram Username:</label>
                        <input type="text" id="instagramUsername" name="instagramUsername" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" required />
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
