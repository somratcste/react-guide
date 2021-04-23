import React, { useContext } from 'react';
import './App.css';
import MainHeader from './components/MainHeader/MainHeader';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import ReactError from './components/ReactError/ReactError';
import ReactStyle from './components/ReactStyle/ReactStyle';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import AuthContext from './components/store/AuthContext';
import ReactHook from './components/ReactHook/ReactHook';
import Header from './components/Layout/Header';

const App = () => {
    const ctx = useContext(AuthContext);
    return (
        <>
            {/* Practise React Style */}
            {/* <ReactStyle /> */}

            {/* Practise React Error and Validation */}
            {/* <ReactError /> */}

            {/* Practise Handling side effects, reducers and context API  */}
            {/* <ReactHook /> */}

            {/* Food Order App */}
            <Header />
        </>
    );
};

export default App;
