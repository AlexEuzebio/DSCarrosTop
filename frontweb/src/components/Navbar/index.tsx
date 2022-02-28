import './styles.css';
import 'bootstrap/js/src/collapse.js';

const Navbar = () => {
  return (
    <nav
      id="main-nav-container"
      className="navbar navbar-expand-md navbar-dark bg-primary main-nav"
    >
      <div id="main-nav-container-fluid" className="container-fluid">
        <h4 className="nav-logo-text">Carros Top</h4>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dscarrostop-navbar"
          aria-controls="dscarrostop-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="dscarrostop-navbar" className="collapse navbar-collapse">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Catálogo</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
