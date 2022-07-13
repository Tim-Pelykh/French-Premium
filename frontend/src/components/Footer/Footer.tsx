import './footer.css';
import { fbIcon, githubIcon, linkedIcon } from '../../icons/icons';

function Footer() {
  return (
    <div className="pf__footer">
      <div className="pf__footer-text">
        <p>Prime Français, 2022 © All rights reserved</p>
      </div>
      <div className="pf__footer-me">
        <p>Created by Tim Pelykh</p>
      </div>
      <div className="pf__footer-icons">
        <a
          href="https://www.linkedin.com/in/tim-pelykh-525400240/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedIcon} alt="LinkedIn Icon" />
        </a>
        <a
          href="https://github.com/Tim-Pelykh"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="Github Icon" />
        </a>
        <a
          href="https://www.facebook.com/timPelykh/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={fbIcon} alt="Facebook Icon" />
        </a>
      </div>
    </div>
  );
}
export default Footer;
