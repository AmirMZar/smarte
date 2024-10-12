// PodcastCard.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaHeart, FaEye, FaClock } from 'react-icons/fa';
import '../Podcast.css'; // وارد کردن فایل استایل

// به جای interface از propTypes برای تایپ چکینگ استفاده می‌کنیم
import PropTypes from 'prop-types';

const PodcastCard = ({ date, title, description, time, views, likes }) => {
    return (
        <div className="custom-box">
            <div className="date">تاریخ: {date}</div> {/* تاریخ */}
            <h2 className="box-title">{title}</h2> {/* عنوان */}
            <p className="box-description">{description}</p> {/* توضیحات */}
            <div className="right-box"></div>

            {/* بخش پایین سمت چپ */}
            <div className="stats"> 
                <span className="stat-item">
                    <span className="timer">{time}</span>
                    <FaClock className="icon" /> {/* Clock icon */}
                </span>
                <span className="stat-item">
                    <span className="stat-number">{views}</span>
                    <FaEye className="icon" /> {/* Eye icon */}
                </span>
                <span className="stat-item">
                    <span className="stat-number">{likes}</span>
                    <FaHeart className="icon" /> {/* Heart icon */}
                </span>
            </div>
        </div>
    );
};

// تعریف propTypes برای تایپ چکینگ در جاوااسکریپت
PodcastCard.propTypes = {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};

export default PodcastCard;
