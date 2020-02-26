import React, { Component } from "react";
import { connect } from 'react-redux';
import { Route, Switch } from "react-router";


import Users from "./components/Users/Users";
import Form from "./components/UsersModal/UsersModal";
import LoginFacebook from "./components/LoginFacebook/LoginFacebook";
import PrivateRoute from "./PrivateRoute";


class App extends Component {
  render() {
    return (
      <Switch>
        <PrivateRoute path="/" exact component={Users} auth={this.props.loggedIn} />
        <PrivateRoute path="/form" exact component={Form} />
        <Route path="/login" exact component={LoginFacebook} />
      </Switch>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.users.loggedIn
  };
};
export default connect(mapStateToProps)(App);
