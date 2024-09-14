import React, { useEffect, useState, useRef } from 'react';
import api from '../../ApiService/apiService';
import { useNavigate } from 'react-router-dom';
import NotificationCenter from '../../CommonModule/Notification/Notification';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showAlert, SetShowAlert] = useState(false);
    const navigate = useNavigate();

    const notificationRef = useRef();
    const triggerNotification = (type, title, subtitle, button, path) => {
        console.log(type, title, subtitle, button, path);
        if (notificationRef.current) {
            console.log(notificationRef.current);

            notificationRef.current.spawnNotification(type, title, subtitle, button, path);
        }
    };

    const doLogin = async (event) => {
        event.preventDefault();

        const post = {
            email: email,
            password: password,
        };

        try {
            const response = await api.Login(post);
            let id = JSON.parse(response.data.user)
            localStorage.setItem('userId', id._id);
            localStorage.setItem('login', "success");
            triggerNotification('success', 'Success', 'Login Successful', 'x', null)
            setTimeout(() => {
                navigate('/home');
            }, 2000)
        } catch (error) {
            console.error('Login Error:', error.response.data.message);
            triggerNotification('error', 'Error', error.response.data.message, 'x', null)
            SetShowAlert(true);
        }
    };


    return (
        <>
            <NotificationCenter ref={notificationRef} />
            <div class="rts-register-area rts-section-gap bg_light-1">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="registration-wrapper-1">
                                <div class="logo-area mb--0">
                                    <img class="mb--10" src="images/logo/fav.png" alt="logo" />
                                </div>
                                <h3 class="title">Login Into Your Account</h3>
                                <form action="#" class="registration-form" onSubmit={doLogin}>
                                    <div class="input-wrapper">
                                        <label for="email">Email*</label>
                                        <input type="email" id="email" value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required />
                                    </div>
                                    <div class="input-wrapper">
                                        <label for="password">Password*</label>
                                        <input type="password" id="password" value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required />
                                    </div>
                                    <button class="rts-btn btn-primary">Login Account</button>
                                    <div class="another-way-to-registration">
                                        {/* <div class="registradion-top-text">
                                            <span>Or Register With</span>
                                        </div>
                                        <div class="login-with-brand">
                                            <a href="#" class="single">
                                                <img src="images/form/google.svg" alt="login" />
                                            </a>
                                            <a href="#" class="single">
                                                <img src="images/form/facebook.svg" alt="login" />
                                            </a>
                                        </div> */}
                                        <p>Don't Have an Account? <a onClick={() => navigate('/register')} className='pointer'>Register</a></p>
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
