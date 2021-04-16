import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"

import Home from "./pages/home"
import AddURL from "./pages/addURL"

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='app'>
          <Link to="/">Home</Link>
          <Link to="/addURL">Add URL</Link>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/addURL" component={AddURL} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
