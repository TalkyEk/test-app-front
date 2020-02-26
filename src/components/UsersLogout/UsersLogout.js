import React from "react";
import { connect } from "react-redux";
import {  Button } from '@material-ui/core';

import "./UsersLogout.scss";
import { login } from '../../actions/UserActions'

const UsersLogout = (props) => {
  return (
    <div>
      <Button
        variant="contained"
        color="default"
        onClick={() => props.login()}
      >
        Logout
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.users.loggedIn
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (token) => dispatch(login(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersLogout);
