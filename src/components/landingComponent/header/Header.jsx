// src/components/landingComponent/header/Header.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <button className="nav-button heart-button">❤️</button>
                <button className="nav-button cart-button">🛒</button>
                <button className="nav-button account-button">حساب کاربری</button>
            </div>
            <div className="header-center">
                <h1 className="header-title">عنوان ۱</h1>
                <h1 className="header-title">عنوان ۲</h1>
                <h1 className="header-title">عنوان ۳</h1>
                <h1 className="header-title">عنوان ۴</h1>
                <h1 className="header-title">عنوان ۵</h1>
            </div>
            <div className="header-right">
                <img src="/path/to/logo.png" alt="Logo" className="logo" />
            </div>
        </header>
    );
};

export default Header; // این خط باید وجود داشته باشد
