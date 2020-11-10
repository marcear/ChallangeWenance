import React from "react";
//components
import Card from "./Card";
//react redux
import { connect } from "react-redux";
//semantic
import { Loader } from "semantic-ui-react";
//actions
import { deletePeopleByIndex, getVisiblePeople } from "../actions/people";
//css
import "./CardList.css";

const CardList = ({ people, loading, dispatch }) => {
  if (loading)
    return (
      <div className="cardlist-loader">
        <Loader active inline="centered" />
      </div>
    );

  return (
    people &&
    people.map((people, index) => (
      <Card
        people={people}
        key={index}
        handleDeletePeople={() => dispatch(deletePeopleByIndex(index))}
      />
    ))
  );
};

const mapStateToProps = (state) => ({
  people: getVisiblePeople(state.people, state.searchQuery),
  loading: state.loading,
});

export default connect(mapStateToProps)(CardList);
