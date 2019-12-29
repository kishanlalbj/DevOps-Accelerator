import React from "react";
import { Nav, ListGroup } from "react-bootstrap";

const SideBar = props => {
  return (
    <div
      style={{
        width: props.width + "px",
        height: "100vh",
        backgroundColor: props.backgroundColor
      }}
    >
      {props.lists.map((list, index) => {
        return (
          <div
            key={index}
            style={{
              width: "100%",
              paddingTop: "10px"
            }}
          >
            <p
              style={{
                marginLeft: "10px"
              }}
            >
              {list.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
