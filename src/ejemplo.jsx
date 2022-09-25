import React, { Component } from 'react';

// StateFull Component
export const StateFullComponent = () => {
    const [name, SetName] = React.useState('Hello wolrd');

    return (
        <h1>Hello world</h1>
    );
};

// Stateless component
export const StateLessComponent = props => <AnotherComponent name={props.name}/>;

// Class component
class ClassComponent extends Component {
    constructor () {
        super();
        this.state = {
            count: 0,
        };
    };

    render () {
        return (
            <h1>Hello</h1>
        );
    };
};