import React, { useState } from 'react';
import './App.css';
import ReactStyle from './components/ReactStyle/ReactStyle';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

const App = () => {
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
            {/* Practise React Style */}
            {/* <ReactStyle /> */}

            <AddUser onAddUser={addUserHandler} />
            <UserList users={userList} />
        </div>
    );
};

export default App;
