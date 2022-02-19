import React from "react";
import './Nav.css';

function Nav() {
    return(
        <nav class="uk-navbar-container" uk-navbar>
            <div class="uk-navbar-left">

                <ul class="uk-navbar-nav">
                    <li class="uk-active"><a href="#">Logo</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                </ul>

            </div>
        </nav>
    )
}

export default Nav;