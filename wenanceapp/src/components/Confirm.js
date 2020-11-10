import React from "react";
//semantic
import { Button, Modal } from "semantic-ui-react";
//constants
import * as types from "../constants/ActionTypes";
//react redux
import { connect } from "react-redux";
//actions
import { deletePeopleByIndex } from "../actions/people";

const Confirm = ({
  deleteConfirmOpen = false,
  peopleToDelete,
  indexToDelete = null,
  dispatch,
}) => {
  if (!peopleToDelete) return null;

  return (
    <Modal
      size={"mini"}
      open={deleteConfirmOpen}
      onClose={() =>
        dispatch({
          type: types.OPEN_CONFIRM,
          payload: { show: false, index: null },
        })
      }
    >
      <Modal.Header>Deleting people</Modal.Header>
      <Modal.Content>
        <p>Are you sure you want to delete {peopleToDelete.name}?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button
          negative
          onClick={() =>
            dispatch({
              type: types.OPEN_CONFIRM,
              payload: { show: false, index: null },
            })
          }
        >
          No
        </Button>
        <Button
          positive
          onClick={() => dispatch(deletePeopleByIndex(indexToDelete))}
        >
          Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  deleteConfirmOpen: state.deleteConfirmOpen,
  peopleToDelete: state.peopleToDelete,
  indexToDelete: state.indexToDelete,
});

export default connect(mapStateToProps)(Confirm);
