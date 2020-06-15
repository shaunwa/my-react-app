import React from 'react';
import { useUserData } from '../useUserData';

export const UserProfilePage = () => {
    const user = useUserData();
    return (
        <div>
            <h3>Name: {user.name.first} {user.name.last}</h3>
            <p>Email: {user.email}</p>
        </div>
    );
}