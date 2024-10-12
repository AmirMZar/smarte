// Footer.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaInstagram, FaTelegramPlane, FaYoutube, FaLinkedin } from 'react-icons/fa';
import './Footer.css'; // فایل CSS برای استایل

const Footer = () => {
    return (
        <footer className="footer-container">

             {/* لینک‌های فوتر به صورت دو ستونه */}
             <ul className="footer-links">
                <li><a href="#link1">لینک ۱</a></li>
                <li><a href="#link2">لینک ۲</a></li>
                <li><a href="#link3">لینک ۳</a></li>
                <li><a href="#link4">لینک ۴</a></li>
                <li><a href="#link5">لینک ۵</a></li>
                <li><a href="#link6">لینک ۶</a></li>
                <li><a href="#link7">لینک ۷</a></li>
                <li><a href="#link8">لینک ۸</a></li>
            </ul>

            {/* بخش توضیحات و شبکه‌های اجتماعی */}
            <div className="footer-content">

                {/* دکمه‌های شبکه‌های اجتماعی */}
                <div className="social-buttons">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn">
                        <FaInstagram />
                    </a>
                    <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="social-btn">
                        <FaTelegramPlane />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-btn">
                        <FaYoutube />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
