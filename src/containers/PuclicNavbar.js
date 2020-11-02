import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/logo2.png";
import { useDispatch, useSelector } from "react-redux";
// import { authActions } from "redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ".././App.css";

const PublicNavbar = () => {
  //   const dispatch = useDispatch();
  //   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  //   const loading = useSelector((state) => state.auth.loading);

  //   const handleLogout = () => {
  //     dispatch(authActions.logout());
  //   };

  //   const authLinks = (
  //     <Nav>
  //       <Nav.Link as={Link} to="/admin/profile">
  //         <FontAwesomeIcon icon="user" size="sm" /> Admin
  //       </Nav.Link>
  //       <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
  //     </Nav>
  //   );

  const publicLinks = (
    <Nav>
      <Nav.Link as={Link} to="/register">
        Register
      </Nav.Link>
      <Nav.Link as={Link} to="/login">
        Login
      </Nav.Link>
    </Nav>
  );

  return (
    <Navbar fixed="top" expand="sm" className="test" variant="dark">
      <Navbar.Brand as={Link} to="/" className="mr-auto">
        <img src={logo} alt="logo" height="40px" className="logo" />
        <span className="logo-rightside">TEN</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        {/* {!loading && <>{isAuthenticated ? authLinks : publicLinks}</>} */}
        <>{publicLinks}</>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default PublicNavbar;
