import React from "react";
import "./EmailList.css";
import { Fragment } from "react";
import ListGroup from "react-bootstrap/ListGroup";

const EmailList = (props) => {
  return (
    <Fragment>
      <ListGroup>
        <ListGroup.Item>
          <span>{props.email}</span>

          <span className="center">{props.message}</span>

          <span className="right">{props.subject}</span>
        </ListGroup.Item>
      </ListGroup>
    </Fragment>
  );
};

export default EmailList;
