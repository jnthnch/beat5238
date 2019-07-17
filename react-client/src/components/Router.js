import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import CreateUserForm from './CreateUserForm.jsx';
import LoginForm from './LoginForm.jsx';
import NotFound from './NotFound.jsx';


const Router = () => (


  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route path="/createuser" component={CreateUserForm} />
        <Route path="/createuser/ah" component={CreateUserForm} />
        <Route component={NotFound}></Route>
      </Switch>
    </div>
  </BrowserRouter>
)

export default Router;