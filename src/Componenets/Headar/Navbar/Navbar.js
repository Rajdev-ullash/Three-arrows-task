import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand ms-md-5" href="/">ueno.</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto me-md-5">
              <Link className="nav-link  active" aria-current="page" to="/">SERVICE</Link>
              <Link className="nav-link" to="/">CLIENT</Link>
              <Link className="nav-link" to="/">CAREERS</Link>
              <Link className="nav-link" to="/">ABOUT</Link>
              <Link className="nav-link" to="/">CONTACT</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;