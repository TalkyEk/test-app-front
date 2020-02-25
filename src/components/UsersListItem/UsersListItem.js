import React from "react";
import { connect } from "react-redux";

import "./UsersListItem.scss";
import { deleteUser, selectUser } from "../../actions/UserActions";

const UsersListItem = (props) => {
  const { _id, fullName, phone } = props;
  return (
    <tr>
      <th scope="row">{_id}</th>
      <td>{fullName}</td>
      <td>{phone}</td>
      <td>
        <button
          onClick={() => props.selectUser(_id)}
          type="button"
          className="btn btn-success btn-sm"
          data-toggle="modal"
          data-target="#usersModalLong"
        >
          <i className="fa fa-pencil-square-o" />
        </button>
        <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => props.deleteUser(_id)}>
          <i className="fa fa-trash-o" />
        </button>
      </td>
    </tr>
  );
};

const mapStateToProps = (state) => {
  return {
    usersData: state.users.usersData,
    activeUser: state.users.activeUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: _id => dispatch(deleteUser(_id)),
    selectUser: _id => dispatch(selectUser(_id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersListItem);
