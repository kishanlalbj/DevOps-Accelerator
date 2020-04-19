import React from "react";
import { Card } from "react-bootstrap";

const CustomCard = props => {
  return (
    <>
      <Card style={{ width: props.width || "18rem" }}>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.createdOn}
            {props.children}
          </Card.Subtitle>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
        {props.showFooter ? (
          <Card.Footer>
            <div
              onClick={() => props.onView(props.id)}
              style={{ float: "left", cursor: "pointer" }}
            >
              View
            </div>
            <div
              onClick={() => props.onSelect(props.id)}
              style={{ float: "right", cursor: "pointer" }}
            >
              Select
            </div>
          </Card.Footer>
        ) : null}
      </Card>
    </>
  );
};

export default CustomCard;
