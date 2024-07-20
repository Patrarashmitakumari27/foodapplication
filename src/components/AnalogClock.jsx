import { useEffect, useState } from "react";
import "./AnalogClock.css";

export default function AnalogClock({ speed }) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const targetTime = new Date(currentTime.getTime() - 2 * 60 * 60 * 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime((prevTime) => {
        const newTime = new Date(prevTime.getTime() - 1000 * speed);
        if (newTime <= targetTime) {
          clearInterval(interval);
          return prevTime;
        }
        return newTime;
      });
    }, 1000 / speed);

    return () => clearInterval(interval);
  }, [targetTime, speed]);
  
  const seconds = currentTime.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;

  const mins = currentTime.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;

  const hour = currentTime.getHours();
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;

  return (
    <div className="container">
      <div className="clock">
        <div className="clock-face">
          <div className="hand hour_hand" style={{ transform: `rotate(${hourDegrees}deg)` }}></div>
          <div className="hand min_hand" style={{ transform: `rotate(${minsDegrees}deg)` }}></div>
          <div className="hand sec_hand" style={{ transform: `rotate(${secondsDegrees}deg)` }}></div>
          <span className="twelve">12</span>
          <span className="one">1</span>
          <span className="two">2</span>
          <span className="three">3</span>
          <span className="four">4</span>
          <span className="five">5</span>
          <span className="six">6</span>
          <span className="seven">7</span>
          <span className="eight">8</span>
          <span className="nine">9</span>
          <span className="ten">10</span>
          <span className="eleven">11</span>
        </div>
      </div>
    </div>
  );
}
