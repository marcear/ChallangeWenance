import { getPeopleData } from "../api/people";
import * as types from "../constants/ActionTypes";

export const getPeople = (dispatch) => {
  dispatch({ type: types.LOADING });
  getPeopleData()
    .then((response) => {
      dispatch({ type: types.LOADED_SUCCESS, payload: response.data.results });
    })
    .catch((error) => {
      dispatch({ type: types.ERROR, payload: error });
    });
};

export const deletePeopleByIndex = (index) => (dispatch) => {
  dispatch({ type: types.LOADING });
  setTimeout(() => {
    dispatch({ type: types.DELETE, payload: index });
  }, 200);
};

export const getVisiblePeople = (people, searchQuery) => {
  return people.filter((p) => p.name.toLowerCase().includes(searchQuery));
};
