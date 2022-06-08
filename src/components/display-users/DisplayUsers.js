import React, { useState } from 'react';

import { useDispatch } from "react-redux";

import { Button, DisplayUsersDiv, UserLayout } from '../App.styles';
import { deleteUser, updateUsername } from '../../features/Users';

const DisplayUser = ({ userList }) => {

    const [newUsername, setNewUsername] = useState();
    const dispatch = useDispatch();

    return (
        <div>
            {userList.map(user => {
                const { name, username, id } = user;
                return (
                    < DisplayUsersDiv key={id} >
                        <UserLayout>
                            <h1 >{name}</h1>
                            <h3 >{username}</h3>
                            <form onClick={event => event.preventDefault()}>
                                <input
                                    type='text'
                                    placeholder='change username ...'
                                    onChange={event => setNewUsername(event.target.value)}
                                />
                                <Button onClick={() => dispatch(updateUsername({
                                    id,
                                    username: newUsername
                                }))}>CHANGE USERNAME</Button>
                                <Button onClick={() => {
                                    dispatch(deleteUser({ id }))
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