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
                        <p>Getting to Sound On couldn't be easier! Free public transport is included in your ticket.</p>
                        <p>If your ticket includes the Transperth logo, just present it to Transperth staff and you won't need to pay a fare. Your event ticket is valid on Transperth for three hours before doors open and up to three hours after the event concludes.</p>
                        <p>Keep in mind you must have your event ticket on you to travel for no extra cost. If you are planning on collecting your ticket at the venue, you will need to pay a normal fare to get there.</p>
                        <p className="underline"> <span>Trains </span> </p>
                        <p>All train lines take you into Perth or Perth Underground stations, located only a short walk down Wellington Street to the Arena.</p>
                        <p className="underline"> <span>Buses </span> </p>
                        <p>Please check the timetable and plan your journey, as some timetabled services may not operate after evening events. Cat services are also available and include stops close to Perth Arena.</p>
                        <p className="underline"> <span>Driving </span> </p>
                        <p>Parking is available on-site. For directions on the best way to get to Perth Arena and where to park, check out the <a href="http://www.pertharena.com.au/Venue_Info/Getting_Here" target="_blank">Directions</a> page on their website.</p>
                        </Panel.Body>
                    </Panel>
                    <Panel eventKey="2">
                        <Panel.Heading>
                            <Panel.Title toggle>Who can go</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>
                        <p>Sound On is an exclusive drug and alcohol free festival for 14-18 year olds only.</p>
                        <p>Parents and guardians are welcome to relax in the dedicated parent zone at the Arena, or explore the city sites in the vicinity. </p>
                        </Panel.Body>
                    </Panel>
                    <Panel eventKey="3">
                        <Panel.Heading>
                            <Panel.Title toggle>Information for parents </Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible><p>For parents and guardians who would like to stay at the venue, there will be a dedicated space for you to relax while you wait.</p><p>Alternatively, why not check out what’s happening near the Arena? <a  href="https://www.visitperthcity.com/?_ga=2.227714141.1505459702.1532507409-539089213.1532507409 " target="_blank">The City of Perth website</a> has all the info on where to go and what to do. </p></Panel.Body>
                    </Panel>
                    <Panel eventKey="4">
                        <Panel.Heading>
                            <Panel.Title toggle>Onsite facilities</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible><p>Perth Arena has all the things you need to get the most out of the day. You'll have access to:</p>
                          <ul>
                            <li>Free water</li>
                            <li>Food options</li>
                            <li>ATMs</li>
                            <li>Free wifi</li>
                            <li>Cloakroom</li>
                            <li>Venue parking</li>
                            <li>Box Office ticketing</li>
                          </ul>
                        <p>Check out the venue facilities on the <a href="#">Perth Arena website</a>.</p></Panel.Body>
                    </Panel>
                    <Panel eventKey="5">
                        <Panel.Heading>
                            <Panel.Title toggle>Things you can bring</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>
                        <p>Whether you're a must-bring-everything type of person or prefer to travel light, make sure your belongings abide by the <a href="http://www.pertharena.com.au/Venue_Info/Prohibited_Items" target="_blank">conditions of entry</a> at Perth Arena, and bags are no bigger than A4 size.</p>
                        <p>Sound On is a drug and alcohol free event.</p>
                        <p>To make sure you don’t miss out on any of the great acts, make sure you don’t bring any items prohibited by Perth Arena to the event:</p>
                        <ul>
                          <li>Alcohol</li>
                          <li>Cans, bottles, containers and open drink containers</li>
                          <li>Musical instruments such as whistles/horns/drums and vuvuzela type of noise making devices</li>
                          <li>Weapons / aerosols / knives / fireworks / flares / laser lights / laser pointers / glowsticks / pens or felt tip markers</li>
                          <li>Controlled, dangerous or illegal substances</li>
                          <li>Tennis balls / golfballs / footballs / basketballs or the like</li>
                          <li>Long chains / large spiked wrist or neck bands / spiked or studded belts</li>
                          <li>Large flags or unauthorised signage or promotional products, signs may not be larger than 1m x 1m in size or with handles or sticks.</li>
                          <li>Selfie Sticks</li>
                          <li>E-cigarettes</li>
                          <li>Large umbrellas (such as golf umbrellas)</li>
                          <li>Chairs / stools</li>
                          <li>Bags larger than A4 or similar size (including handbags). For specific event bag restrictions see the relevant <a href="http://www.pertharena.com.au/Events" target="_blank">event page</a>.</li>
                          <li>Animals (apart from registered assistance dogs)</li>
                          <li>External food, chewing gum, eskies, boxes</li>
                          <li>Audio and/or visual recording, broadcasting or transmission equipment</li>
                          <li>Bicycles / rollerblades / skateboards or scooters</li>
                          <li>Prams / pushers / strollers or baby carriers</li>
                          <li>Any other item that in the opinion of Perth Arena Management could cause harm or public nuisance</li>
                          <li>Any other item that is prohibited by the touring company or artist</li>
                        </ul>
                        <p>Be sure to check Perth Arena’s website for the full list.</p>
                        </Panel.Body>
                    </Panel>
                    <Panel eventKey="6">
                        <Panel.Heading>
                            <Panel.Title toggle>Ticket info</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible><p>Grab your tickets from <a href="#" target="_blank">Ticketek</a> or purchase them on the day at Perth Arena (if not sold out prior!).</p><p>Tickets are just $40 + booking fee, so make sure you get in early.</p></Panel.Body>
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
