import * as React from 'react';

const pricing = require('../image/pricing-graphic.png');

export class Hero extends React.Component<{}, {}> {
    public render() {
        return <div className='hero--banner'>
            <div className='container'>
            <div className='hero--banner__info'>
              Murdoch university presents
            </div>
            <div className='hero--banner__mini-info'>
            <img className='pricing-graphic' alt='One sale now - $39.95 - Online from Ticketek' src={String(pricing)} />
            <ul className='list-unstyled events-list'>
                <li> / Music </li>
                <li> / Experiences </li>
                <li> &amp; More </li>
            </ul>
            <ul className='list-unstyled event-time-venue'>
                <li className='event--date'>Sept 28</li>
                <li>An event for 14 - 18 year old<br /> high school students</li>
                <li>Drug &amp; alcohol free</li>
            </ul>
            </div>
            <div className='scroll-down'>
               <a href='#artists' className='button--out__more'>Find out more</a>
            </div>
            </div>
        </div>;
    }
}
