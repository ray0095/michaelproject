import React from "react";
import { useNavigate } from "react-router-dom";

function MobileNav() {
    let navigate = useNavigate();
    return(
    
            <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar='true'>
                <div className="uk-navbar-left">

                    <ul className="uk-navbar-nav">
                        <li>
                            <a href="" uk-icon="icon: menu">Menu</a>
                            <div className="uk-navbar-dropdown" uk-dropdown="mode: click">
                                <ul className="uk-nav uk-navbar-dropdown-nav">
                                <li onClick={() => {navigate("/")}}><a>Home</a></li>
                                <li onClick={() => {navigate("/services")}}><a>Services</a></li>
                                <li onClick={() => {navigate("/about")}}><a>About</a></li>
                                <li onClick={() => {navigate("/testimonials")}}><a>Testimonials</a></li>
                                <li onClick={() => {navigate("/contact")}}><a>Contact</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>

                </div>
            </nav>
      
    )
}

export default MobileNav;