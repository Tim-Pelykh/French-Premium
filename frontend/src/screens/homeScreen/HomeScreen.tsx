import './homeScreen.css';
import { HomeStart, HomeWhoWeAre } from './homeScreenContainers/index';

let hours = new Date().getHours();

function HomeScreen() {
  return (
    <div className="pf__home">
      <HomeStart hours={hours} />
      <HomeWhoWeAre />
    </div>
  );
}
export default HomeScreen;
