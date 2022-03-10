import React from 'react';

import { useDispatch } from "react-redux";

import { Button, DisplayUsersDiv } from '../App.styles';
import { deleteUser } from '../../features/Users';

function DisplayUser({ ...props }) {

    const { userList } = props;

    const dispatch = useDispatch();
    return (
        <div>
            {userList.map(user => {
                return (
                    < DisplayUsersDiv key={user.id} >
                        <h1 >{user.name}</h1>
                        <h3>{user.username}</h3>
                        <form onClick={event => event.preventDefault()}>
                            <input
                                type='text'
                                placeholder='change username ...'
                            />
                            <Button >CHANGE USERNAME</Button>
                            <Button onClick={() => {
                                dispatch(deleteUser({ id: user.id }))
                            }}>DELETE USER</Button>
                        </form>

                    </DisplayUsersDiv>
                )
            })}
        </div >
    );
}

export default DisplayUser;