import { CardAbout } from '../components';
import { useState } from 'react';
import './cardMenu.css';

interface Props {
  dish: {
    name: string;
    ingredients: string[];
    weight: number;
    calories: number;
    img: any;
  };
}

function CardMenu(props: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="pf__card">
      <img src={props.dish.img} alt={props.dish.name} />
      <h3>{props.dish.name}</h3>
      <div className="pf__card-button">
        <button type="button" className="pf__card-button_order">
          Order
        </button>
        <div className="pf__card-button_line" />
        <button
          type="button"
          className="pf__card-button_about"
          onClick={togglePopup}
        >
          {isOpen && <CardAbout handleClose={togglePopup} dish={props.dish} />}
          About
        </button>
      </div>
    </div>
  );
}
export default CardMenu;
