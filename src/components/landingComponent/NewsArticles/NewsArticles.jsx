// eslint-disable-next-line no-unused-vars
import React from 'react';
import './NewsArticles.css';

const NewsArticles = () => {
    return (
        <div className="title-section">
            <div className="title-container">
                <div className="title">اخبار و مقالات</div>
                <div className="circle">
                    <span className="circle-text"></span> {/* متن یا حرفی که داخل دایره باشد */}
                </div>
            </div>
            <div className="subtitle"> !خودت را با خبر کن</div>

            {/* گالری تصاویر */}
            <div className="gallery">
                <div className="square">
                    <img src='/images/Rectangle 37.png' alt="تصویر 1"></img>
                    <div className="image-caption">  دنیای آنلاین؛ راهی برای افزایش فروش</div>
                </div>
                <div className="square">
                    <img src='/images/Rectangle 38.png' alt="تصویر 2"></img>
                    <div className="image-caption">  بازاریابی حسی راهی ساده و کم هزینه 
                    برای افزایش فروش</div>
                </div>
                <div className="rectangle">
                    <img src='/images/Rectangle 41.png' alt="تصویر 3" className='rectangle-images'></img>
                    <div className="image-caption">  از کجا مشتری پیدا کنم؟ راه‌های پیدا کردن مشتری</div>
                </div>
                <div className="rectangle">
                    <img src='/images/Rectangle 40.png' alt="تصویر 4" className='rectangle-images'></img>
                    <div className="image-caption">  نیازهای مشتری را بشناسید تا درآمدتان بیشتر شود</div>
                </div>
                <div className="square mt-custom">
                    <img src='/images/Rectangle 42.png' alt="تصویر 5"></img>
                    <div className="image-caption">  ورود به دنیای آنلاین؛ راهی مطمئن برای
                    افزایش فروش</div>
                </div>  
                <div className="square mt-custom">
                    <img src='/images/Rectangle 43.png' alt="تصویر 6"></img>
                    <div className="image-caption">  جذب مشتری با تبلیغات دهان به دهان</div>
                </div> 
            </div>

            {/* دکمه مشاهده بیشتر */}
            <div className="button-section mt-custom">
                <button className="view-more-btn">
                    <span className="arrow"> &lt; </span> {/* فلش > */}
                    مشاهده بیشتر
                </button>
            </div>
        </div>
    );
}

export default NewsArticles;
