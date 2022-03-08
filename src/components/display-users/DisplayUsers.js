import React from 'react';

import { DisplayUsersDiv } from '../App.styles';

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
        </div >



    );
}

export default DisplayUser;