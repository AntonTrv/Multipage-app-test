import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Contacts from './contacts';
import Welcome from './welcome';
import Clients from './clients';
import SignIn from './signIn';
import LogIn from './logIn';

// Router main path dist
const Main = () => (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route exact path="/contacts" component={Contacts} />
    <Route exact path="/clients" component={Clients} />
    <Route exact path="/signIn" component={SignIn} />
    <Route exact path="/logIn" component={LogIn} />
  </Switch>
);

export default Main;
