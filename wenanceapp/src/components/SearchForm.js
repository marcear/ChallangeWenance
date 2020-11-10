import React, { useState } from "react";
//semantic
import { Input, Button } from "semantic-ui-react";
//react redux
import { connect } from "react-redux";
//constant types
import * as types from "../constants/ActionTypes";
//css
import "./SearchForm.css";

const SearchForm = ({ dispatch }) => {
  const [searchedQuery, setSearchedQuery] = useState("");

  const handleSearch = () => {
    dispatch({ type: types.SEARCH, payload: searchedQuery });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <Input
        onChange={(e) => setSearchedQuery(e.target.value)}
        placeholder="Search..."
        onKeyDown={handleKeyDown}
      />
      <Button className="searchform-button" onClick={handleSearch}>
        Search
      </Button>
    </>
  );
};

const mapStateToProps = (state) => ({
  people: state.people,
  loading: state.loading,
});

export default connect(mapStateToProps)(SearchForm);
