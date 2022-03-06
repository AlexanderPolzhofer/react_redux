import React from 'react';

function DisplayUser({ ...props }) {
    const { userList } = props;

    return (
        <div>
            {userList.map(user => {
                return <h1 key={user.id}>{user.name}</h1>
            })}
        </div>
    );
}

export default DisplayUser;