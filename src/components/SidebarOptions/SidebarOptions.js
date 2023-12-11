import React from "react";
import "./SidebarOptions.css";
import ListGroup from "react-bootstrap/ListGroup";

const SidebarOptions = (props) => {
  
  return (
    <ListGroup>
      <ListGroup.Item>
        <h4>{props.title} </h4>
        {props.number}
      </ListGroup.Item>
    </ListGroup>
  );
};

export default SidebarOptions;
