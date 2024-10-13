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
                    <img src='/images/Rectangle 37.png'></img>
                </div>
                <div className="square">
                <img src='/images/Rectangle 38.png'></img>
                </div>
                <div className="rectangle">
                <img src='/images/Rectangle 41.png'></img>
                </div>
                <div className="rectangle">
                <img src='/images/Rectangle 40.png'></img>
                </div>
                <div className="square mt-custom">
                <img src='/images/Rectangle 42.png'></img>
                </div>  
                <div className="square mt-custom">
                <img src='/images/Rectangle 43.png'></img>
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
