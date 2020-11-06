import React from "react";
//semantic ui
import Card from "./Card";
//components

const CardList = ({ data }) => {
  return (
    data && data.map((people, index) => <Card item={people} key={index} />)
  );
};

export default CardList;
