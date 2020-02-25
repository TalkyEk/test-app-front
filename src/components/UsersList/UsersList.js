import React from "react";
import { connect } from "react-redux";

import UsersListItem from "../UsersListItem/UsersListItem";
import "./UsersList.scss";

const UsersList = (props) => {
  const { usersData } = props;
  const elements = usersData.map((item) => {
    const { _id, ...itemProps } = item;
    return (
      <UsersListItem
        key={_id}
        {...itemProps}
        _id={_id}
      />
    );
  });

  return (
    <table className="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Full Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        { elements }
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => {
  return {
    usersData: state.users.usersData,
  };
};

export default connect(mapStateToProps)(UsersList);
