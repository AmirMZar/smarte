// Podcast.tsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PodcastCard from './PodcastCard/PodcastCard'; // وارد کردن کامپوننت جدید
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

            {/* استفاده از PodcastCard */}
            <PodcastCard
                date="21 مهر 1403"
                title="شروع یادگیری توسعه وب با ری اکت"
                description="ری اکت به عنوان یکی از محبوب‌ترین کتابخانه‌های جاوا اسکریپتی و یکی از مهمترین ابزارهای توسعه وب شناخته می‌شود."
                time="00:45:30"
                views={250}
                likes={102}
            />
        </div>
    );
}

export default Podcast;
