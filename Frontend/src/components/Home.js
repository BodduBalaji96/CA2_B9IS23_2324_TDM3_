import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';
import Menu from './Menu';
import ContactUs from './ContactUs';
import './Home.css';

const Home = ({ onLogin }) => {
    const [activeComponent, setActiveComponent] = useState(null);

    const renderComponent = () => {
        switch (activeComponent) {
            case 'register':
                return <Register />;
            case 'login':
                return <Login onLogin={onLogin} />;
            case 'viewMenu':
                return <Menu />;
            case 'contactUs':
                return <ContactUs />;
            default:
                return null;
        }
    };
return (
        <div className="home-container">
            <h1>Welcome to Balaji Khna Kajana  </h1>
            <p>Savor authentic flavors with a royal touch – where tradition meets taste </p>
            <div className="home-buttons">
                <button onClick={() => setActiveComponent('register')}>Register</button>
                <button onClick={() => setActiveComponent('login')}>Login</button>
                <button onClick={() => setActiveComponent('viewMenu')}>Menu</button>
                <button onClick={() => setActiveComponent('contactUs')}>Contact Us</button>
            </div>

            { 
            <img 
                className="restaurant-image" 
                src="/a.jpg" 
                alt="Restaurant" 
            /> 
            }

            <div className="component-container">
                {renderComponent()}
            </div>
        </div>
    );
};

export default Home;
