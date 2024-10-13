// eslint-disable-next-line no-unused-vars
import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="/path-to-your-logo.png" alt="Logo" />
      </div>
      <p className="footer-text">
        مجموعه آموزشی فلان فعالیت خود را از سال ۱۳۹۰ آغاز کرده است و امروز به بزرگترین کلونی برنامه نویسی شمال کشور تبدیل شده است
      </p>
      <h3 className="footer-heading">ساری ، میدان خــزر ، جــاده فــرح آباد ، جنب مجتمع دنیای آرزو    011 - 43332000</h3> {/* تگ h اضافه شده */}
      <div className="footer-content">
        <div className="footer-buttons">
          <button className="footer-button">
            <FontAwesomeIcon icon={faInstagram} />
          </button>
          <button className="footer-button">
            <FontAwesomeIcon icon={faTelegram} />
          </button>
          <button className="footer-button">
            <FontAwesomeIcon icon={faYoutube} />
          </button>
          <button className="footer-button">
            <FontAwesomeIcon icon={faLinkedin} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
