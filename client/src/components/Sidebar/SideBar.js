import React from "react";

import "./Sidebar.css";

const Sidebar = props => {
  return (
    <div
      style={{
        width: props.width + "px",
        height: "100%",
        backgroundColor: props.backgroundColor || "#ebeced"
      }}
    >
      {props.lists.map((list, index) => {
        return (
          <div
            onClick={() => props.onRedirect(list.name)}
            key={index}
            className="list-item"
          >
            {list.name}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
