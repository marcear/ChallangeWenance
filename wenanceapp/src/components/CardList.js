import React from "react";
//components
import Card from "./Card";
//react redux
import { connect } from "react-redux";
//semantic
import { Loader } from "semantic-ui-react";
//actions
import { getVisiblePeople } from "../actions/people";
//css
import "./CardList.css";
//constants
import * as types from "../constants/ActionTypes";

const CardList = ({ people, loading, dispatch }) => {
  if (loading)
    return (
      <div className="cardlist-loader">
        <Loader active inline="centered" />
      </div>
    );

  return (
    people &&
    people.map((person, index) => (
      <Card
        people={person}
        key={index}
        handleDeletePeople={() =>
          dispatch({
            type: types.OPEN_CONFIRM,
            payload: { show: true, person: person, index: index },
          })
        }
      />
    ))
  );
};

const mapStateToProps = (state) => ({
  people: getVisiblePeople(state.people, state.searchQuery),
  loading: state.loading,
  deleteConfirmOpen: state.deleteConfirmOpen,
});

export default connect(mapStateToProps)(CardList);
