import * as React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';

export class Festival extends React.Component<{}, {}> {
    public render() {
        return <div className='container'>
            <div className='row'>
                <h2 className='left l-section-title'>Festival</h2>
                <PanelGroup accordion id="accordion-example">
                    <Panel eventKey="1">
                        <Panel.Heading>
                            <Panel.Title toggle>Festival info</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, laboriosam iste? Similique ea ullam laboriosam ab eligendi tempore ipsum quo. Architecto distinctio explicabo doloribus expedita placeat eligendi possimus vero totam!
                        </Panel.Body>
                    </Panel>
                    <Panel eventKey="2">
                        <Panel.Heading>
                            <Panel.Title toggle>Festival info</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, laboriosam iste? Similique ea ullam laboriosam ab eligendi tempore ipsum quo. Architecto distinctio explicabo doloribus expedita placeat eligendi possimus vero totam!
                        </Panel.Body>
                    </Panel>
                    <Panel eventKey="3">
                        <Panel.Heading>
                            <Panel.Title toggle>Festival info</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, laboriosam iste? Similique ea ullam laboriosam ab eligendi tempore ipsum quo. Architecto distinctio explicabo doloribus expedita placeat eligendi possimus vero totam!</Panel.Body>
                    </Panel>
                    <Panel eventKey="4">
                        <Panel.Heading>
                            <Panel.Title toggle>Festival info</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, laboriosam iste? Similique ea ullam laboriosam ab eligendi tempore ipsum quo. Architecto distinctio explicabo doloribus expedita placeat eligendi possimus vero totam!</Panel.Body>
                    </Panel>
                    <Panel eventKey="5">
                        <Panel.Heading>
                            <Panel.Title toggle>Festival info</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, laboriosam iste? Similique ea ullam laboriosam ab eligendi tempore ipsum quo. Architecto distinctio explicabo doloribus expedita placeat eligendi possimus vero totam!</Panel.Body>
                    </Panel>
                    <Panel eventKey="6">
                        <Panel.Heading>
                            <Panel.Title toggle>Festival info</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, laboriosam iste? Similique ea ullam laboriosam ab eligendi tempore ipsum quo. Architecto distinctio explicabo doloribus expedita placeat eligendi possimus vero totam!</Panel.Body>
                    </Panel>
                    <Panel eventKey="7">
                        <Panel.Heading>
                            <Panel.Title toggle>Festival info</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, laboriosam iste? Similique ea ullam laboriosam ab eligendi tempore ipsum quo. Architecto distinctio explicabo doloribus expedita placeat eligendi possimus vero totam!</Panel.Body>
                    </Panel>
                    <Panel eventKey="8">
                        <Panel.Heading>
                            <Panel.Title toggle>Festival info</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, laboriosam iste? Similique ea ullam laboriosam ab eligendi tempore ipsum quo. Architecto distinctio explicabo doloribus expedita placeat eligendi possimus vero totam!</Panel.Body>
                    </Panel>
                    <Panel eventKey="9">
                        <Panel.Heading>
                            <Panel.Title toggle>Festival info</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, laboriosam iste? Similique ea ullam laboriosam ab eligendi tempore ipsum quo. Architecto distinctio explicabo doloribus expedita placeat eligendi possimus vero totam!</Panel.Body>
                    </Panel>
                    <Panel eventKey="10">
                        <Panel.Heading>
                            <Panel.Title toggle>Terms of entry</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, laboriosam iste? Similique ea ullam laboriosam ab eligendi tempore ipsum quo. Architecto distinctio explicabo doloribus expedita placeat eligendi possimus vero totam!</Panel.Body>
                    </Panel>
                </PanelGroup>
            </div>
        </div>;
    }
}
