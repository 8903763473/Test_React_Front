import React, { useState } from 'react'
import api from '../../ApiService/apiService'

export const Register = () => {

    const [showAlert, SetShowAlert] = useState(false)

    const doRegister = async (event) => {
        event.preventDefault();

        let post = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            mobile: document.getElementById('mobile').value,
            password: document.getElementById('password').value
        };

        const confirmPassword = document.getElementById('Contirmpassword').value;
        if (post.password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        try {
            const response = await api.Register(post);
            if (response.status === 200 || response.data.success) {
                SetShowAlert(true);
            } else {
                SetShowAlert(true);
            }
        } catch (error) {
            console.log(error);
            SetShowAlert(true);
        }
    }


    return (
        <>
            {
                showAlert && (
                    <div class="w-full md:w-1/3 mx-auto">
                        <div class="flex flex-col p-5 rounded-lg shadow bg-white">
                            <div class="flex flex-col items-center text-center">
                                <div class="inline-block p-4 bg-yellow-50 rounded-full">
                                    <svg class="w-12 h-12 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" /></svg>
                                </div>
                                <h2 class="mt-2 font-semibold text-gray-800">Warning Alert Title With Large Icon and Action</h2>
                                <p class="mt-2 text-sm text-gray-600 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum impedit ipsam nam quam! Ab accusamus aperiam distinctio doloribus, praesentium quasi reprehenderit soluta unde?</p>
                            </div>

                            <div class="flex items-center mt-3">
                                <button class="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
                                    Cancel
                                </button>

                                <button class="flex-1 px-4 py-2 ml-2 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-medium rounded-md">
                                    Agree
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }


            <div class="rts-register-area rts-section-gap bg_light-1">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="registration-wrapper-1">
                                <div class="logo-area mb--0">
                                    <img class="mb--10" src="images/logo/fav.png" alt="logo" />
                                </div>
                                <h3 class="title">Register Into Your Account</h3>
                                <form class="registration-form">
                                    <div class="input-wrapper">
                                        <label for="name">Name*</label>
                                        <input type="text" id="name" />
                                    </div>
                                    <div class="input-wrapper">
                                        <label for="email">Email*</label>
                                        <input type="email" id="email" />
                                    </div>
                                    <div class="input-wrapper">
                                        <label for="mobile">Mobile*</label>
                                        <input type="number" id="mobile" />
                                    </div>
                                    <div class="input-wrapper">
                                        <label for="password">Password*</label>
                                        <input type="password" id="password" />
                                    </div>
                                    <div class="input-wrapper">
                                        <label for="Contirmpassword">Contirm Password*</label>
                                        <input type="password" id="Contirmpassword" />
                                    </div>
                                    <button class="rts-btn btn-primary" onClick={doRegister}>Register Account</button>
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
                                        <p>Already Have Account? <a href="#">Login</a></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
