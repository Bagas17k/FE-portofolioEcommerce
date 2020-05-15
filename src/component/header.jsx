import React from "react";
import "../style/header.css";
import { Link } from "react-router-dom";

const Header = (props, postSignout) => {
  const login = localStorage.getItem("is_login");
  postSignout = () => {
    props.doSignOut();
    if (!login) {
      props.history.push("/");
    }
  };

  return (
    <div className="wrapper">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link to="/" className="navbar-brand" href="#">
          <h3>El-Hijab</h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ml-5">
              <form className="form-inline">
                <div className="md-form my-0">
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </div>
                <button type="button" class="btn btn-outline-dark">
                  Search
                </button>
              </form>
            </li>
          </ul>
          {login ? (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  to="/signin"
                  onClick={() => postSignout()}
                  className="nav-link"
                  href="#"
                >
                  Sign Out
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link" href="#">
                  Profil
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" tabindex="-1" aria-disabled="true">
                  <i className="fas fa-shopping-bag"></i>
                </a>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/signin" className="nav-link" href="#">
                  Sign In
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link" href="#">
                  Register
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link" tabindex="-1" aria-disabled="true">
                  <i className="fas fa-shopping-bag"></i>
                </a>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};
export default Header;
