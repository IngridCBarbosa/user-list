import React from 'react';

import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import App from './App';

import Users from './components/user/Users';

const Routes: React.FC = () => (
  <App>
    <Switch>
      <Redirect exact path="/" to="/users" />
      <Route path="/users" component={Users} />
    </Switch>
  </App>
);

export default Routes;
