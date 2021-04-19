import React, { useState } from 'react';
import './App.css';
import ReactStyle from './components/ReactStyle/ReactStyle';
import AddUser from './components/Users/AddUser';

const App = () => {
    return (
        <div>
            {/* Practise React Style */}
            {/* <ReactStyle /> */}

            <AddUser />
        </div>
    );
};

export default App;
