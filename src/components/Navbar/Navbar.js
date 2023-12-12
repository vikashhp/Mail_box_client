import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";



const Navbars = () => {
 const isLogin = useSelector(state => state.isVisible.isLogin);

  return (
    <Navbar expand="lg" style={{ backgroundColor: "black", color: "white" }}>
      <Container>
        <Navbar.Brand style={{ color: "white" }}>Mail-Box-Client</Navbar.Brand>
        <NavLink to="/signup">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Contact">Products</NavLink>
        <NavLink to="/Login">Login</NavLink>
       {isLogin && <NavLink to="/view_mail">View Email</NavLink>}
      </Container>
    </Navbar>
  );
};
export default Navbars;
