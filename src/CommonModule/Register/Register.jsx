import React, { useState } from 'react';
import api from '../../ApiService/apiService';
import { useNavigate } from 'react-router-dom';


export const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showAlert, SetShowAlert] = useState(false);
    const navigate = useNavigate();

    const doRegister = async (event) => {
        event.preventDefault();

        // Form validation
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const post = {
            name: firstName,
            email: email,
            mobile: phone,
            password: password,
        };
        const response = await api.Register(post);
        console.log(response);

    };


    return (
        <>
            {showAlert && (
                <div className="alert">
                    <p>Registration successful!</p>
                </div>
            )}

            <div className="rts-register-area rts-section-gap bg_light-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="registration-wrapper-1">
                                <div className="logo-area mb--0">
                                    <img className="mb--10" src="images/logo/fav.png" alt="logo" />
                                </div>
                                <h3 className="title">Register Into Your Account</h3>
                                <form className="registration-form" onSubmit={doRegister}>
                                    <div className="input-wrapper">
                                        <label htmlFor="name">Name*</label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="input-wrapper">
                                        <label htmlFor="email">Email*</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="input-wrapper">
                                        <label htmlFor="mobile">Mobile*</label>
                                        <input
                                            type="number"
                                            id="mobile"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="input-wrapper">
                                        <label htmlFor="password">Password*</label>
                                        <input
                                            type="password"
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="input-wrapper">
                                        <label htmlFor="confirmPassword">Confirm Password*</label>
                                        <input
                                            type="password"
                                            id="confirmPassword"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <button className="rts-btn btn-primary" type="submit">
                                        Register Account
                                    </button>
                                    <div className="another-way-to-registration">
                                        <p>Already Have Account? <a onClick={() => navigate('/login')} className='pointer'>Login</a></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
