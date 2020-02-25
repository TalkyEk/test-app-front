import React, { Component } from "react";
import { Route, Switch } from "react-router";


import Users from "./components/Users/Users";
import Form from "./components/UsersModal/UsersModal"


class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/form" exact component={Form} />
      </Switch>
    );
  }
}

export default App;
