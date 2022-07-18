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
import Map from './Map/Map';
import './contact.css';

function Contact() {
  const location = {
    address: '10 Downing St, London SW1A 2AB',
    lat: 51.50348,
    lng: -0.12734,
  };

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
          <Map location={location} zoomLevel={17} />
        </div>
      </div>
    </div>
  );
}
export default Contact;
