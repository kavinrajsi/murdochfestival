import * as React from 'react';

export class Hero extends React.Component<{}, {}> {
    public render() {
        return <div className='hero--banner'>
            <div className='container'>
            <div className='hero--banner__info'>
              Murdoch university presents
            </div>
            <div className='hero--banner__mini-info'>
            <ul className='list-unstyled events-list'>
                <li> / Music </li>
                <li> / Experiences </li>
                <li> &amp; More </li>
            </ul>
            <ul className='list-unstyled event-time-venue'>
                <li>Sept 28 / 3-9:30PM</li>
                <li>14-18 Years Event / Perth Arena </li>
            </ul>
            </div>
            <div className='scroll-down'>
               <a href='#artists' className='button--out__more'>Find out more</a>
            </div>
            </div>
        </div>;
    }
}
