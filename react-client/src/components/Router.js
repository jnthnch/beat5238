import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UsernameDropdown from './UsernameDropdown.jsx';
import CreateUserForm from './CreateUserForm.jsx';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={UsernameDropdown} />
      <Route path="/createuser" component={CreateUserForm} />
      <Route path="/createuser/ah" component={CreateUserForm} />
    </Switch>
  </BrowserRouter>
)

export default Router;