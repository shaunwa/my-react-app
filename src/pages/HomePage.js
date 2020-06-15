import React from 'react';
import { Link } from 'react-router-dom';
import { Greeting } from '../Greeting';

export const HomePage = () => (
    <>
    <h1>The Home Page</h1>
    <Greeting name="Shaun" numberOfMessages={10} />
    <Link to="/counter">Go to Counter Page</Link>
    <Link to="/people-list">Go to People List Page</Link>
    </>
);