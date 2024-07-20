import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SliderPage3.css';
import backgroundImage from './../assets/Food App/Food 3.webp';
import { IoMdArrowForward } from "react-icons/io";

function SliderPage3() {
    const navigate = useNavigate();
    const loginPage = () => navigate('/login');

    return (
        <div className="slider-page" style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: "no-repeat" }}>
            <div className="overlay">
                <h1>We serve incomparable delicacies</h1>
                <p>All the best restaurants with their top menus ready for you. Easy, tasty, and just for your taste</p>
                <div className="slider-line">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot active"></span>
                </div>
                <button onClick={loginPage} className="login-button"><IoMdArrowForward className="arrow1" size={20}/></button>
            </div>
            <div className="footer-line"><span className="line"></span></div>
        </div>
    );
}

export default SliderPage3;
