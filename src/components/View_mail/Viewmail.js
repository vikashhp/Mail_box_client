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
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { useHistory } from "react-router-dom";

const Viewmail = (props) => {

  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState([]);
  const composeVisible = useSelector((state) => state.isVisible.showCompose);
  const showDot = useSelector((state) => state.isVisible.showDotImage);
 
  useEffect(() => {
    const collRef = collection(db, "emails");
    const unsubs = onSnapshot(collRef, (querySnapshot) => {
      const data = querySnapshot.docs.map((query) => {
        return { ...query.data(), id: query.id };
      });
      setEmail(data);
    });
    return unsubs;
  }, []);


  const src =
    "https://tse2.mm.bing.net/th?id=OIP.Z07pJmyXhkAXwjUvjS2vhwHaHa&pid=Api&P=0&h=180";

  const ComposeHandler = () => {
    dispatch(composeActions.composeIsVisible());
  };

  const sentmailbox = () => {
    if(email.length === 0){
      history.push('/no_mail_found')
    }else{
   history.push("/mail_detail");
    }
 
  };



  return (
    <Fragment>
      <div className="top">
        <h2>Yahoo Mail</h2>
        <div className="input_div">
          <input className="input" placeholder="search..." />
        </div>
      </div>

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
            <SidebarOptions title="Unread" number='1'/>
          </div>
          <div>
            <Button variant="light" onClick={sentmailbox}>
              {" "}
              <SidebarOptions title="Sent" number={email.length} />
            </Button>
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
            console.log(data);
            return (
              <EmailList
                key={data.id}
                email={data.email}
                message={data.message}
                subject={data.subject}
                src={src}
                id={data.id}
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
