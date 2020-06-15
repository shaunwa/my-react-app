import React from 'react';
import { DangerButton } from './Button';

export const CounterButton = ({ numberOfClicks, onIncrement }) => {
	return (
		<>
		<p>You've clicked the button {numberOfClicks} times</p>
		<DangerButton onClick={onIncrement}>Click me!</DangerButton>
		</>
	);
}
