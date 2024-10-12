// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Podcast.css';

const Podcast = () => {
    return (
        <div className="title-section">
            <div className="podcast-container"> {/* تغییر نام کلاس */}
                <div className="podcast-title">پادکست ها</div> {/* تغییر نام کلاس */}
                <div className="podcast-circle"> {/* تغییر نام کلاس */}
                    <span className="podcast-circle-text"></span> {/* تغییر نام کلاس */}
                </div>
            </div>
            <div className="subtitle">مجموعه‌ای از تمام آنچه شما نیاز دارید</div>
        </div>
    );
}

export default Podcast;

