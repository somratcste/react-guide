import React, { useState } from 'react';
import './App.css';
import ReactError from './components/ReactError/ReactError';
import ReactStyle from './components/ReactStyle/ReactStyle';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

const App = () => {
    return (
        <>
            {/* Practise React Style */}
            {/* <ReactStyle /> */}

            {/* Practise React Error and Validation */}
            <ReactError />
        </>
    );
};

export default App;
