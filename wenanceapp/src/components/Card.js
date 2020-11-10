import React from "react";
//semantic ui
import {
  Card as SemanticCard,
  CardContent,
  CardMeta,
  CardDescription,
  CardHeader,
  Button,
} from "semantic-ui-react";

const Card = ({ people, handleDeletePeople }) => {
  return (
    <SemanticCard fluid>
      <CardContent>
        <CardHeader content={people.name} />
        <Button floated="right" onClick={handleDeletePeople}>
          Delete
        </Button>
        <CardMeta content={`Gender: ${people.gender}`} />
        <CardDescription content={`Skin color: ${people.skin_color}`} />
      </CardContent>
    </SemanticCard>
  );
};

export default Card;
