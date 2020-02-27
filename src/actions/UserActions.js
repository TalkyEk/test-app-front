import axios from "axios"
import { DELETE_USER, CREATE_USER_ITEM, EDIT_USER, SELECTED_USER, SELECTED_USER_PROPERTY_CHANGE, GET_DATA, USER_LOGIN } from "./actionTypes";

export const createUser = (fullName, company, phone) => async dispatch => {
  const newUser = await axios.post(`https://stark-sierra-55034.herokuapp.com/api/user/`, {fullName, company, phone})
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
  await axios.delete(`https://stark-sierra-55034.herokuapp.com/api/user/${_id}`);
  dispatch({
    type: DELETE_USER,
    _id
  });
};

export const editUser = (_id, newFullName, newCompany, newPhone) => async dispatch => {
  await axios.put(`https://stark-sierra-55034.herokuapp.com/api/user/${_id}`, {fullName: newFullName, phone: newPhone, company: newCompany});
  dispatch({
    type: EDIT_USER,
    _id,
    newFullName,
    newCompany,
    newPhone
  });
};

export const selectUser = (_id) => async dispatch => {
  const data = await axios.get(`https://stark-sierra-55034.herokuapp.com/api/user/${_id}`);
  const {fullName, company, phone} = data.data;
  dispatch({
    type: SELECTED_USER,
    _id,
    fullName,
    company,
    phone
  });
};

export const selectedPropertyChange = (propName, newValue) => {
  return {
    type: SELECTED_USER_PROPERTY_CHANGE,
    propName,
    newValue
  };
};

export const getData = () => async dispatch => {
  const data = await axios.get('https://stark-sierra-55034.herokuapp.com/api/users');
  const newData = data.data;
  dispatch({
    type: GET_DATA,
    newData
  });
};

export const login = (token = null) => {
  return {
    type: USER_LOGIN,
    token
  };
};

