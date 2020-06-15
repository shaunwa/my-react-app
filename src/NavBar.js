import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = ({ links }) => (
    <ul>
        {links.map(link => (
            <li key={link.url}>
                <Link to={link.url}>{link.label}</Link>
            </li>
        ))}
    </ul>
);