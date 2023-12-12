import React from "react";
import "./EmailList.css";
import { Fragment } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import { useDispatch } from "react-redux";
// import { useState } from "react";
// import { db } from "../src/components/WelcomePage/firebaseCode";
// import { collection, getDocs } from "firebase/firestore";
// import { useEffect } from "react";
import { composeActions } from "../Store/ComposeVisible";
import { useSelector } from "react-redux";

const EmailList = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const showDot = useSelector((state) => state.isVisible.showDotImage);



  const messageDetailHandler = () => {
    history.push("/mail_detail");
    dispatch(composeActions.dotimageVisible());
    dispatch(composeActions.IsSelectedMail({
      email:props.email,
      message:props.message,
      subject:props.subject
    }))
  };
  // const [email, setEmail] = useState([]);

  // useEffect(async () => {
  //   const querySnapshot = await getDocs(collection(db, "emails"));
  //   querySnapshot.forEach((doc) => {
  //     // console.log(`${doc.id} => ${doc.data()}`);
  //     setEmail((prev) => {
  //       return [...prev, doc.data()];
  //     });
  //   });
  // }, []);
  return (
    <Fragment>
      <ListGroup>
        <Button variant="light" onClick={messageDetailHandler}>
          <ListGroup.Item>
            <span>
              {showDot && <img className="dotimage" src={props.src} />}
            </span>

            <span className="email">{props.email}</span>

            <span className="center">{props.message}</span>

            <span className="right">{props.subject}</span>
          </ListGroup.Item>
        </Button>
      </ListGroup>
    </Fragment>
  );
};

export default EmailList;
