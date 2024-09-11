import React, { useEffect, useState } from 'react';
import api from '../../ApiService/apiService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showAlert, SetShowAlert] = useState(false);
    const navigate = useNavigate();

    const doLogin = async (event) => {
        event.preventDefault();

        const post = {
            email: email,
            password: password,
        };

        try {
            const response = await api.Login(post);
            let id=JSON.parse(response.data.user)
            localStorage.setItem('userId', id._id);
            localStorage.setItem('login', "success");
            navigate('/home');
        } catch (error) {
            console.error('Login Error:', error);
            SetShowAlert(true);
        }
    };


    return (
        <>
            <div class="rts-register-area rts-section-gap bg_light-1">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="registration-wrapper-1">
                                <div class="logo-area mb--0">
                                    <img class="mb--10" src="images/logo/fav.png" alt="logo"/>
                                </div>
                                <h3 class="title">Login Into Your Account</h3>
                                <form action="#" class="registration-form" onSubmit={doLogin}>
                                    <div class="input-wrapper">
                                        <label for="email">Email*</label>
                                        <input type="email" id="email"    value={email}
                                            onChange={(e) => setEmail(e.target.value)} 
                                            required />
                                    </div>
                                    <div class="input-wrapper">
                                        <label for="password">Password*</label>
                                        <input type="password" id="password"  value={password}
                                            onChange={(e) => setPassword(e.target.value)} 
                                            required />
                                    </div>
                                    <button class="rts-btn btn-primary">Login Account</button>
                                    <div class="another-way-to-registration">
                                        <div class="registradion-top-text">
                                            <span>Or Register With</span>
                                        </div>
                                        <div class="login-with-brand">
                                            <a href="#" class="single">
                                                <img src="images/form/google.svg" alt="login"/>
                                            </a>
                                            <a href="#" class="single">
                                                <img src="images/form/facebook.svg" alt="login"/>
                                            </a>
                                        </div>
                                        <p>Already Have Account? <a href="#">Login</a></p>
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

export default Login;
