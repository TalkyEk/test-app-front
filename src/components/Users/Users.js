import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import UserLogout from '../UsersLogout/UsersLogout';

import "./Users.scss";
import UsersList from "../UsersList/UsersList";
import { getData } from "../../actions/UserActions";

const Users = (props) => {
  useEffect(() => {
    props.getData()
  });
  const history = useHistory();
  function click () {
    history.push("/form");
  }
  return (
    <div>
      <UsersList />
      <Button variant="contained" color="default" onClick={click}>
        New User
      </Button>
      <UserLogout />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activeUser: state.users.activeUser,
    usersData: state.users.usersData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(getData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
