import * as React from 'react';
import { NavMenu } from './NavMenu';
import { Footer } from './Footer';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return <div className='page--microsite'>
                <header className='nav--dark_bg navbar-fixed-top'>
                    <NavMenu />
                </header>
                <main className='page--content'>
                    { this.props.children }
                </main>
                <footer className='footer--dark_bg'>
                    <Footer />
                </footer>
        </div>;
    }
}
