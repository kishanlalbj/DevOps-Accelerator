import React from "react";
import { Form } from "react-bootstrap";

export const TextField = props => {
  const generateLabel = str => {
    return str[0]
      .toUpperCase()
      .concat(str.substring(1, str.length))
      .replace("_", " ");
  };

  return (
    <React.Fragment>
      <Form.Group>
        <Form.Label>{generateLabel(props.label)}</Form.Label>
        <Form.Control
          as={props.type}
          placeholder={props.label}
          onChange={props.onChange}
          name={props.label}
          disabled={props.disabled}
          value={props.value}
        ></Form.Control>
      </Form.Group>
    </React.Fragment>
  );
};
