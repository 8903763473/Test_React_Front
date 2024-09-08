import React, { useEffect, useState } from 'react';
import api from '../ApiService/apiService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [activeForm, setActiveForm] = useState('login');

    // State for login form
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    // State for sign-up form
    const [signupName, setSignupName] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [signupConfirmPassword, setSignupConfirmPassword] = useState('');

    // State for forgot password form
    const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');

    const navigate = useNavigate();


    useEffect(() => {
        const isLogged = localStorage.getItem('isLogged');
        if (isLogged === 'true') {
            navigate('home');
        }
    }, [navigate]);


    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        console.log('Login Email:', loginEmail);
        console.log('Login Password:', loginPassword);

        let post = {
            "email": loginEmail,
            "password": loginPassword
        };

        try {
            const response = await api.Login(post);
            console.log('Login Response:', response);
            localStorage.setItem('isLogged', 'true');
            navigate('home')
        } catch (error) {
            console.error('Login Error:', error);
            alert(error.response.data.message);
        }
    };


    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        console.log('Sign Up Name:', signupName);
        console.log('Sign Up Email:', signupEmail);
        console.log('Sign Up Password:', signupPassword);
        console.log('Confirm Password:', signupConfirmPassword);

        // Basic validation example
        if (signupPassword !== signupConfirmPassword) {
            console.error('Passwords do not match.');
            return;
        }

        let post = {
            "name": signupName,
            "email": signupEmail,
            "password": signupPassword
        };

        try {
            const response = await api.Register(post);
            console.log('Signup Response:', response);
            setActiveForm('login')
        } catch (error) {
            console.error('Signup Error:', error);
        }
    };


    const handleForgotPasswordSubmit = (e) => {
        e.preventDefault();
        console.log('Forgot Password Email:', forgotPasswordEmail);
        // Add your forgot password logic here
    };

    const toggleForm = (form) => {
        setActiveForm(form);
    };

    return (
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center min-h-screen">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-xs md:max-w-md w-full">
                {/* Log In Form */}
                {activeForm === 'login' && (
                    <div id="login-form">
                        <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6">Log In</h2>
                        <form onSubmit={handleLoginSubmit}>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                                required
                            />
                            <button
                                type="submit"
                                className="w-full bg-purple-500 text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-purple-600 transition duration-200"
                            >
                                Log In
                            </button>
                            <p className="text-center text-gray-600 mt-6">
                                <button
                                    type="button"
                                    className="text-purple-500 hover:underline"
                                    onClick={() => toggleForm('forgot-password')}
                                >
                                    Forgot Password?
                                </button>
                            </p>
                            <p className="text-center text-gray-600 mt-6">
                                Don’t have an account?{' '}
                                <button
                                    type="button"
                                    className="text-purple-500 hover:underline"
                                    onClick={() => toggleForm('signup')}
                                >
                                    Sign Up
                                </button>
                            </p>
                        </form>
                    </div>
                )}

                {/* Sign Up Form */}
                {activeForm === 'signup' && (
                    <div id="signup-form">
                        <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
                        <form onSubmit={handleSignupSubmit}>
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                value={signupName}
                                onChange={(e) => setSignupName(e.target.value)}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                value={signupEmail}
                                onChange={(e) => setSignupEmail(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                value={signupPassword}
                                onChange={(e) => setSignupPassword(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                value={signupConfirmPassword}
                                onChange={(e) => setSignupConfirmPassword(e.target.value)}
                                required
                            />
                            <button
                                type="submit"
                                className="w-full bg-purple-500 text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-purple-600 transition duration-200"
                            >
                                Sign Up
                            </button>
                            <p className="text-center text-gray-600 mt-6">
                                Already have an account?{' '}
                                <button
                                    type="button"
                                    className="text-purple-500 hover:underline"
                                    onClick={() => toggleForm('login')}
                                >
                                    Log In
                                </button>
                            </p>
                        </form>
                    </div>
                )}

                {/* Forgot Password Form */}
                {activeForm === 'forgot-password' && (
                    <div id="forgot-password-form">
                        <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6">Forgot Password</h2>
                        <form onSubmit={handleForgotPasswordSubmit}>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                value={forgotPasswordEmail}
                                onChange={(e) => setForgotPasswordEmail(e.target.value)}
                                required
                            />
                            <button
                                type="submit"
                                className="w-full bg-purple-500 text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-purple-600 transition duration-200"
                            >
                                Reset Password
                            </button>
                            <p className="text-center text-gray-600 mt-6">
                                Remember your password?{' '}
                                <button
                                    type="button"
                                    className="text-purple-500 hover:underline"
                                    onClick={() => toggleForm('login')}
                                >
                                    Log In
                                </button>
                            </p>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;
