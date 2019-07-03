import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UsernameDropdown from './UsernameDropdown.jsx';
import CreateUserForm from './CreateUserForm.jsx';
import LoginForm from './LoginForm.jsx';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={UsernameDropdown} />
      <Route exact path="/login" component={LoginForm} />
      <Route path="/createuser" component={CreateUserForm} />
      <Route path="/createuser/ah" component={CreateUserForm} />
    </Switch>
  </BrowserRouter>
)

export default Router;