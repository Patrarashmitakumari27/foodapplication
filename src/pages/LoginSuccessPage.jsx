import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut, deleteUser } from 'firebase/auth';
import './LoginSuccessPage.css';
import backgroundImage from './../assets/Food App/food4.jpg';
import image from './../assets/Food App/39973.jpg';
function LoginSuccessPage() {
    const navigate = useNavigate();
    const auth = getAuth();

    const handleTrackingPage = () => {
        navigate('/tracking');
    };

    const handleLogout = async () => {
        const user = auth.currentUser;
        if (user) {
            try {
                await deleteUser(user);
                navigate('/page1');
            } catch (error) {
                console.error('Logout and deletion failed', error);
            }
        } else {
            navigate('/page1');
        }
    };

    return (
        <div className="login-success"style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
          <div className='content-container1' >
            <div className='content-image'>
              <img src={image} alt='successfully Completed' className='tick-image'/>
            </div>
            <h1>Login Successful!</h1>
            <button onClick={handleTrackingPage} className="tracking-button">Go to Tracking Page</button>
            <button onClick={handleLogout} className="logout-button">signOut</button>
          </div>
        </div>
    );
}

export default LoginSuccessPage;
