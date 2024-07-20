import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SliderPage2.css';
import backgroundImage from './../assets/Food App/food 2.webp';
import { IoMdArrowForward } from "react-icons/io";

function SliderPage2() {
    const navigate = useNavigate();
    const nextPage = () => navigate('/page3');
    const skipPage = () => navigate('/login');

    return (
        <div className="slider-page" style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className="content-container">
                <h1 className="title">We serve incomparable delicacies</h1>
                <p className="subtitle">At the best restaurants with their top menus waiting for you, they can't wait for you either!</p>
                <div className="slider-line">
                    <span className="dot"></span>
                    <span className="dot active"></span>
                    <span className="dot"></span>
                </div>
                <div className="button-container">
                    <button className="skip-button" onClick={skipPage}>Skip</button>
                    <button className="next-button" onClick={nextPage}>Next <IoMdArrowForward className="arrow"/></button>
                </div>
            </div>
            <div className="footer-line"><span className="line"></span></div>
        </div>
    );
}

export default SliderPage2;
