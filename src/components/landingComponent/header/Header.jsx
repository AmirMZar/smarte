// src/components/landingComponent/header/Header.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [activeTitle, setActiveTitle] = useState('صفحه نخست'); // عنوان پیش‌فرض فعال

    const titles = [
        'تماس با ما',
        'اخبار مقالات',
        'اساتید',
        'دوره ها',
        'صفحه نخست'
    ];

    return (
        <header className="header">
            <div className="header-left">
                <button className="nav-button account-button">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        className="account-icon"
                    >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                        <path d="M12 14c-4 0-8 2-8 6v1h16v-1c0-4-4-6-8-6z" />
                    </svg>
                    حساب کاربری
                </button>

                <button className="nav-button cart-button">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="gray"
                        strokeWidth="2"
                        className="cart-icon"
                    >
                        <path d="M7 4h14l-1.5 9H8.5L7 4z" />
                        <circle cx="10" cy="21" r="1" />
                        <circle cx="17" cy="21" r="1" />
                        <path d="M8 2v-4h2v4h-2z" />
                    </svg>
                </button>

                <button className="nav-button heart-button">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="gray"
                        strokeWidth="2"
                        className="heart-icon"
                    >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </button>
            </div>
            <div className="header-center">
                {titles.map(title => (
                    <div key={title} onClick={() => setActiveTitle(title)} className="header-title-container">
                        <h1 className="header-title">{title}</h1>
                        {activeTitle === title && <div className="orange-line"></div>}
                    </div>
                ))}
            </div>
            <div className="header-right">
                <img src="/path/to/logo.png" alt="Logo" className="logo" />
            </div>
        </header>
    );
};

export default Header;
