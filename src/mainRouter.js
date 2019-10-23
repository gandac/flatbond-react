import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CreatePage from './pages/CreatePage';
import DetailsPage from './pages/DetailsPage';
const router = (  
    <Switch>
        <Route path="/view-details" component={DetailsPage} />
        <Route path="/" exact component={CreatePage} />
    </Switch>
);
export default router;