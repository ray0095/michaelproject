import React from 'react';

function About() {
    return (
        <div className="uk-width-expand">

            <h1 className="uk-heading-divider uk-margin-top uk-text-center">About Me</h1>

            
            <div className="uk-card uk-card-default uk-width-1-1@m uk-animation-slide-bottom-medium" >
                <div className="uk-card-header">
                    <div className="uk-grid-small uk-flex-middle" uk-grid="true">
                        <div className="uk-width-auto">
                            <img alt="headshot" className="uk-border-circle" width="250" src="headshot.png"/>
                        </div>
                        <div className="uk-width-expand">
                            <h3 className="uk-card-title uk-margin-remove-bottom">Michael Ousley</h3>
                            <p className="uk-text-meta uk-margin-remove-top">Founder, CEO</p>
                        </div>
                    </div>
                </div>
                <div className="uk-card-body">
                    <p>
                        Michael has been a campaign staffer and consultant working in fundraising, campaign management, mail, and digital advertising for local and federal Democratic candidates across the country.</p>
                    <p>
                        Most recently, Michael was a Director at Tucker Green Consulting, where he managed multi-million dollar fundraising operations for federal, state, and municipal candidates for office in the New York City area. Michael also worked on mail and digital production the sister firm, Conscious Voter Contact.</p>
                    <p>
                        Prior to Tucker Green Consulting, Michael managed Laura Gillen’s campaign for Hempstead Town Supervisor in the suburbs of Long Island. Michael created a $2 million budget and worked with a variety of media consultants to execute the campaign’s mail, television, digital, polling, and field strategies.
                    </p>
                    <p>
                        Originally from Missouri, Michael started his political career as an intern for Senator Claire McCaskill’s United States Senate campaign in 2012. Michael then went on to serve as the Missouri Democratic Party’s Data Director and VAN Administrator before leaving the position to take a more hands-on role managing political campaigns, first as the campaign manager for Susan McClintic’s candidacy for State Representative, where he crafted and executed a $300,000 budget.
                    </p>
                    <p>
                        Following Susan McClintic’s campaign, Michael returned to the Missouri Democratic Party as the Party’s Finance Director, where he led a statewide fundraising effort to raise $3 million to cover the Party’s operating expenses.
                    </p>
                    <p>
                    In 2018, Michael took a leave of absence from the Missouri Democratic Party to manage Lauren Arthur’s successful special election campaign for State Senate, <a href="https://www.vox.com/2018/6/5/17432312/missouri-special-election-results-lauren-arthur">delivering a win</a> that earned national attention. Michael oversaw a robust field operation and paid media campaign that flipped a district Trump won by 5 points into a 20 point victory.
                    </p>
                    <p>
                        Michael now lives in Brooklyn, New York with his golden retriever, Ghost and his smoking hot girlfriend.
                    </p>
                </div>
            </div>

            
        </div>
    )
}

export default About;