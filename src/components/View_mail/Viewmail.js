import React, { useEffect } from "react";
import "./ViewEmail.css";
import Button from "react-bootstrap/esm/Button";
import { Fragment } from "react";
import SidebarOptions from "../SidebarOptions/SidebarOptions";
import EmailList from "../EmailList/EmailList";
import Compose from "../Compose/Compose";
import { useDispatch } from "react-redux";
import { composeActions } from "../Store/ComposeVisible";
import { useSelector } from "react-redux";
import { useState } from "react";
import { db } from "../WelcomePage/firebaseCode";
import { collection, getDocs } from "firebase/firestore";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Viewmail = () => {
  const dispatch = useDispatch();
  const composeVisible = useSelector((state) => state.isVisible.showCompose);

  const [email, setEmail] = useState([]);

  useEffect(async () => {
    const querySnapshot = await getDocs(collection(db, "emails"));
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`);
      setEmail((prev) => {
        return [...prev, doc.data()];
      });
    });
  }, []);

  // console.log(email);

  
  // console.log(email.length)

  const ComposeHandler = () => {
    dispatch(composeActions.composeIsVisible());
  };
  return (
    <Fragment>
      <div className="top">
        <h2>Yahoo Mail</h2>
        <div className="input_div">
          <input className="input" placeholder="search..." />
        </div>
      </div>
      <Container>
        <Row>
          <Col>
            <h2>Email</h2>
          </Col>
          <Col>
            <h2>Message</h2>
          </Col>
          <Col>
            <h2>Subject</h2>
          </Col>
        </Row>
      </Container>

      <div className="main">
        <div className="side_body">
          <div className="sidebar">
            <Button onClick={ComposeHandler}>Compose</Button>
          </div>
          <div>
            <SidebarOptions title="inbox" number={email.length} />
          </div>
          <div>
            <SidebarOptions title="Draft" number="14" />
          </div>
          <div>
            <SidebarOptions title="Unread" number="20" />
          </div>
          <div>
            <SidebarOptions title="Sent" number="2" />
          </div>
          <div>
            <SidebarOptions title="Span" number="100" />
          </div>
          <div>
            <SidebarOptions title="Deleted Items" number="23" />
          </div>
        </div>
        <div>
          {email.map((data) => {
            return (
              <EmailList
                email={data.email}
                message={data.message}
                subject={data.subject}
              />
            );
          })}

          {composeVisible && <Compose />}
        </div>
      </div>
    </Fragment>
  );
};

export default Viewmail;
