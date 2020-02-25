import React from "react";
import { connect } from "react-redux";
import {
  Paper,
  Grid,
  Button,
  Typography,
  TextField,
} from '@material-ui/core';

import "./UsersModal.scss";
import { createUser, editUser, selectedPropertyChange } from "../../actions/UserActions";
import { useHistory } from 'react-router'

const UsersModal = (props) => {
  const { activeUser } = props;
  const history = useHistory();
  const click = (func, params) => {
    func(...params)
    history.push("/");
  }
  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
      <form>
        { !activeUser._id ? (
          <Typography variant="h3">Add User</Typography>
        ) : (
          <Typography variant="h3">Edit User</Typography>
        )}
        <Paper style={{ padding: 16 }}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Full Name"
                type="text"
                value={activeUser.fullName}
                onChange={e => props.selectedPropertyChange("fullName", e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Company"
                type="text"
                value={activeUser.company}
                onChange={e => props.selectedPropertyChange("company", e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Phone"
                type="text"
                value={activeUser.phone}
                onChange={e => props.selectedPropertyChange("phone", e.target.value)}
              />
            </Grid>
            <Grid item style={{ marginTop: 16 }}>
                {!activeUser._id ? (
                  <Button
                    variant="contained"
                    color="default"
                    onClick={() => click(props.createUser, [activeUser.fullName, activeUser.company, activeUser.phone])}
                  >
                    Add
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="default"
                    onClick={() => click(props.editUser, [activeUser._id, activeUser.fullName, activeUser.company, activeUser.phone])}
                  >
                    Save
                  </Button>
                )}
            </Grid>
        </Paper>
      </form>
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