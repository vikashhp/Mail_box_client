import { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useRef } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [validated, setValidated] = useState(false);
  const inputEmail = useRef();
  const inputPassword = useRef();
  const inputCPassword = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    const enteredEmail = inputEmail.current.value;
    const enteredPassword = inputPassword.current.value;
    const enteredcPassword = inputCPassword.current.value;
    if (enteredPassword !== enteredcPassword) {
      alert("Password must be Equal");
    }
    try {
      const res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDZN-AMGhwfsEz-IQkYEa4WAYB4gEETm5Q",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            cpassword: enteredcPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const response = await res.json();

      console.log(response);
      console.log("user has successFully Logged in");
      alert("Successfuly Signup! Login To Continue");
     
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Fragment>
      <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Col xs={4}>
            <Card className="shadow  m-1 ">
              <Card.Header
                className="p-2 "
                style={{ backgroundColor: "skyblue" }}
              >
                <h2>Signup</h2>
              </Card.Header>
              <Card.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group md="5" controlId="validationCustom01">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        placeholder="Enter Your Email"
                        ref={inputEmail}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group md="5" controlId="validationCustom01">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        required
                        type="password"
                        placeholder="Enter Your Password"
                        ref={inputPassword}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group md="5" controlId="validationCustom01">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        required
                        type="password"
                        placeholder="Enter Your Password"
                        ref={inputCPassword}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </Row>

                  <Button type="submit">Submit</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="justify-content-md-center">
          <Col xs={4}>
            <Card>
              <Card.Header style={{ backgroundColor: " rgb(151, 118, 251)" }}>
                <h3>
                  <span>Have an account ?</span>
                
                      <span>Login</span>
                 
                </h3>
              </Card.Header>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default Signup;
