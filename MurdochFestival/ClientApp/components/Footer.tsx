import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ContactUsForm } from './ContactUsForm';
import { SubscribeForm } from './SubscribeForm';

const transperth = require('../image/footer/transperth.png');
const pertharena = require('../image/footer/perth-arena.png');
const indigo_logos = require('../image/footer/indigo-logos.png');
const ticketek = require('../image/footer/ticketek.png');
const murdoch = require('../image/footer/murdoch.png');

export class Footer extends React.Component<{}, {}> {
    constructor(props:any) {
        super(props);
      }

    public render() {
        return <div className='container'>
            <div className='footer--information'>
            <div className='footer--nav'>
                <div className='copyrights--nav'>
                    <a href="#" data-toggle="modal" data-target="#contactus-address">/ Contact Us</a>
                    {/*<a href="#">/ Terms of Entry</a>*/}
                    <a href="https://goto.murdoch.edu.au/Privacy" target="_blank">/ Privacy Policy</a>
                </div>
                <div className='footer--address'>
                    <address>
                        <span>Perth Arena</span>
                        <span><a href="http://www.pertharena.com.au/Venue_Info/Getting_Here" target="_blank">Get directions</a></span>
                        <span><a href="http://premier.ticketek.com.au/shows/show.aspx?sh=SOUNDONF18" target="_blank">Tickets available through Ticketek</a></span>
                    </address>
                </div>
            </div>
            <div className='footer--icons'>
                <a href='https://www.transperth.wa.gov.au/' target="_blank"> <img alt='Transperth' src={String(transperth)} /> </a>
                <a href='http://www.pertharena.com.au/Events' target="_blank"> <img alt='Perth Arena' src={String(pertharena)}  /> </a>
                <a href='http://premier.ticketek.com.au/shows/show.aspx?sh=SOUNDONF18' target="_blank"> <img alt='Ticketek' src={String(ticketek)} /> </a>
                <a href='https://www.theindigoproject.com.au/' target="_blank"> <img alt='Indigo Logo' src={String(indigo_logos)} /> </a>
                <a href='http://www.murdoch.edu.au/study' target="_blank"> <img alt='Murdoch' src={String(murdoch)} /> </a>
            </div>
            </div>

            <ContactUsForm />

            <SubscribeForm />

        </div>;
    }
}
