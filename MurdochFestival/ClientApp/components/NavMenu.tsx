import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <nav className='menu--bar'>
                  <div className='container'>
                  <div className='menu--navigation'>
                    <ul className="menu list-inline" data-role="menu">
                        <li className="menu--item">
                            <a className="menu--item__link" href="#">Artists</a>
                        </li>
                        <li className="menu--item">
                            <a className="menu--item__link" href="#">Experiences</a>
                        </li>
                        <li className="menu--item">
                            <a className="menu--item__link" href="#">Festival Info</a>
                        </li>
                        <li className="menu--item">
                            <a className="menu--item__link" href="#">Subscribe</a>
                        </li>
                    </ul>
                    <div className="masterbar--button">
                        <a className="button--solid" href="#" target="_blank">Buy Tickets</a>
                    </div>
                   </div>
                   </div>
                </nav>;
    }
}
