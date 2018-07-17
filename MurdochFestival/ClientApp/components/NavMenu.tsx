import * as React from 'react';
import * as ReactDOM from 'react-dom';

// import React, {Component, PropTypes} from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, { isToggleOn: true }> {
    constructor(props:any) {
        super(props);
        this.state = {isToggleOn: true};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }
    public render() {
        return <nav className='menu--bar'>
                  <div className='menu--navigation'>
                  
          <div id="nav-burgermenu" onClick={this.handleClick} className=	{this.state.isToggleOn ? ' ': 'active'}>
          <span className=	{this.state.isToggleOn ? 'buger-menu-icon': 'buger-menu-icon active'}></span>
          </div>
                    <ul data-role="menu"  className= {this.state.isToggleOn ? 'menu list-inline': 'menu list-inline menu-drawer-open'} >
                        <li className="menu--item visible-xs">
                            <a className="menu--item__link menu-buytickets" href="#" target="_blank">Buy Tickets</a>
                        </li>
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
