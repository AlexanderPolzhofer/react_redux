import React, { useState } from 'react';

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
            <button type='submit'>ADD USER</button>
        </form>
    );
}

export default UserInputForm;