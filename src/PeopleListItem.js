import React from 'react';
import './PeopleListItem.css';

export const PeopleListItem = ({ person }) => (
    <div className="list-item-container">
        <h3>{person.name}</h3>
        <p>Age: {person.age}</p>
        <p>Hair Color: {person.hairColor}</p>
    </div>
);