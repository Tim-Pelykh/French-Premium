import { Link } from 'react-router-dom';
import './Navbar.css';
import { logo } from '../../images/images';

function Navbar() {
  return (
    <div className="pf__navbar">
      <div className="pf__navbar-left">
        <Link to="/">Home</Link>
        <Link to="/my-cart">My Cart</Link>
        <Link to="/menu">Menu</Link>
      </div>
      <div className="pf__navbar-logo">
        <Link to="/">
          <img src={logo} alt="French Premium" />
        </Link>
      </div>
      <div className="pf__navbar-right">
        <Link to="/">EN</Link>
        <Link to="/login">
          <button>Log In</button>
        </Link>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
