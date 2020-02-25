import React from "react";
import { connect } from "react-redux";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import UsersListItem from "../UsersListItem/UsersListItem";
import "./UsersList.scss";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const UsersList = (props) => {
  const classes = useStyles();
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
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Full Name</StyledTableCell>
            <StyledTableCell>Phone</StyledTableCell>
            <StyledTableCell>Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { elements }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    usersData: state.users.usersData,
  };
};

export default connect(mapStateToProps)(UsersList);
