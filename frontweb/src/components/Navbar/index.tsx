import './styles.css';
import 'bootstrap/js/src/collapse.js';
import MenuIcon from 'assets/img/menu-icon.svg';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      id="main-nav-container"
      className="navbar navbar-expand-md navbar-dark bg-primary main-nav"
    >
      <div id="main-nav-container-fluid" className="container-fluid">
        <Link to="/" className="nav-logo-text" >
          <h4>Carros Top</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dscarrostop-navbar"
          aria-controls="dscarrostop-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="menu-icon-container">
            <img src={MenuIcon} alt="Menu"/>
          </span>
        </button>

        <div id="dscarrostop-navbar" className="collapse navbar-collapse">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <NavLink to="/" activeClassName="active" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/catalog" >
                Catálogo
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
