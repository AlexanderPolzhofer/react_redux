import React from 'react';

function UserInputForm(props) {

    const handleSubmit = (e) => {
        props.handleSubmit(e);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder="Name ..." />
            <input type='text' placeholder="UserName ..." />
            <button type='submit'>ADD USER</button>
        </form>
    );
}

export default UserInputForm;