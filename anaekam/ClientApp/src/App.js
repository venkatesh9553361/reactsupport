import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Forget from './components/forgot';
import Home from './components/Home';
import Login from './components/login';
import Register from './components/register';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={"/"} exact={true} component={Login} />
                <Route path={"/dashboard"} exact={true} component={Home} />
                <Route path={"/forgot"} exact={true} component={Forget} />
                <Route path={"/register"} exact={true} component={Register} />
            </Switch>
        </BrowserRouter>
    );
  }
}
