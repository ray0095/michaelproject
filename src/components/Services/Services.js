import React from 'react';

function Services() {
    return(
        <div className="uk-margin-right uk-margin-left">
            <h1 className="uk-heading-divider uk-margin-top uk-text-center">Our Services</h1>
            <div className="uk-child-width-1-3@m" uk-grid="true" uk-scrollspy="cls: uk-animation-slide-bottom; target: .uk-card; delay: 300; repeat: true">
                <div>
                    <div className="uk-card uk-card-hover uk-card-default uk-card-large uk-card-body">
                        <h3 className="uk-card-title">Fundraising</h3>
                                <ul>
                                    <li>Creating your finance plan</li>
                                    <li>Setting realistic goals</li>
                                    <li>Managing your call time program</li>
                                    <li>Planning your events</li>
                                    <li>Email fundraising</li>
                                    <li>P2P text fundraising</li>
                                </ul>
                    </div>
                </div>
        
                <div>
                    <div className="uk-card uk-card-hover uk-card-default uk-card-large uk-card-body" uk-scrollspy-classname="uk-animation-slide-top">
                    <h3 className="uk-card-title">General Consulting</h3>
                            <ul>
                                <li>Crafting the perfect budget for you</li>
                                <li>Designing your campaign structure</li>
                                <li>Hiring and supporting on-the-ground staff</li>
                                <li>Filling out your consultant team</li>
                                <li>Ensuring all the pieces work together and troubleshooting when they don’t</li>
                            </ul>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-hover uk-card-default uk-card-large uk-card-body">
                        <h3 className="uk-card-title">Mail, Digital, and Television Advertising</h3>
                            <ul>
                                <li>We’ll work with you to build a comprehensive paid media plan to communicate with the voters you need to reach to win, no matter the budget.</li>
                                <li>We’ll work with you from design to placement to create visually creative advertisements to reach your voters.</li>
                                <li>Fundraising, persuasion, and GOTV mail</li>
                                <li>Direct to donate, persuasion, and GOTV digital through Facebook, pre-roll and CTV, and banner ads</li>
                                <li>Writing a persuasive TV script, organizing and directing the video shoot, and working with television buyers to place ads in any market.</li>
                            </ul>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Services;