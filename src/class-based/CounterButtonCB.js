import React from 'react';

export class CounterButtonCB extends React.Component {
    render() {
        const { numberOfClicks, onIncrement } = this.props;
        return (
            <>
            <p>You've clicked the button {numberOfClicks} times</p>
            <button onClick={onIncrement}>Click me!</button>
            </>
        );
    }
}