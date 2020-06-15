import React from 'react';
import { CounterButtonCB } from './CounterButtonCB';
import { CongratulationsMessageCB } from './CongratulationsMessageCB';

export class CounterButtonPageCB extends React.Component {
    state = {
        hideMessage: false,
        numberOfClicks: 0,
    }

    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState({ numberOfClicks: this.state.numberOfClicks + 1})
    }

    render() {
        const { hideMessage, numberOfClicks } = this.state;

        return (
            <>
            <h1>The Counter Button Page</h1>
            {hideMessage
                ? null
                : <CongratulationsMessageCB
                    numberOfClicks={numberOfClicks}
                    threshold={10}
                    onHide={() => this.setState({ hideMessage: true })} />}
            <CounterButtonCB
                numberOfClicks={numberOfClicks}
                onIncrement={this.increment} />
            </>
        );
    }
}