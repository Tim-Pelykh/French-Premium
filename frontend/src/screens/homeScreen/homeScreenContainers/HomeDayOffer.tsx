import { CardMenu } from '../../../components/components';
import { croissant, salmon, soupe } from '../../../images/images';
import '../homeScreen.css';

function HomeDayOffer() {
  return (
    <div className="pf__home-offer">
      <h1>Délicieux of the day </h1>
      <p>Choose the tastiest offer of the day in Prime Français </p>
      <div className="pf__home-offer_menu">
        <CardMenu img={croissant} name="Strawberry Crème Croissant" />
        <div className="pf__home-offer_menu-line" />
        <CardMenu img={salmon} name="Salmon En Papillote" />
        <div className="pf__home-offer_menu-line" />
        <CardMenu img={soupe} name=" Soupe Àó L'oignon" />
      </div>
    </div>
  );
}
export default HomeDayOffer;
