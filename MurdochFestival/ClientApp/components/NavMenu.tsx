import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, { isTop: true }> {
    constructor(props:any) {
        super(props);
        this.state = {
            isTop: true
        };


        this.onScroll = this.onScroll.bind(this);

      }
      componentDidMount() {
        document.addEventListener('scroll', () => {
          const isTop = window.scrollY < 100;
          if (isTop !== this.state.isTop) {
            this.onScroll(isTop);
          }
        });
      }

      onScroll(isTop:any) {
        this.setState({ isTop });
      }

    public render() {
        return <nav className='menu--bar'>
                    <div className='menu--navigation'>

                        <div id="nav-burgermenu">
                            <span className='buger-menu-icon'></span>
                        </div>
                        <ul data-role="menu" className='menu list-inline' >
                            <li className="menu--item visible-xs">
                                <a className="menu--item__link menu-buytickets" href="#" data-toggle="modal" data-target="#tickets" >Buy Tickets</a>
                            </li>
                            <li className="menu--item">
                                <a className="menu--item__link" href="#artists">Artists</a>
                            </li>
                            <li className="menu--item">
                                <a className="menu--item__link" href="#experiences">Experiences</a>
                            </li>
                            <li className="menu--item">
                                <a className="menu--item__link" href="#info">Info</a>
                            </li>
                            <li className="menu--item">
                                <a className="menu--item__link" href="#" data-toggle="modal" data-target="#stay-date">Subscribe</a>
                            </li>
                        </ul>
                        <div className="masterbar--button">
                            <a className="button--solid" href="http://premier.ticketek.com.au/shows/show.aspx?sh=SOUNDONF18" target="_blank">Buy Tickets</a>
                        </div>
                    </div>
                </nav>;
    }
}
