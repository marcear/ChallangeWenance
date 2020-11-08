import React, { useEffect, useState } from "react";
//semantic ui
import { Container } from "semantic-ui-react";
//components
import CardList from "./CardList";
//redux store
import store from "../store/store";
//constans
import { GET_PEOPLE } from "../constants/ActionTypes";
import { getPeople } from "../actions/people";

const Main = () => {
  console.log("store", store);

  useEffect(() => {
    store.dispatch(getPeople);
  }, []);

  return <Container style={{ width: "500px", paddingTop: "20px" }}></Container>;
};

export default Main;
