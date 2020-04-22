import React from 'react';

export const Greeting = ({ name, numberOfMessages }) => {
    if (!name) return null;
    let isMorning = (new Date()).getHours() < 12;
    let greetingHeader = isMorning
        ? <h1>Good Morning {name}!</h1>
        : <h1>Good Evening {name}!</h1>
        
    return (
        <>
            {greetingHeader}
            {numberOfMessages === 0
                ? null
                : <p>You have {numberOfMessages} new messages</p>}
        </>
    );
}
