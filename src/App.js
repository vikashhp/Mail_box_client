import "./App.css";
import Signup from "./components/SignupPage/Signup";
import Login from "./components/Login/Login";
import { Route } from "react-router-dom";
import Nvabars from './components/Navbar/Navbar';
import WelcomePage from "./components/WelcomePage/Welcome";

function App() {
  return (
    <div className="App">
      <main>
        <Nvabars/>
      </main>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path='/welcome'>
       <WelcomePage/>
      </Route>
    </div>
  );
}

export default App;
