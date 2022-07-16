import './homeScreen.css';
import { HomeStart, HomeWhoWeAre, HomeCTA } from './homeScreenContainers/index';

let hours = new Date().getHours();

function HomeScreen() {
  return (
    <div className="pf__home">
      <HomeStart hours={hours} />
      <HomeWhoWeAre />
      <HomeCTA />
    </div>
  );
}
export default HomeScreen;
