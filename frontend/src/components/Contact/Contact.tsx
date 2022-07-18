import { Link } from 'react-router-dom';
import {
  fbIcon2,
  gmailIcon,
  igIcon,
  phoneIcon,
  pinterestIcon,
  twitterIcon,
  youtubeIcon,
} from '../../icons/icons';
import './contact.css';

function Contact() {
  return (
    <div className="pf__contact">
      <div className="pf__contact-social">
        <Link to="/sorry">
          <img src={igIcon} alt="Instagram Icon" />
        </Link>{' '}
        <Link to="/sorry">
          <img src={fbIcon2} alt="Facebook Icon" />
        </Link>{' '}
        <Link to="/sorry">
          <img src={twitterIcon} alt="Twitter Icon" />
        </Link>{' '}
        <Link to="/sorry">
          <img src={pinterestIcon} alt="Pinterest Icon" />
        </Link>{' '}
        <Link to="/sorry">
          <img src={youtubeIcon} alt="Youtube Icon" />
        </Link>
      </div>
      <div className="pf__contact-line"></div>
      <div className="pf__contact-hours">
        <h2>Working Hours</h2>
        <div className="pf__contact-hours_content">
          <h3>Monday - Thursday</h3>
          <p>07:30 - 18:00</p>
          <div className="pf__contact-hours_content-line" />
          <h3>Friday</h3>
          <p>07:30 - 20:00</p>
          <div className="pf__contact-hours_content-line" />
          <h3>Saturday - Sunday</h3>
          <p>Day Off</p>
        </div>
      </div>
      <div className="pf__contact-line"></div>
      <div className="pf__contact-info">
        <h2>Contact Us</h2>
        <div className="pf__contact-info_content-top">
          <h3>Our Address</h3>
          <p>10 Downing St.,</p>
          <p>London,</p>
          <p>SW1A 2AA</p>
        </div>
        <div className="pf__contact-info_content-bottom">
          <div className="pf__contact-info_content-bottom_left">
            <img src={gmailIcon} alt="Gmail Icon" />
            <p>contact@primafr.com</p>
          </div>
          <div className="pf__contact-info_content-bottom_center-line" />
          <div className="pf__contact-info_content-bottom_right">
            <img src={phoneIcon} alt="Mobile Phone Icon" />
            <p>+44 (111) 222 33 44</p>
          </div>
        </div>
      </div>
      <div className="pf__contact-line"></div>
      <div className="pf__contact-map">
        <h2>Find Us On Map</h2>
        <div className="pf__contact-map_gmaps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5350177003265!2d-0.1277265!3d51.503399800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c56f3b61c7%3A0x9c97d4222fab0eb7!2s10%20Downing%20St%2C%20London%20SW1A%202AB!5e0!3m2!1sru!2suk!4v1658161122833!5m2!1sru!2suk"
            width="450"
            height="220"
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
export default Contact;
