import React, { useEffect } from 'react';
// import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export const ProtectedPage = () => {
    const isAuthed = false;
    const history = useHistory();

    useEffect(() => {
        if (!isAuthed) {
            history.push('/');
        }
    });

    return <h1>Only authed users should see this!</h1>;

    // return isAuthed
    //     ? <h1>Only authed users should see this!</h1>
    //     : <Redirect to="/" />;
}