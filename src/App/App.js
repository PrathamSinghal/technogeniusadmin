import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import LoginForm from '../pages/LoginAndForgotPage/Login';
import DashBoard from '../pages/Dashboard/DashBoard';

const App = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={DashBoard}/>
                <Route exact path='/dashboard' component={DashBoard}/>
            </Switch>

        </>
    )
}

export default App;