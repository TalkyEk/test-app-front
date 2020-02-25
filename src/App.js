import React, { Component } from "react";
import { Route, Switch } from "react-router";


import Users from "./components/Users/Users";


class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Users} />
      </Switch>
    );
  }
}

export default App;
