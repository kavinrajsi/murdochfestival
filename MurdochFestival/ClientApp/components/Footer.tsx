import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ContactUsForm } from './ContactUsForm';
import { SubscribeForm } from './SubscribeForm';

const transperth = require('../image/footer/transperth.png');
const pertharena = require('../image/footer/perth-arena.png');
const indigo_logos = require('../image/footer/indigo-logos.png');
const ticketek = require('../image/footer/ticketek.png');
const murdoch = require('../image/footer/murdoch.png');
const instagram = require('../image/svg/instagram.svg');

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
                    <a href="https://goto.murdoch.edu.au/Privacy" className="external" target="_blank">/ Privacy Policy</a>
                </div>
                <div className='footer--address'>
                    <address>
                        <span>RAC Arena</span>
                        <span><a href="http://www.pertharena.com.au/Venue_Info/Getting_Here" target="_blank">Get directions</a></span>
                        <span><a href="https://premier.ticketek.com.au/shows/show.aspx?sh=SOUNDONF18" target="_blank">Tickets available through Ticketek</a></span>
                    </address>
                </div>
            </div>            
            <div className='footer--icons'>
                <div className='social'>
                  <a href="https://www.instagram.com/soundonfest/" className="instagram" target="_blank">
                    @SoundOnFest
                    <img alt="Instagram" src={String(instagram)} />
                  </a>
                </div>
                <div className='other'>
                  <a href='https://www.transperth.wa.gov.au/' target="_blank"> <img alt='Transperth' src={String(transperth)} /> </a>
                  <a href='http://www.pertharena.com.au/Events/Sound%20On%20Festival' target="_blank"> <img alt='RAC Arena' src={String(pertharena)}  /> </a>
                  <a href='https://premier.ticketek.com.au/shows/show.aspx?sh=SOUNDONF18' target="_blank"> <img alt='Ticketek' src={String(ticketek)} /> </a>
                  <a href='https://www.theindigoproject.com.au/' target="_blank"> <img alt='Indigo Logo' src={String(indigo_logos)} /> </a>
                  <a href='http://www.murdoch.edu.au/study' target="_blank"> <img alt='Murdoch' src={String(murdoch)} /> </a>
                </div>
            </div>
            </div>

            <ContactUsForm />

            <SubscribeForm />

        </div>;
    }
}
