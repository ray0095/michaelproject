import React from "react";

function Card() {
    return(
        <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
            {this.props.children}
        </div>
    )
}

export default Card;