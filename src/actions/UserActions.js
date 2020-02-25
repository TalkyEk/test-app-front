import axios from "axios"
import { DELETE_USER, CREATE_USER_ITEM, EDIT_USER, SELECTED_USER, SELECTED_USER_PROPERTY_CHANGE, NEW_USER_MODAL, GET_DATA } from "./actionTypes";

export const createUser = (fullName, company, phone) => async dispatch => {
  const newUser = await axios.post(`http://localhost:3001/api/user/`, {fullName, company, phone})
  const {_id} = newUser.data;
  dispatch({
    type: CREATE_USER_ITEM,
    _id,
    fullName,
    company,
    phone
  });
};

export const deleteUser = (_id) => async dispatch => {
  await axios.delete(`http://localhost:3001/api/user/${_id}`);
  dispatch({
    type: DELETE_USER,
    _id
  });
};

export const editUser = (_id, newFullName, newCompany, newPhone) => async dispatch => {
  await axios.put(`http://localhost:3001/api/user/${_id}`, {fullName: newFullName, phone: newPhone, company: newCompany});
  dispatch({
    type: EDIT_USER,
    _id,
    newFullName,
    newCompany,
    newPhone
  });
};

export const selectUser = (_id, fullName, company, phone) => {
  return {
    type: SELECTED_USER,
    _id,
    fullName,
    company,
    phone
  };
};

export const selectedPropertyChange = (propName, newValue) => {
  return {
    type: SELECTED_USER_PROPERTY_CHANGE,
    propName,
    newValue
  };
};

export const newUserModal = () => {
  return {
    type: NEW_USER_MODAL
  };
};

export const getData = () => async dispatch => {
  const data = await axios.get('http://localhost:3001/api/users');
  const newData = data.data;
  dispatch({
    type: GET_DATA,
    newData
  });
};