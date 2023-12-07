import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import React from "react";
import { useRef } from "react";
import { db } from "./firebaseCode";
import {collection,addDoc} from '@firebase/firestore';


const Welcome = () => {
    const inputEmail=useRef();
    const inputSubject=useRef();
    const inputMessage=useRef();
   const database = collection(db,'contacts')

  const mailSentHandler = async (e) => {
    e.preventDefault();
    const enteredEmail=inputEmail.current.value;
    const enteredSubject=inputSubject.current.value;
    const enteredMessage=inputMessage.current.value;

    const data={
        email:enteredEmail,
        sub:enteredSubject,
        message:enteredMessage
    }
     try{
        addDoc(database,data)
        alert('Message Sent Successfully')
     }catch(err){
        console.log(err)
     }


  };

  return (
    <div>
      <h2>Welcome To mail box</h2>
      <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Col xs={4}>
            <Card
              className="shadow  m-1"
              style={{ backgroundColor: "skyblue" }}
            >
              <Card.Header>
                <h2>Send Mail</h2>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={mailSentHandler}>
                  <Row className="mb-3">
                    <Form.Group md="5">
                      <Form.Label>
                        <h3>To</h3>
                      </Form.Label>
                      <Form.Control
                        required
                        type="email"
                        placeholder="Enter Receiver's Email"
                        ref={inputEmail}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group md="5">
                      <Form.Label>
                        <h3>Subject</h3>
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter The Subject"
                        ref={inputSubject}
                      />
                    </Form.Group>
                  </Row>
                  <Form.Label>
                    <h3>Message</h3>
                  </Form.Label>

                  <FloatingLabel
                    controlId="floatingTextarea2"
                    label="Type Your Message"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                      ref={inputMessage}
                    />
                  </FloatingLabel>
                  <Button style={{marginTop:'10px'}} type="submit">Send</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Welcome;
