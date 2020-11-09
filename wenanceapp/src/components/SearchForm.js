import React from "react";
//semantic
import { Input, Button } from "semantic-ui-react";
//react redux
import { connect } from "react-redux";
//constant types
import * as types from "../constants/ActionTypes";

const SearchForm = ({ dispatch }) => {
  return (
    <>
      <Input
        onChange={(e) =>
          dispatch({ type: types.SEARCH, payload: e.target.value })
        }
        placeholder="Search..."
      />
      <Button>Search</Button>
    </>
  );
};

const mapStateToProps = (state) => ({
  people: state.people,
  loading: state.loading,
});

export default connect(mapStateToProps)(SearchForm);
