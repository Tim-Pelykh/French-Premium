import './homeScreen.css';
import { homeBG } from '../../images/images.js';
import { arrowDown } from '../../icons/icons.js';

const hours = new Date().getHours();

function HomeScreen() {
  return (
    <div className="pf__home">
      <div className="pf__home-start">
        <img src={homeBG} id="main-img" alt="Starting page" />
        <div className="pf__home-start_imgOverlay" />
        <div className="pf__home-start_content">
          {hours >= 12 ? <h1>Bonsoir</h1> : <h1>Bonjoir</h1>}
          <p>Dear Guest</p>
          <a href="#about">
            <img
              src={arrowDown}
              alt="Arrow goes down"
              className="pf__home-start_content-arrow"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
export default HomeScreen;
