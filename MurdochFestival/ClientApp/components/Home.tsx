import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Hero } from './Hero';
import { Artists } from './Artists';
import { Experiences } from './Experiences';
import { Festival } from './Festival';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <section id='' className='first--fold banner--home'>
                <Hero />
            </section>
            <section id='artists' className='section--artists'>
                <Artists />
            </section>
            <section id='experiences' className='section--experiences'>
                <Experiences />
            </section>
            <section id='festival-info' className='section--festival'>
                <Festival />
            </section>
        </div>;
    }
}
