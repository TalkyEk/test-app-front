import React from "react";
import { connect } from "react-redux";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import EditIcon from '@material-ui/icons/Edit';

import "./UsersListItem.scss";
import { deleteUser, selectUser } from "../../actions/UserActions";
import { useHistory } from 'react-router'

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const UsersListItem = (props) => {
  const { _id, fullName, phone } = props;
  const history = useHistory();
  const click = () => {
    props.selectUser(_id)
    history.push("/form");
  }
  return (
    <StyledTableRow key={_id}>
      <StyledTableCell component="th" scope="row">{_id}</StyledTableCell>
      <StyledTableCell>{fullName}</StyledTableCell>
      <StyledTableCell>{phone}</StyledTableCell>
      <StyledTableCell>
        <Button variant="contained" color="inherit" onClick={() => click(_id)}>
          <EditIcon />
        </Button>
      <Button variant="contained" color="default" onClick={() => props.deleteUser(_id)}>
          <DeleteForeverOutlinedIcon />
        </Button>
      </StyledTableCell>
    </StyledTableRow>
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





