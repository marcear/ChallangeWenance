import React, { useEffect } from "react";
//semantic ui
import { Container, Grid } from "semantic-ui-react";
//components
import CardList from "./CardList";
import SearchForm from "./SearchForm";
import Confirm from "./Confirm";
//redux store
import store from "../store/store";
//react-redux
import { Provider } from "react-redux";
//api action call
import { getPeople } from "../actions/people";
//css
import "./Main.css";

const Main = () => {
  useEffect(() => {
    store.dispatch(getPeople);
  }, []);

  return (
    <Container className="main-container">
      <Provider store={store}>
        <Grid centered columns={2}>
          <Grid.Column>
            <SearchForm />
            <CardList />
            <Confirm />
          </Grid.Column>
        </Grid>
      </Provider>
    </Container>
  );
};

export default Main;
