import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import CloseButton from "react-bootstrap/CloseButton";
import { useDispatch } from "react-redux";
import { composeActions } from "../Store/ComposeVisible";
import { Fragment } from "react";
import { useState } from "react";
import { db } from "../WelcomePage/firebaseCode";
import { collection, addDoc } from "@firebase/firestore";

const Compose = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const database = collection(db, "emails");

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const subjectChangeHandler = (e) => {
    setSubject(e.target.value);
  };

  const messageChangeHandler = (e) => {
    setMessage(e.target.value);
  };

  const messageSubmitHandler = async (event) => {
    event.preventDefault();

    if (email === "") {
      return alert("Email is Required");
    }
    if (subject === "") {
      return alert("Subject is Required");
    }
    if (message === "") {
      return alert("Message is Required");
    }

    const data = {
      email,
      subject,
      message,
    };

    try {
      addDoc(database, data);
      alert("Message Sent Successfully");
    } catch (err) {
      console.log(err);
    }
    setEmail("");
    setMessage("");
    setSubject("");
    // dispatch(composeActions.NotVisible());
  };

  const closeHandler = () => {
    dispatch(composeActions.NotVisible());
  };
  return (
    <Fragment>
      <Card>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container style={{ backgroundColor: "black" }}>
            <Navbar.Brand style={{ color: "white" }}>New Message</Navbar.Brand>
            <CloseButton
              style={{ backgroundColor: "white" }}
              onClick={closeHandler}
            />
          </Container>
        </Navbar>
        <form onSubmit={messageSubmitHandler}>
          <Card.Body>
            <Card.Title>Message</Card.Title>'
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={emailChangeHandler}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Subject"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={subjectChangeHandler}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Message... "
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                value={message}
                onChange={messageChangeHandler}
              />
            </FloatingLabel>
  
          </Card.Body>
          <Button variant="primary" type="submit">
            Send
          </Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default Compose;
