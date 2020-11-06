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

const Card = ({ item }) => {
  return (
    <SemanticCard fluid>
      <CardContent>
        <CardHeader content={item.name} />
        <Button floated="right">Delete</Button>
        <CardMeta content={item.gender} />
        <CardDescription content={item.skin_color} />
      </CardContent>
    </SemanticCard>
  );
};

export default Card;
