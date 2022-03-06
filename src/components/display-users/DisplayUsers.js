import React from 'react';

function DisplayUser({ ...props }) {
    const { userList } = props;

    return (
        <div>
            {userList.map(user => {
                return <div key={user.id}>
                    <h1 >{user.name}</h1>
                    <h3>{user.username}</h3>
                </div>
            })}
        </div>
    );
}

export default DisplayUser;