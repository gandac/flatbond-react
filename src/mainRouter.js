import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import CreatePage from './pages/CreatePage';
import DetailsPage from './pages/DetailsPage';
const router = (  
    <Switch>
     
        <Redirect to="/" />
    </Switch>
);
export default router;