// import * as React from 'react';
import React, {Component, PropTypes} from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component{
    
    public render() {
        return <nav className='menu--bar'>
                  <div className='menu--navigation'>
                  
          <div id="nav-burgermenu" >
            <span className="buger-menu-icon"></span>
          </div>
                    <ul data-role="menu"  className="menu list-inline"  >

                        <li className="menu--item">
                            <a className="menu--item__link" href="#artists">Artists</a>
                        </li>
                        <li className="menu--item">
                            <a className="menu--item__link" href="#experiences">Experiences</a>
                        </li>
                        <li className="menu--item">
                            <a className="menu--item__link" href="#festival-info">Festival Info</a>
                        </li>
                        <li className="menu--item">
                            <a className="menu--item__link" href="">Subscribe</a>
                        </li>
                    </ul>
                    <div className="masterbar--button">
                        <a className="button--solid" href="#" target="_blank">Buy Tickets</a>
                    </div>
                   </div>
                </nav>;
    }
}
