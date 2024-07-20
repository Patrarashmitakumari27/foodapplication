import React, { useState, useEffect } from 'react';
import AnalogClock from '../components/AnalogClock';
import Slider from '../components/Slider';
import ShareButton from '../components/ShareButton';
import './TrackingPage.css';
import { FaHome } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";

function TrackingPage() {
    const [speed, setSpeed] = useState(1);
    const [quote, setQuote] = useState(null); 
    const [timeLeft, setTimeLeft] = useState(7200000); // Initial time left in milliseconds (e.g., 2 hours)

    const DigitalCountdown = ({ timeLeft }) => {
        const hours = Math.floor(timeLeft / 3600000);
        const minutes = Math.floor((timeLeft % 3600000) / 60000);
        const seconds = Math.floor((timeLeft % 60000) / 1000);
      
        return (
          <div className="digital-countdown">
            {`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
          </div>
        );
      };

    const fetchQuote = async () => {
        const apiKey = 'w77is5v0HcWPz/ZSu9Q0Cg==QIP4RAaZcBtsKGlV'; 
        const url = 'https://api.api-ninjas.com/v1/quotes?category=food';
        
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'X-Api-Key': apiKey,
                    'Content-Type': 'application/json'
                }
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log(data);
            setQuote(data[0]); 
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    };

    useEffect(() => {
        fetchQuote();
        const quoteInterval = setInterval(fetchQuote, 5000);

        // Update the countdown every second
        const countdownInterval = setInterval(() => {
            setTimeLeft(prevTimeLeft => (prevTimeLeft > 1000 ? prevTimeLeft - 1000 : 0));
        }, 1000);

        return () => {
            clearInterval(quoteInterval);
            clearInterval(countdownInterval);
        };
    }, []);
    
    return (
        <div className='tracking-container'>
            <div className="tracking-page">
                <h3 className='tracking-heading' style={{fontFamily: 'inter'}}>Your Order is Successfully Placed!!</h3>
                <h5 style={{fontFamily: 'inter'}}>And will reach in..<DigitalCountdown timeLeft={timeLeft} /></h5>
                <AnalogClock speed={speed} />
                <Slider speed={speed} setSpeed={setSpeed} />
                {quote && (
                    <div className="quote">
                        <p>"{quote.quote}"</p>
                        <p><strong>- {quote.author}</strong></p>
                    </div>
                )}
                <div className='tracking-div'>
                    
                    <buton className='tracking-logo'><FaHome /></buton>
                     <button className='tracking-logo'><MdFastfood /></button>
                     <button className='tracking-btn'>Order Details</button>
                    <ShareButton speed={speed} />
                </div>
            </div>
        </div>
    );
}

export default TrackingPage;
