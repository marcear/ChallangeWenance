import * as types from "../constants/ActionTypes";

const initialState = {
  people: [],
  loading: false,
  error: "",
  searchQuery: "",
  deleteConfirmOpen: false,
  peopleToDelete: null,
  indexToDelete: null,
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADED_SUCCESS:
      return {
        ...state,
        people: action.payload,
        loading: false,
      };

    case types.LOADING:
      return {
        ...state,
        loading: true,
      };

    case types.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.DELETE:
      return {
        ...state,
        people: state.people.filter(
          (p) => state.people.indexOf(p) !== action.payload
        ),
        loading: false,
      };

    case types.UPDATE_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };

    case types.OPEN_CONFIRM:
      return {
        ...state,
        deleteConfirmOpen: action.payload.show,
        peopleToDelete: action.payload.person,
        indexToDelete: action.payload.index,
      };

    default:
      return state;
  }
};

export default peopleReducer;
