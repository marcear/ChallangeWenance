import { getPeopleData } from "../api/people";
import * as types from "../constants/ActionTypes";

// const getPeople = (people) => ({
//   type: types.GET_PEOPLE,
//   people,
// });

export const getPeople = (dispatch) => {
  dispatch({ type: types.LOADING_PEOPLE });
  getPeopleData()
    .then((response) => {
      dispatch({ type: types.LOADED_SUCCESS, payload: response.data.results });
    })
    .catch((error) => {
      dispatch({ type: types.ERROR });
    });
};
