import React from "react";
import './Nav.css';

function Nav() {
    return(
        <nav className="uk-navbar-container">
            <div className="uk-navbar-left">

                <ul className="uk-navbar-nav">
                    <li className="uk-active"><a href="/">Logo</a></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/reviews">Reviews</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>

            </div>
        </nav>
    )
}

export default Nav;