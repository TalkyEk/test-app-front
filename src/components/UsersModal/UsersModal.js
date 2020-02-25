import React from "react";
import { connect } from "react-redux";

import "./UsersModal.scss";
import { createUser, editUser, selectedPropertyChange } from "../../actions/UserActions";

const UsersModal = (props) => {
  const { activeUser } = props;

  return (
    <div className="modal fade" id="usersModalLong" tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            { !activeUser._id ? (
              <h5 className="modal-title" id="exampleModalLongTitle">Add User</h5>
            ) : (
              <h5 className="modal-title" id="exampleModalLongTitle">Edit User</h5>
            )}
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="" className="col-form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={activeUser.fullName}
                  onChange={e => props.selectedPropertyChange("fullName", e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="" className="col-form-label">Company</label>
                <input
                  type="text"
                  className="form-control"
                  value={activeUser.company}
                  onChange={e => props.selectedPropertyChange("company", e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="" className="col-form-label">Phone</label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={activeUser.phone}
                    onChange={e => props.selectedPropertyChange("phone", e.target.value)}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            {!activeUser._id ? (
              <button
                type="button"
                className="btn btn-dark"
                data-dismiss="modal"
                onClick={() => props.createUser(activeUser.fullName, activeUser.company, activeUser.phone)}
              >
                Save
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-dark"
                data-dismiss="modal"
                onClick={() => props.editUser(activeUser._id, activeUser.fullName, activeUser.company, activeUser.phone)}
              >
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
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
    createUser: (fullName, company, phone) => dispatch(createUser(fullName, company, phone)),
    editUser: (_id, fullName, company, phone) => dispatch(editUser(_id, fullName, company, phone)),
    selectedPropertyChange: (propName, newValue) => dispatch(selectedPropertyChange(propName, newValue))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersModal);
