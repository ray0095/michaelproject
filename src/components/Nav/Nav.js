import React from "react";
import './Nav.css';
import { useNavigate } from "react-router-dom";

function Nav() {
    let navigate = useNavigate();
    return(
        <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="true">
            <div className="uk-navbar-left uk-padding-small">
                <ul className="uk-navbar-nav">
                    <li className="uk-active uk-navbar-item uk-logo" onClick={() => {navigate("/")}}><img src="logo.png" alt="logo" width="300px"/></li>
                </ul>
            </div>

            <div className="uk-navbar-right uk-padding-small">
                <ul className="uk-navbar-nav">
                    <li onClick={() => {navigate("/")}}><a>Home</a></li>
                    <li onClick={() => {navigate("/services")}}><a>Services</a></li>
                    <li onClick={() => {navigate("/about")}}><a>About</a></li>
                    <li onClick={() => {navigate("/testimonials")}}><a>Testimonials</a></li>
                    <li onClick={() => {navigate("/contact")}}><a>Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;