import { DELETE_USER, CREATE_USER_ITEM, EDIT_USER, SELECTED_USER, SELECTED_USER_PROPERTY_CHANGE, NEW_USER_MODAL, GET_DATA } from "../actions/actionTypes";

const initialValues = { _id: null, fullName: "", company: "", phone: "" };

const initialState = {
  usersData: [],
  activeUser: initialValues
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_ITEM:
      return { ...state, usersData: [...state.usersData, { _id: action._id, fullName: action.fullName, company: action.company, phone: action.phone }] };

    case DELETE_USER:
      const index1 = state.usersData.findIndex(el => el._id === action._id);
      const newArray1 = [...state.usersData.slice(0, index1), ...state.usersData.slice(index1 + 1)];

      return { ...state, usersData: newArray1 };

    case EDIT_USER:
      const index2 = state.usersData.findIndex(el => el._id === action._id);
      const newArray2 = state.usersData.slice();

      newArray2[index2] = { _id: action._id, fullName: action.newFullName, company: action.newCompany, phone: action.newPhone };

      return { ...state, usersData: newArray2 };

    case SELECTED_USER:
      const index3 = state.usersData.findIndex(el => el._id === action._id);
      const newArray3 = state.usersData.slice();
      const actCust = newArray3[index3];

      return { ...state, activeUser: actCust };

    case SELECTED_USER_PROPERTY_CHANGE:
      return { ...state, activeUser: { ...state.activeUser, [action.propName]: action.newValue } };

    case NEW_USER_MODAL:
      return { ...state, activeUser: { ...initialValues } };

    case GET_DATA:
      return { ...state, usersData: action.newData };

    default:
      return state;
  }
};

export default userReducer;
