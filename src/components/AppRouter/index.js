import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import App from "../App";
import Login from "../Login";

const AppRouter = () => {
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn'))
    // const loggedIn = localStorage.getItem('loggedIn')
    useEffect(()=>{
        setLoggedIn(localStorage.getItem('loggedIn'));
        console.log("use effect called")
    })



    return (
        <Router>

            <Route exact path={'/'} component={App} />
            {loggedIn === 'true'?null:
                <Redirect from={'/*'} to={'/login'} />
            }
            <Route path={'/login'} component={Login} />
        </Router>
    );
};

export default AppRouter;
