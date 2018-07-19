import * as React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';

export class Festival extends React.Component<{}, {}> {
    public render() {
        return <div className='container'>
            <div className='row'>
                <h2 className='left l-section-title'>Festival Info</h2>
                <PanelGroup accordion id="accordion-example">
                    <Panel eventKey="1">
                        <Panel.Heading>
                            <Panel.Title toggle>How to get there</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>
                        <p>Getting to the festival couldn't be easier! </p>
                        <p>Free public transport is included in your ticket so there's not need to worry about any extra travel costs.</p>
                        <p>If you're driving, there is parking available on-site. For directions on the best way to get to Perth Arena and where to park, check out the <a href='http://www.pertharena.com.au/Venue_Info/Getting_Here' target='_blank'>Directions</a> page on their website.</p>
                        </Panel.Body>
                    </Panel>
                    <Panel eventKey="2">
                        <Panel.Heading>
                            <Panel.Title toggle>Who can go?</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>
                        <p>Sound On Festival is an event for 14-18 year olds only.</p>
                        <p>If you are a parent and would like to hang around, there is a dedicated zone just for you to enjoy.</p>
                        </Panel.Body>
                    </Panel>
                    <Panel eventKey="3">
                        <Panel.Heading>
                            <Panel.Title toggle>I'm a parent, can I wait at the venue? </Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible><p>Yes – there will be a dedicated parent space.</p></Panel.Body>
                    </Panel>
                    <Panel eventKey="4">
                        <Panel.Heading>
                            <Panel.Title toggle>Onsite facilities</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible><p>We've got you covered – toilet facilities, cloakroom, ATMs, and free wifi are all available at Perth Arena. There's venue parking and Box Office ticketing also available.</p></Panel.Body>
                    </Panel>
                    <Panel eventKey="5">
                        <Panel.Heading>
                            <Panel.Title toggle>What can I bring?</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible><p>Check out the <a href='http://www.pertharena.com.au/Venue_Info/Prohibited_Items' target='_blank'>Perth Arena</a> page for a comprehensive list of items that are prohibited from being brought into the Arena.</p></Panel.Body>
                    </Panel>
                    <Panel eventKey="6">
                        <Panel.Heading>
                            <Panel.Title toggle>Ticket info</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible><p>Tickets are available to purchase <a href='#' target='_blank'>online here </a>, or at Perth Arena on the day (unless sold out prior!). </p></Panel.Body>
                    </Panel>
                    <Panel eventKey="7">
                        <Panel.Heading>
                            <Panel.Title toggle>Festival times</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible><p>Watch this space!</p></Panel.Body>
                    </Panel>
                    <Panel eventKey="8">
                        <Panel.Heading>
                            <Panel.Title toggle>Food and drink </Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible><p>You won't go hungry with the range of delicious and affordable food options available for you to choose from. More info coming soon…</p></Panel.Body>
                    </Panel>
                </PanelGroup>
            </div>
        </div>;
    }
}
