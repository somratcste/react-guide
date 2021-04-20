import React, { useState } from 'react';
import './App.css';
import MainHeader from './components/MainHeader/MainHeader';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import ReactError from './components/ReactError/ReactError';
import ReactStyle from './components/ReactStyle/ReactStyle';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        setIsLoggedIn(false);
    };

    return (
        <>
            {/* Practise React Style */}
            {/* <ReactStyle /> */}

            {/* Practise React Error and Validation */}
            {/* <ReactError /> */}

            {/* Practise Handling side effects, reducers and context API  */}
            <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
            <main>
                {!isLoggedIn && <Login onLogin={loginHandler} />}
                {isLoggedIn && <Home onLogout={logoutHandler} />}
            </main>
        </>
    );
};

export default App;
