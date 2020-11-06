import React from "react";
//semantic ui
import Card from "./Card";
//components

const CardList = ({ data }) => {
  return data && data.map((peope) => <Card header={data.name} />);
};

export default CardList;
