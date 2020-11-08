import * as types from "../constants/ActionTypes";

const initialState = {
  people: [],
  loading: false,
  error: "",
};

const peopleReducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case types.LOADED_SUCCESS:
      return {
        ...state,
        people: action.payload,
      };

    case types.LOADING_PEOPLE:
      return {
        ...state,
        loading: true,
      };

    case types.ERROR:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default peopleReducer;
