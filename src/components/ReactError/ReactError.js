import React, { useState } from 'react';
import AddUser from '../Users/AddUser';
import UserList from '../Users/UserList';

const ReactError = () => {
    const [userList, setUserList] = useState([]);

    const addUserHandler = (username, age) => {
        setUserList((prevUserList) => {
            return [
                ...prevUserList, 
                {
                    username: username, 
                    age: age,
                    id: Math.random().toString()
                }
            ];
        });
    };

    return (
        <div>
            <AddUser onAddUser={addUserHandler} />
            <UserList users={userList} />
        </div>
    );
};

export default ReactError;
