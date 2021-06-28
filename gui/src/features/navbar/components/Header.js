import React, { memo } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthActions } from "features/auth";
import { UsersListActions } from "features/users";
import { useDispatch, useSelector } from "react-redux";
import { AuthSelectors } from "features/auth";
import { Username } from "./username";
import { useInputState } from "core/forms";
import history from "features/main/history";
import { MainRoutes } from "features/main/routes";

const HeaderBase = () => {
  const [searchName, setSearchName] = useInputState("");

  const username = useSelector(AuthSelectors.username);
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(AuthActions.handleLogout());

  const handleSearch = () => {
    dispatch(UsersListActions.searchUsers(searchName));
    setSearchName("");
    history.push("/users");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Tvvitter</Navbar.Brand>
        <Nav className="mr-auto">
          <Link
            className="navbar-dark navbar-nav nav-link navbar-expand"
            to={MainRoutes.HOME}
          >
            Home
          </Link>
          <Link
            className="navbar-dark navbar-nav nav-link navbar-expand"
            to="/menu"
          >
            Messages
          </Link>
          <Nav.Link>New Post</Nav.Link>
        </Nav>
        <Form inline onSubmit={handleSubmit}>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={searchName}
            onChange={setSearchName}
          />
          <Button variant="outline-info" onClick={handleSearch}>
            Search
          </Button>
        </Form>
        <Username>{username}</Username>
        <div>
          <p>
            <button className="btn btn-info btn-lg" onClick={handleLogout}>
              <span className="glyphicon glyphicon-log-out"></span> Log out
            </button>
          </p>{" "}
        </div>
      </Navbar>
    </>
  );
};

export const Header = memo(HeaderBase);

export default Header;
