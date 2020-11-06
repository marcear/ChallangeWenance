import axios from "axios";

const getPeopleData = () => {
  return axios.get("https://swapi.dev/api/people/");
};

export { getPeopleData };
