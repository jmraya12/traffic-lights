import React from 'react';
import './TrafficLight.css'; // Import the CSS file for styles

const TrafficLight = ({ color, isActive }) => {
    return (
        <div className={`light ${color} ${isActive ? 'active' : ''}`}></div>
    );
};

export default TrafficLight;