import React, { useState } from 'react';
import './App.css';
import ReactStyle from './components/ReactStyle/ReactStyle';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

const App = () => {
    return (
        <div>
            {/* Practise React Style */}
            {/* <ReactStyle /> */}

            <AddUser />
            <UserList users={[]} />
        </div>
    );
};

export default App;
