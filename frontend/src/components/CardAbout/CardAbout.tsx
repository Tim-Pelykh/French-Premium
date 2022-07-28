import './cardAbout.css';

interface CardAboutProps {
  dish: {
    name: string;
    ingredients: string[];
    weight: number;
    calories: number;
    img: string;
  };
  handleClose: () => void;
}

function CardAbout(props: CardAboutProps) {
  return (
    <div className="pf__popup">
      <div className="pf__popup-box">
        <span onClick={props.handleClose} className="close-icon">
          x
        </span>
        <h2 className="pf__popup-box_heading">{props.dish.name}</h2>
        <div className="pf__popup-box_content">
          <img src={props.dish.img} alt={props.dish.name} />
          <div className="pf__popup-box_content-info">
            <ul>
              {props.dish.ingredients.map((ingredient) => {
                return <li>{ingredient}</li>;
              })}
            </ul>
            <div className="pf__popup-box_content-info_line" />
            <p className="pf__popup-box_content-info_weight">
              {props.dish.weight}g /
            </p>
            <p className="pf__popup-box_content-info_calories">
              {props.dish.calories} cals per portion
            </p>
            <div className="pf__popup-box_content-info_line" />
            <div className="pf__popup-box_content-info_bottom">
              <button className="pf__popup-box_content-info_bottom-button">
                -
              </button>
              <p className="pf__popup-box_content-info_bottom-amount">1</p>
              <button className="pf__popup-box_content-info_bottom-button">
                +
              </button>
              <button className="pf__popup-box_content-info_bottom-add_button">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardAbout;
