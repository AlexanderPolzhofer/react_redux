import React, { useState } from 'react';

import { Button } from '../App.styles';

function UserInputForm(props) {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        props.handleSubmit(e, name, username);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder="Name ..."
                onChange={event => setName(event.target.value)}
            />
            <input
                type='text'
                placeholder="Username ..."
                onChange={event => setUsername(event.target.value)}
            />
            <Button type='submit'>ADD USER</Button>
        </form>
    );
}

export default UserInputForm;