import React from 'react';
import { Button } from './Button';

export const CongratulationsMessage = ({ threshold, onHide }) => {
    return (
        <>
            <h3>Congratulations! You've reached {threshold} clicks</h3>
            <Button onClick={onHide}>Hide</Button>
        </>
    );
}