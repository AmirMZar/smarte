// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaHeart, FaEye, FaClock } from 'react-icons/fa'; // Import icons from react-icons
import './Podcast.css';

const Podcast = () => {
    return (
        <div className="title-section">
            <div className="podcast-container">
                <div className="podcast-title">پادکست ها</div>
                <div className="podcast-circle">
                    <span className="podcast-circle-text"></span> {/* متن داخل دایره */}
                </div>
            </div>
            <div className="subtitle">مجموعه‌ای از تمام آنچه شما نیاز دارید</div>

            {/* کادر جدید */}
            <div className="custom-box">
                <div className="date">تاریخ: 21 مهر 1403</div> {/* تاریخ به صورت مستقیم */}
                <h2 className="box-title">شروع یادگیری توسعه وب با ری اکت</h2>
                <p className="box-description">
                    ری اکت به عنوان یک از محبوب ترین کتابخانه های جاوا اسکریپتی و یکی از مهمترین ابزا های توسعه وب شناخته می شود
                </p>
                <div className="right-box">
               
                </div>

                {/* بخش پایین سمت چپ */}
                <div className="stats"> 
                    <span className="stat-item">
                        <span className="timer">00:45:30</span>
                        <FaClock className="icon" /> {/* Clock icon */}
                    </span>
                    <span className="stat-item">
                        <span className="stat-number">250</span>
                        <FaEye className="icon" /> {/* Eye icon */}
                    </span>
                    <span className="stat-item">
                        <span className="stat-number">102</span>
                        <FaHeart className="icon" /> {/* Heart icon */}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Podcast;
