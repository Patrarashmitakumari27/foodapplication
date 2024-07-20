import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SliderPage1 from './pages/SliderPage1';
import SliderPage2 from './pages/SliderPage2';
import SliderPage3 from './pages/SliderPage3';
import LoginPage from './pages/LoginPage';
import CreateAccount from './pages/CreateAccount';
import LoginSuccessPage from './pages/LoginSuccessPage';
import TrackingPage from './pages/TrackingPage';
import { AuthProvider } from './contexts/authContext/index';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/page1" />} />
                    <Route path="/page1" element={<SliderPage1 />} />
                    <Route path="/page2" element={<SliderPage2 />} />
                    <Route path="/page3" element={<SliderPage3 />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/create-account" element={<CreateAccount />} />
                    <Route path="/login-success" element={<LoginSuccessPage />} />
                    <Route path="/tracking" element={<TrackingPage />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
