import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, { isToggleOn: true, isTop: true }> {
    constructor(props:any) {
        super(props);
        this.state = {isToggleOn: true,
            isTop: true
        };
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
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
      handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }
    public render() {
        return <nav className='menu--bar'>
                          <div className={this.state.isTop ? 'menu--navigation scrolling-down' : 'menu--navigation scrolling-up'}>
                  
          <div id="nav-burgermenu" onClick={this.handleClick} className=	{this.state.isToggleOn ? ' ': 'active'}>
          <span className=	{this.state.isToggleOn ? 'buger-menu-icon': 'buger-menu-icon active'}></span>
          </div>
                    <ul data-role="menu"  className= {this.state.isToggleOn ? 'menu list-inline': 'menu list-inline menu-drawer-open'} >
                        <li className="menu--item visible-xs">
                            <a className="menu--item__link menu-buytickets"  href="#"  data-toggle="modal" data-target="#tickets" >Buy Tickets</a>
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
                            <a className="menu--item__link" href="#" data-toggle="modal" data-target="#stay-date">Subscribe</a>
                        </li>
                    </ul>
                    <div className="masterbar--button">
                        <a className="button--solid" href="#"  data-toggle="modal" data-target="#tickets" >Buy Tickets</a>
                    </div>
                   </div>
                </nav>;
    }
}
