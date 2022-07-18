import { Link } from 'react-router-dom';
import './cardMenu.css';

interface Props {
  img: string;
  name: string;
}

function CardMenu(props: Props) {
  return (
    <div className="pf__card">
      <img src={props.img} alt={props.name} />
      <h3>{props.name}</h3>
      <div className="pf__card-button">
        <button type="button" className="pf__card-button_order">
          Order
        </button>
        <div className="pf__card-button_line" />
        <button type="button" className="pf__card-button_about">
          About
        </button>
      </div>
    </div>
  );
}
export default CardMenu;
