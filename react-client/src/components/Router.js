import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UsernameDropdown from './UsernameDropdown.jsx';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={UsernameDropdown}></Route>
      <Route ></Route>
    </Switch>
  </BrowserRouter>
)

export default Router;