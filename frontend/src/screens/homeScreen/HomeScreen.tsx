import './homeScreen.css';
import { HomeStart, HomeWhoWeAre, CTA } from './homeScreenContainers/index';

let hours = new Date().getHours();

function HomeScreen() {
  return (
    <div className="pf__home">
      <HomeStart hours={hours} />
      <HomeWhoWeAre />
      <CTA />
    </div>
  );
}
export default HomeScreen;
