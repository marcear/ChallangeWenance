import React from "react";
//components
import Card from "./Card";
//react redux
import { connect } from "react-redux";
//semantic
import { Loader } from "semantic-ui-react";
//actions
import { deletePeopleByIndex, getVisiblePeople } from "../actions/people";

const CardList = ({ people, loading, dispatch }) => {
  if (loading) return <Loader active inline="centered" />;

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
