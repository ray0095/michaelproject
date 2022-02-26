import React from 'react';
import './Home.css';

function Home() {
    
    return(    
        <div className="uk-height-1-1">
            <div className="uk-child-width-1-2 uk-child-width-1-4@s uk-grid-match" uk-grid="true">
                    <div className="uk-position-center uk-card uk-card-default uk-card-body uk-animation-fade">
                        <h1 className="uk-text-center">From the Midwest to the Coast</h1>
                        <h4 className="uk-text-center uk-text-italic">Professional political campaign expertise for every situation</h4>
                    </div>
            </div>
        </div>
        

    )
}

export default Home;