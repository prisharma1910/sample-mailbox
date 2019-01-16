import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {Dashboard} from './Dashboard';
import {Login} from './Login';

const RoutingContainer = () => (
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route path='/login' component={Login}/>
      <Route path='/dashboard' component={Dashboard}/>
    </Switch>
)

export default RoutingContainer;