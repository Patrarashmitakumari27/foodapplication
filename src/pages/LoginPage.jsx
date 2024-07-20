import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../firebase/auth';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import the icons from react-icons
import './LoginPage.css';
import image from './../assets/Food App/googleicon.png';

export default function LoginPage() {
    const { userLoggedIn } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithEmailAndPassword(email, password);
                navigate('/login-success');
            } catch (error) {
                setErrorMessage('Wrong email or password');
                setIsSigningIn(false);
            }
        }
    };

    const onGoogleSignIn = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithGoogle();
                navigate('/login-success');
            } catch (error) {
                setIsSigningIn(false);
            }
        }
    };

    return (
        <div className="login-container"><div>
            <h1 className='login-heading'>Login to your account.</h1>
            <p className='login-para'>Please sign in to your account</p>
            <form onSubmit={onSubmit}>
                <div className="input-group">
                    <label>Email Address</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="off"
                        required
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
                <div className='forget-div'>
                <p onClick={() => navigate('/forgot-password')} className='forget'>Forgot password?</p></div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <button type="submit" disabled={isSigningIn} className='login'>Sign In</button>
                <div className='google-box'>
                    <div className='google-line'></div>
                    <p className='google-para'>Or sign in with</p>
                    <div className='google-line'></div>
                </div>
                <button onClick={onGoogleSignIn} disabled={isSigningIn} className='google-btn'>
                    <div className='google-div'>
                        <img src={image} alt='google-logo' />
                    </div>
                </button>
                <p className='registor-div'>Don't have an account? <button onClick={() => navigate('/create-account')} className='register'>Register</button></p>
            </form>
        </div></div>
    );
}
