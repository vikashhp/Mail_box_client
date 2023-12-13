import React from "react";
import "./EmailList.css";
import { Fragment } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import { useDispatch } from "react-redux";
import { composeActions } from "../Store/ComposeVisible";
import { useSelector } from "react-redux";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../WelcomePage/firebaseCode";


const EmailList = (props) => {
  // const [id,setEvent]=useState([])
  // useEffect(async () => {
  //   const querySnapshot = await getDocs(collection(db, "emails"));
  //   querySnapshot.forEach((doc) => {
  //     // console.log(`${doc.id} => ${doc.data()}`);
  //     setEvent(doc.id);
  //     // console.log(doc.id)
  //   });
  // }, []);

  const history = useHistory();
  const dispatch = useDispatch();
  const showDot = useSelector((state) => state.isVisible.showDotImage);

  const messageDetailHandler = () => {
    history.push("/mail_detail");
    dispatch(composeActions.dotimageVisible());
    dispatch(
      composeActions.IsSelectedMail({
        email: props.email,
        message: props.message,
        subject: props.subject,
      })
    );
  };

  const deleteDataHandler = (id) => {
    deleteDoc(doc(db, "emails", id))
      .then(() => {
        alert("Deleted SuccessFully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(props.id);

  return (
    <Fragment>
      <ListGroup>
        <Button variant="light" onClick={messageDetailHandler}>
          <ListGroup.Item>
            {showDot && <img className="dotimage" src={props.src} />}

            <h5>Email - {props.email}</h5>

            <p>Message - {props.message}</p>

            <h4>Subject - {props.subject}</h4>
          </ListGroup.Item>
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            deleteDataHandler(props.id);
          }}
        >
          Delete
        </Button>
      </ListGroup>
    </Fragment>
  );
};

export default EmailList;
