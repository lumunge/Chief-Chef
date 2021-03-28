import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav class="navbar navbar-expand-lg bg-dark text-uppercase fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand text-light js-scroll-trigger" href="#page-top">Food Recipies App</a>
                <button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link text-light py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/home"><Link to="/">Home</Link></a></li>
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link text-light py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a></li>
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link text-light py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Other</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;