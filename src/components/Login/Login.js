import { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useRef } from "react";

import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Login = () => {
  const inputEmail = useRef();
  const inputPassword = useRef();
 const history = useHistory();
  const loginHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = inputEmail.current.value;
    const enteredPassword = inputPassword.current.value;

    try {
      const res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDZN-AMGhwfsEz-IQkYEa4WAYB4gEETm5Q",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.ok) {
        await res.json();
        alert('Successfully Login')
        history.replace('/view_mail')
      } else {
        return res.json().then((data) => {
          let errmessage = "Authentication Failed";
          if (data && data.error && data.error.message) {
            errmessage = data.error.message;
          }
          alert(errmessage);
        });
      }
    } catch (err) {
      console.log(err);
    //   alert(err.message);
    }
  };
  return (
    <Fragment>
      <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Col xs={4}>
            <Card
              className="shadow  m-1"
              style={{ backgroundColor: "skyblue" }}
            >
              <Card.Header>
                <h2>Login</h2>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={loginHandler}>
                  <Row className="mb-3">
                    <Form.Group md="5">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        placeholder="Enter Your Email"
                        ref={inputEmail}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group md="5">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        required
                        type="password"
                        placeholder="Enter Your Password"
                        ref={inputPassword}
                      />
                    </Form.Group>
                  </Row>
                  <Button type="submit">Login</Button>
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
                  <span>Don't Have an account ?</span>
                  <NavLink to="/signup">
                    <span>Signup</span>
                  </NavLink>
                </h3>
              </Card.Header>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Login;
