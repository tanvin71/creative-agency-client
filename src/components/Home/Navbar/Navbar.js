import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';

const Navbar = () => {
    return (
      <section>
          <nav className="navbar navbar-expand-lg navbar-light">
    <a className="navbar-brand" href="#"><img src={logo} className="img-fluid w-50"  alt=""/></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link mr-3" href="">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link mr-3" href="#">Our Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mr-3" href="#">Our Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mr-3" href="#">Contact Us</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link mr-3 text-white btn btn-dark" to="/login" >Login</Link>
        </li>
        
      </ul>
    </div>
  </nav>
</section>
    );
};

export default Navbar;