import React, { useContext } from 'react';
import Home from '../Home/Home';
import Login from '../Login/Login';
import MainHeader from '../MainHeader/MainHeader';
import AuthContext from '../store/AuthContext';

const ReactHook = () => {
    const ctx = useContext(AuthContext);
    return (
        <>            
            <MainHeader />
            <main>
                {!ctx.isLoggedIn && <Login />}
                {ctx.isLoggedIn && <Home />}
            </main>
        </>
    );
};

export default ReactHook;
