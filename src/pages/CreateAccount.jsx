import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { doSignInWithGoogle } from '../firebase/auth';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './CreateAccount.css';
import image from './../assets/Food App/googleicon.png';

const auth = getAuth();

export default function CreateAccount() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/login');
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('The email address is already in use by another account.');
            }
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await doSignInWithGoogle();
            navigate('/login-success');
        } catch (error) {
            alert('Google sign-in failed');
        }
    };

    return (
        <div className="create-account">
            <h1 className='create-heading'>Create your new account</h1>
            <p className='create-para'>Create an account to start looking for the food you like</p>
            <form onSubmit={handleRegister}>
                <div className="input-group">
                    <label>Email Address</label>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label>User Name</label>
                    <input
                        type="text"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <div className="password-input">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            className="toggle-password"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </button>
                    </div>
                </div>
                <div className="terms">
                    <input type="checkbox" required />
                    <label>
                        I agree with <a href="/terms-of-service">Terms of Service</a> and <a href="/privacy-policy">Privacy Policy</a>
                    </label>
                </div>
                <button type="submit" className="register-button">Register</button>
                <div className='google-box'>
                    <div className='google-line'></div>
                    <p className='google-para'>Or sign in with</p>
                    <div className='google-line'></div>
                </div>
                <button onClick={handleGoogleSignIn} type="button" className="google-button">
                    <div className='google-div'>
                        <img src={image} alt='google-logo' />
                    </div>
                </button>
                <p className="signin-link" onClick={() => navigate('/login')}> Have an account? <span className="signin-span">Sign in</span></p>
            </form>
        </div>
    );
}
