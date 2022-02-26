import React from "react";

function Reviews() {
    return(
        <div className="uk-margin-right uk-margin-left">
            <div className="uk-child-width-1-3@m" uk-grid="true" uk-scrollspy="cls: uk-animation-slide-bottom; target: .uk-card; delay: 300; repeat: true">
                <div>
                    <div className="uk-card uk-card-hover uk-card-default uk-card-body">
                        <h3 className="uk-card-title">Testimonial 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-hover uk-card-default uk-card-body" uk-scrollspy-classname="uk-animation-slide-top">
                        <h3 className="uk-card-title">Testimonial 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-hover uk-card-default uk-card-body">
                        <h3 className="uk-card-title">Testimonial 3</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-hover uk-card-default uk-card-body">
                        <h3 className="uk-card-title">Testimonial 4</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-hover uk-card-default uk-card-body">
                        <h3 className="uk-card-title">Testimonial 5</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-hover uk-card-default uk-card-body">
                        <h3 className="uk-card-title">Testimonial 6</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}

export default Reviews;