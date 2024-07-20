import React from 'react';
import { GoShare } from "react-icons/go";
import './ShareButton.css'
function ShareButton({ speed }) {
    const handleShare = () => {
        const url = `${window.location.origin}/tracking?speed=${speed}`;
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
    };

    return (
        <button onClick={handleShare} className="share-button">
            <GoShare size={20} />
        </button>
    );
}

export default ShareButton;
