import {
  DELETE_USER,
  CREATE_USER_ITEM,
  EDIT_USER,
  SELECTED_USER,
  SELECTED_USER_PROPERTY_CHANGE,
  GET_DATA,
  USER_LOGIN
} from '../actions/actionTypes'

const initialValues = { _id: null, fullName: "", company: "", phone: "" };

const initialState = {
  usersData: [],
  activeUser: initialValues,
  loggedIn: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_ITEM:
      return { ...state, usersData: [...state.usersData, { _id: action._id, fullName: action.fullName, company: action.company, phone: action.phone }], activeUser: initialValues };

    case DELETE_USER:
      const index1 = state.usersData.findIndex(el => el._id === action._id);
      const newArray1 = [...state.usersData.slice(0, index1), ...state.usersData.slice(index1 + 1)];

      return { ...state, usersData: newArray1 };

    case EDIT_USER:
      const index2 = state.usersData.findIndex(el => el._id === action._id);
      const newArray2 = state.usersData.slice();
      newArray2[index2] = { _id: action._id, fullName: action.newFullName, company: action.newCompany, phone: action.newPhone };

      return { ...state, usersData: newArray2, activeUser: initialValues };

    case SELECTED_USER:
      return { ...state, activeUser: { _id: action._id, fullName: action.fullName, company: action.company, phone: action.phone } };

    case SELECTED_USER_PROPERTY_CHANGE:
      return { ...state, activeUser: { ...state.activeUser, [action.propName]: action.newValue } };

    case GET_DATA:
      return { ...state, usersData: action.newData };

    case USER_LOGIN:
      return { ...state, loggedIn: action.token };

    default:
      return state;
  }
};

export default userReducer;
