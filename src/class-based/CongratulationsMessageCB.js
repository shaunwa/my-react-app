import React from 'react';

export class CongratulationsMessageCB extends React.Component {
    render() {
        const { numberOfClicks, threshold, onHide } = this.props;

        return numberOfClicks >= threshold
            ? (
            <>
                <h3>Congratulations! You've reached {threshold} clicks</h3>
                <button onClick={onHide}>Hide</button>
            </>
            ) : null;
    }
}
