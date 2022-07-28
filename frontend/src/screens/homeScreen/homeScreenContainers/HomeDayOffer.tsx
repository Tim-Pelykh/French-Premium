import { CardMenu } from '../../../components/components';
import '../homeScreen.css';
import data from '../../../data';

function HomeDayOffer() {
  return (
    <div className="pf__home-offer">
      <h1 className="pf__home-offer_heading">Délicieux of the day </h1>
      <p className="pf__home-offer_paragraph">
        Choose the tastiest offer of the day in Prime Français{' '}
      </p>
      <div className="pf__home-offer_menu">
        <CardMenu dish={data[0]} />
        <div className="pf__home-offer_menu-line" />
        <CardMenu dish={data[1]} />
        <div className="pf__home-offer_menu-line" />
        <CardMenu dish={data[2]} />
      </div>
    </div>
  );
}
export default HomeDayOffer;
