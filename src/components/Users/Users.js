import React, { useEffect } from "react";
import { connect } from "react-redux";

import "./Users.scss";
import UsersList from "../UsersList/UsersList";
import UsersModal from "../UsersModal/UsersModal";
import { newUserModal, getData } from "../../actions/UserActions";


const Users = (props) => {
  useEffect(() => {
    props.getData()
  }, []);
  return (
    <div>
      <UsersList />
        <button
          type="button"
          className="btn btn-dark"
          onClick={props.newUserModal}
          data-toggle="modal"
          data-target="#usersModalLong"
        >
        Add User
        </button>
      <UsersModal />
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
    newUserModal: () => dispatch(newUserModal()),
    getData: () => dispatch(getData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
