import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-dark text-uppercase fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand text-light js-scroll-trigger" href="#page-top">Food Recipies App</a>
                <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                    <Link to="/"><li className="nav-item">Home</li></Link>
                    <Link to="/about"><li className="nav-item">About</li></Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;