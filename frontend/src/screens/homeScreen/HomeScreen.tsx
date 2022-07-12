import './homeScreen.css';
import { homeBG } from '../../images/images.js';
import { arrowDown, circle } from '../../icons/icons.js';

function HomeScreen() {
  return (
    <div className="pf__home">
      <div className="pf__home-start">
        <img src={homeBG} id="main-img" alt="Starting page" />
        <div className="pf__home-start_imgOverlay" />
        <h1>Bonjour</h1>
        <h2>Dear Guest</h2>
        <img
          src={arrowDown}
          alt="Arrow goes down"
          className="pf__home-start_arrow"
        />
        <img src={circle} alt="Circle" className="pf__home-start_circle" />
      </div>
    </div>
  );
}
export default HomeScreen;
