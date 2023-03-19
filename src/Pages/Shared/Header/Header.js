import React, { useContext } from "react";
import { FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log("inside Header", user);
  const handleLOgout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <nav className="navbar navbar-expand-lg mb-4 py-3">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          FyreStorm News
        </NavLink>
        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="">
                Link
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to=""
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="">
                    Action
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="">
                    Another action
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink className="dropdown-item" to="">
                    Something else here
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
          <div className="d-flex">
            {user && user.uid ? (
              <>
                {user.photoURL ? (
                  <NavLink to={"/profile"}>
                    <img
                      style={{ width: "40px", height: "40px" }}
                      className="rounded-circle me-2 my-auto"
                      src={user.photoURL}
                      alt=""
                    />
                  </NavLink>
                ) : (
                  <NavLink to={"/profile"}>
                    <FaUserAlt
                      style={{ width: "40px" }}
                      className="rounded-circle me-2 my-auto"
                    ></FaUserAlt>
                  </NavLink>
                )}
                <span className="my-auto me-2">{user?.displayName}</span>
                <button
                  className="btn btn-outline-danger"
                  onClick={handleLOgout}
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <NavLink to={"/login"}>
                  <button className="btn btn-outline-primary me-2">
                    Log In
                  </button>
                </NavLink>
                <NavLink to={"/register"}>
                  <button className="btn btn-outline-primary">Register</button>
                </NavLink>
              </>
            )}
          </div>
          <div className="d-lg-none">
            <LeftSideNav></LeftSideNav>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
