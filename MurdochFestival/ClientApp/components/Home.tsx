import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Hero } from './Hero';
import { Artists } from './Artists';
import { Experiences } from './Experiences';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <section className='first--fold banner--home'>
                <Hero />
            </section>
            <section className='artists'>
                <Artists />
            </section>
            <section className='experiences'>
                <Experiences />
            </section>
        </div>;
    }
}
