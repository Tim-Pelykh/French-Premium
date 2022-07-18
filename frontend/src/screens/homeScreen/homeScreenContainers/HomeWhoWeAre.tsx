import { aboutUs } from '../../../images/images';

function HomeWhoWeAre() {
  return (
    <div id="about" className="pf__home-who">
      <div className="pf__home-who_title">
        <h2>Who we are</h2>
      </div>
      <div className="pf__home-who_content">
        <div className="pf__home-who_content-left">
          <img src={aboutUs} alt="Interior" />
          <p>Prime Français interior</p>
        </div>
        <div className="pf__home-who_content-line"></div>
        <div className="pf__home-who_content-right">
          <p>
            Inspired by high French gastronomy, we propose you a{' '}
            <strong>classical</strong>, <strong>sharp</strong> and{' '}
            <strong>delicate</strong> cuisine.
          </p>
          <p>
            Our cuisine offers <strong>noble</strong> and{' '}
            <strong>simple</strong>, familiar dishes which both made
            <strong style={{ fontWeight: '600' }}> Prime Français</strong>{' '}
            succesful and reliable in <strong>thousands</strong> of our clients’
            hearts.
          </p>
        </div>
      </div>
    </div>
  );
}
export default HomeWhoWeAre;
