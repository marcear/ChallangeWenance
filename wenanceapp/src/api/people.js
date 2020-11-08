import axios from "axios";

const getPeopleData = (dispatch) => {
  return axios.get("https://swapi.dev/api/people/");
};

export { getPeopleData };
