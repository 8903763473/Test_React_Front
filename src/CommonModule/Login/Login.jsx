import React, { useEffect, useState } from 'react';
import api from '../../ApiService/apiService';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();


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
                                <form action="#" class="registration-form">
                                    <div class="input-wrapper">
                                        <label for="email">Email*</label>
                                        <input type="email" id="email"/>
                                    </div>
                                    <div class="input-wrapper">
                                        <label for="password">Password*</label>
                                        <input type="password" id="password"/>
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
