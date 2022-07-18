import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cta } from '../../../images/images';

function HomeCTA() {
  let plat = 'plat';
  const [translation, hoverTranslation] = useState(plat);

  return (
    <div className="pf__home-cta">
      <div className="pf__home-cta_left">
        <img src={cta} alt="Customer enjoys dish" />
        <p>Enjoy our dishes everywhere - just order delivery</p>
      </div>
      <div className="pf__home-cta_line" />
      <div className="pf__home-cta_right">
        <h2>
          Don’t hesitate.
          <br />
          Our{' '}
          <button
            className="pf__home-cta_right-translate"
            onMouseOver={() => hoverTranslation('dish')}
            onMouseLeave={() => hoverTranslation(plat)}
          >
            {translation}
          </button>{' '}
          is waiting for you.
        </h2>
        <Link to="/signup">
          <button className="pf__home-cta_right-button">
            Get Started with Prime Français
          </button>
        </Link>
      </div>
    </div>
  );
}
export default HomeCTA;
