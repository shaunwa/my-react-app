import React from 'react';
import { PeopleListItem } from './PeopleListItem';
import styled from 'styled-components';

const Wrapper = styled.div`
    border: 2px solid white;
    padding: 32px;
`;

export const PeopleList = ({ people }) => (
    <Wrapper>
    {people.map(person => <PeopleListItem key={person.name} person={person} />)}
    </Wrapper>
);