import React, { useEffect, useState } from "react";
//semantic ui
import { Container } from "semantic-ui-react";
//components
import CardList from "./CardList";
//services
import { getPeopleData } from "../services/PeoplesService";

const Main = () => {
  const [peopleData, setPeopleData] = useState([]);

  useEffect(() => {
    getPeopleData().then((response) => {
      setPeopleData(response.data.results);
    });
  }, []);

  return (
    <Container style={{ width: "500px", paddingTop: "20px" }}>
      <CardList data={peopleData}></CardList>
    </Container>
  );
};

export default Main;
