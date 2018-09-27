import * as React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';

export class Festival extends React.Component<{}, {}> {
    public render() {
        return <div className='container'>
            <div className='row'>
                <h2 className='left l-section-title'>Info</h2>
                <PanelGroup accordion id="accordion-example">
                    <Panel eventKey="0">
                        <Panel.Heading>
                            <Panel.Title toggle>About Sound On Festival</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>
                        <p>Sound On Festival is Perth's only underage music festival exclusively for 14-18 year olds.</p>
                        <p>Some of Australia's hottest electronic, hip hop and DJ talents are combining forces with The Indigo Project to create a must-attend festival just for high school students. Enjoy killer beats, awesome experiences, and life advice from the artists themselves. In this once-in-a-lifetime opportunity, get to know how Alison Wonderland, Cosmo's Midnight, Tkay Maidza, Sam Perry, and FlexMami turned their passions into career goals, and their advice on study, success, and everything in between.</p>
                        <p>Avoid some serious FOMO and <a href="https://premier.ticketek.com.au/shows/show.aspx?sh=SOUNDONF18" target="_blank">get your tickets</a> ASAP.</p>
                        </Panel.Body>
                    </Panel>
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
                        <p>Please check the timetable and plan your journey, as some timetabled services may not operate after evening events. Cat services are also available and include stops close to RAC Arena.</p>
                        <p className="underline"> <span>Driving </span> </p>
                        <p>Parking is available on-site. For directions on the best way to get to RAC Arena and where to park, check out the <a href="http://www.racarena.com.au/Venue_Info/Getting_Here" target="_blank">Directions</a> page on their website.</p>
                        </Panel.Body>
                    </Panel>
                    <Panel eventKey="2">
                        <Panel.Heading>
                            <Panel.Title toggle>Who can go</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>
                          <p>Sound On is an exclusive drug and alcohol free festival for 14 - 18 year old high school and TAFE students only.</p>
                          <p>Parents and guardians are welcome to relax in the dedicated parent zone at the Arena (free of charge, no ticket required), or explore the city sites in the vicinity.</p>
                          <p>If you are 19 years or over you cannot attend the event. Parents wishing to come along with their kids or siblings 19 or over wishing to accompany a relative or friend will not be allowed into the event. To ensure all patrons are high school students – photo ID may be required. For ID to be valid, it must contain your D.O.B, a photo and your full name.</p>
                          <p>THE FOLLOWING FORMS OF ID WILL BE ACCEPTED:<br /><br />
                          ISIC Youth ID Card - <a href="https://au-online.aliveplatform.com/?partnerID=605">CLICK HERE TO BUY</a> for only $30<br />
                          High School Student Card<br />
                          Learners Permit<br />
                          Drivers Licence<br />
                          Passport<br />
                          Colour photocopy of a Passport that has been signed and stamped by a Justice of the Peace or Pharmacists, Nurse or Police officer<br />
                          Plastic or Laminated School ID<br />
                          Boat License (only if it has Name, D.O.B & Photo)<br />
                          Motorbike Licence (only if it has Name, D.O.B & Photo)<br />
                          Proof of Age card<br />
                          Copy of Birth Certificate & Current photo, both signed by a Justice of the Peace or Pharmacists, Nurse or Police officer</p>
                        </Panel.Body>
                    </Panel>
                    <Panel eventKey="3">
                        <Panel.Heading>
                            <Panel.Title toggle>Information for parents </Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>
                          <p>For parents and guardians who would like to stay at the venue, there will be a dedicated parents' lounge for you to relax while you wait.</p>
                          <p>Located at the Best Brew inside the Four Points Hotel (directly opposite the Arena) the relaxed bar is a comfortable drop off/pick up point, and our staff and ambassadors will be on hand to answer any questions you have and provide advice. Light refreshments will be available.</p>
                          <p>Alternatively, why not check out what's happening near the Arena? <a href="https://www.visitperthcity.com/?_ga=2.227714141.1505459702.1532507409-539089213.1532507409" target="_blank">The City of Perth website</a> has all the info on where to go and what to do.</p>
                        </Panel.Body>
                    </Panel>
                    <Panel eventKey="4">
                        <Panel.Heading>
                            <Panel.Title toggle>Onsite facilities</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible><p>RAC Arena has all the things you need to get the most out of the day. You'll have access to:</p>
                          <ul>
                            <li>Free water</li>
                            <li>Food options</li>
                            <li>ATMs</li>
                            <li>Free wifi</li>
                            <li>Cloakroom</li>
                            <li>Venue parking</li>
                            <li>Box Office ticketing</li>
                          </ul>
                        <p>Check out the venue facilities on the <a href="http://www.racarena.com.au" target="_blank">RAC Arena website</a>.</p></Panel.Body>
                    </Panel>
                    <Panel eventKey="5">
                        <Panel.Heading>
                            <Panel.Title toggle>Things you can bring</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>
                        <p>Whether you're a must-bring-everything type of person or prefer to travel light, make sure your belongings abide by the <a href="http://www.racarena.com.au/Venue_Info/Prohibited_Items" target="_blank">conditions of entry</a> at RAC Arena, and bags are no bigger than A4 size.</p>
                        <p>Sound On is a drug and alcohol free event.</p>
                        <p>To make sure you don’t miss out on any of the great acts, make sure you don’t bring any items prohibited by RAC Arena to the event:</p>
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
                          <li>Bags larger than A4 or similar size (including handbags). For specific event bag restrictions see the relevant <a href="http://www.racarena.com.au/Events" target="_blank">event page</a>.</li>
                          <li>Animals (apart from registered assistance dogs)</li>
                          <li>External food, chewing gum, eskies, boxes</li>
                          <li>Audio and/or visual recording, broadcasting or transmission equipment</li>
                          <li>Bicycles / rollerblades / skateboards or scooters</li>
                          <li>Prams / pushers / strollers or baby carriers</li>
                          <li>Any other item that in the opinion of RAC Arena Management could cause harm or public nuisance</li>
                          <li>Any other item that is prohibited by the touring company or artist</li>
                        </ul>
                        <p>Be sure to check RAC Arena’s website for the full list.</p>
                        </Panel.Body>
                    </Panel>
                    <Panel eventKey="6">
                        <Panel.Heading>
                            <Panel.Title toggle>Ticket info</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>
                          <p>Grab your tickets from <a href="https://premier.ticketek.com.au/shows/show.aspx?sh=SOUNDONF18" target="_blank">Ticketek</a> or purchase them on the day at RAC Arena (if not sold out prior!).</p>
                          <p>Tickets are just $39.95*, so make sure you get in early.</p>
                          <p className="underline"><span>Ticket Pick Up</span></p>
                          <p>RAC Arena recommend picking up your tickets before you head to the venue. <a href="http://premier.ticketek.com.au/Content/Outlets/agencies_wa.aspx" target="_blank">Click here</a> to find a Ticketek Pre-paid Collection Outlet closest to you. If you are not the account holder and need to pick up tickets at the venue box office please ensure that you have authority from the account holder to collect tickets on their behalf.  A copy of the account holders photo ID with a signed statutory declaration stating that you (full name) are collecting tickets on behalf of the account holder. Please bring along your photo ID for verification.</p>
                        </Panel.Body>
                    </Panel>
                    <Panel eventKey="7">
                        <Panel.Heading>
                            <Panel.Title toggle>Festival times</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>
                          <p className="underline"><span>Main Stage</span></p>
                          <strong>3.00pm:</strong> Opening Ceremony with Indigo Project <br />
                          <strong>3.30pm:</strong> FlexMami <br />
                          <strong>4.30pm:</strong> Arno Faraji <br />
                          <strong>5.10pm:</strong> Sam Perry <br />
                          <strong>6.00pm:</strong> Tkay Maizda <br />
                          <strong>7.10pm:</strong> Cosmos Midnight <br />
                          <strong>8.30pm:</strong> Alison Wonderland <br /><br />
                          And DJ Shann across the day
                          <br /><br />
                          <p className="underline"><span>Granite Room</span></p>
                          <strong>4.15pm:</strong> Create the Life You Want Panel  <br />
                          <strong>5.30pm:</strong> Future Beats #1 <br />
                          <strong>6.30pm:</strong> Future Beats #2 <br />
                          <strong>7.30pm:</strong> FlexMami <br />
                          <strong>8.00pm:</strong> DJ Matt Beattie <br />

                        </Panel.Body>
                    </Panel>
                    <Panel eventKey="8">
                        <Panel.Heading>
                            <Panel.Title toggle>Food and drink </Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible><p>You won't go hungry, or thirsty, with the delicious and affordable options at the RAC Arena's food outlets.</p></Panel.Body>
                    </Panel>
                  <Panel eventKey="9">
                    <Panel.Heading>
                      <Panel.Title toggle>Info for volunteers</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible><p>Registrations have now closed and volunteers will be contacted directly. If you have any queries please use the <a href="#" data-toggle="modal" data-target="#contactus-address">Contact Us form</a>.</p></Panel.Body>
                  </Panel>
                </PanelGroup>
            </div>
        </div>;
    }
}
