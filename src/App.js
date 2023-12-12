import "./App.css";
import Signup from "./components/SignupPage/Signup";
import Login from "./components/Login/Login";
import { Route, Switch } from "react-router-dom";
import Nvabars from "./components/Navbar/Navbar";

import Viewmail from "./components/View_mail/Viewmail";
import { useSelector } from "react-redux";
import { useState } from "react";
import { db } from "../src/components/WelcomePage/firebaseCode";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import MailDetail from "./components/MailDetail/MailDetail";

function App() {
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

  const isLogin = useSelector((state) => state.isVisible.isLogin);
  return (
    <div className="App">
      <main>
        <Nvabars />
      </main>
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/view_mail">
          <Viewmail data={email} />
        </Route>
        <Route path="/mail_detail">
          <MailDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
