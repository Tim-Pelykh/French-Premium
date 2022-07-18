import './homeScreen.css';
import {
  HomeStart,
  HomeWhoWeAre,
  HomeCTA,
  HomeDayOffer,
} from './homeScreenContainers/index';
import { Contact } from '../../components/components';

let hours = new Date().getHours();

function HomeScreen() {
  return (
    <div className="pf__home">
      <HomeStart hours={hours} />
      <HomeWhoWeAre />
      <HomeDayOffer />
      <HomeCTA />
      <Contact />
    </div>
  );
}
export default HomeScreen;
