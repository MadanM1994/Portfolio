import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark custom-navbar">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="./" className="nav-link" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="./projects" className="nav-link" href="#">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link to="./about" className="nav-link" href="#">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <img
            className="bg-remove"
            src={process.env.PUBLIC_URL + "./images/logo.png"}
            height="60"
            alt="Logo"
            loading="lazy"
          />
          <Link to="./" className="navbar-brand" href="#">
            Madan Mohan
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
