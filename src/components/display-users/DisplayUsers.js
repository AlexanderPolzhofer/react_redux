import React, { useState } from 'react';

import { useDispatch } from "react-redux";

import { Button, DisplayUsersDiv, UserLayout } from '../App.styles';
import { deleteUser, updateUsername } from '../../features/Users';

function DisplayUser({ ...props }) {

    const [newUsername, setNewUsername] = useState();
    const { userList } = props;
    const dispatch = useDispatch();

    return (
        <div>
            {userList.map(user => {
                return (
                    < DisplayUsersDiv key={user.id} >
                        <UserLayout>
                            <h1 >{user.name}</h1>
                            <h3 >{user.username}</h3>
                            <form onClick={event => event.preventDefault()}>
                                <input
                                    type='text'
                                    placeholder='change username ...'
                                    onChange={event => setNewUsername(event.target.value)}
                                />
                                <Button onClick={() => dispatch(updateUsername({
                                    id: user.id,
                                    username: newUsername
                                }))}>CHANGE USERNAME</Button>
                                <Button onClick={() => {
                                    dispatch(deleteUser({ id: user.id }))
                                }}>DELETE USER</Button>
                            </form>
                        </UserLayout>
                    </DisplayUsersDiv>
                )
            })}
        </div >
    );
}

export default DisplayUser;