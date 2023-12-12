import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const MailDetail = () => {
  const selectedMail = useSelector((state) => state.isVisible.selectedMail);

  console.log(selectedMail);
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
            <span>Email-{selectedMail.email}</span>

            <span>Subject-{selectedMail.subject}</span>
          </Card.Title>
          <Card.Text>
            <span style={{ fontSize: "30px" }}>Message-</span>
            {selectedMail.message}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MailDetail;
