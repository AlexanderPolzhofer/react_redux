import React from 'react';

import { Button, DisplayUsersDiv } from '../App.styles';

function DisplayUser({ ...props }) {
    const { userList } = props;

    return (
        <div>
            {userList.map(user => (
                < DisplayUsersDiv key={user.id} >
                    <h1 >{user.name}</h1>
                    <h3>{user.username}</h3>
                </DisplayUsersDiv>
            ))}
            <form>
                <input
                    type='text'
                    placeholder='change username ...'
                />
            </form>
            <Button>CHANGE USERNAME</Button>
            <Button>DELETE USER</Button>
        </div >



    );
}

export default DisplayUser;