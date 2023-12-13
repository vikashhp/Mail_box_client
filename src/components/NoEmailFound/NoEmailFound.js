

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import { useHistory } from "react-router-dom";

import React from 'react'

const NoEmailFound = () => {

    const history = useHistory();
    const backHandler = () => {
      history.push("/view_mail");
    };
  return (
    <div style={{ display: "flex" }}>
      <Card
        style={{
          width: "60%",
          margin: "auto",
          marginTop: "20px",
          backgroundColor: "whitesmoke",
        }}
      >
        <Card.Body>
          <Card.Title
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button onClick={backHandler}>Go Back</Button>
           
          </Card.Title>
          <Card.Text>
            <span style={{ fontSize: "30px" }}>No Mail Found</span>
         
          </Card.Text>
        
        </Card.Body>
      </Card>
    </div>
  )
}

export default NoEmailFound
