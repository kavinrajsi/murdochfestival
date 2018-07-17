import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

const transperth = require('../image/footer/transperth.png');
const hit92 = require('../image/footer/hit-92-9.png');
const pertharena = require('../image/footer/perth-arena.png');
const murdoch = require('../image/footer/murdoch.png');

export class Footer extends React.Component<{}, {}> {
    public render() {
        return <div className='container'>
            <div className='footer--information'>
            <div className='footer--nav'>
                <div className='copyrights--nav'>
                    <a href="#">/ Contact</a>
                    <a href="#">/ Terms of Entry</a>
                    <a href="#">/ Privacy Policy</a>
                </div>
                <div className='footer--address'>
                    <address>
                        <span>Perth Arena</span>
                        <span>700 Wellington St, Perth WA 6000</span>
                        <span>(08) 6365 0700</span>
                    </address>
                </div>
            </div>
            <div className='footer--icons'>
                <a href='#'> <img alt='transperth' src={String(transperth)} /> </a>
                <a href='#'> <img alt='hit-92.9' src={String(hit92)} /> </a>
                <a href='#'> <img alt='perth-arena' src={String(pertharena)}  /> </a>
                <a href='#'> <img alt='murdoch' src={String(murdoch)} /> </a>
            </div>
            </div>
        </div>;
    }
}
