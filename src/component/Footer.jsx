import React from "react";
import "../style/footer.css";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Footer = (props, postSignout) => {
  const login = localStorage.getItem("is_login");
  postSignout = () => {
    props.doSignOut();
    if (!login) {
      props.history.push("/");
    }
  };
  return (
    <div>
      <div className="text-white bg-dark pb-3">
        <div className="row">
          <div className="col-4 pt-3 d-flex align-items-center">
            <div className="ml-3">
              <h3 className="logo">El-Hijab</h3>
              {login ? (
                <Link to="/signin" onClick={() => postSignout()}>
                  <span className="text-white">Signout</span>
                </Link>
              ) : (
                <div>
                  <Link to="/signup">
                    <span className="text-white">Register</span>
                  </Link>
                  <br />
                  <Link to="/signin">
                    <span className="text-white">Signin</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center pt-3">
            <div>
              <h3>Need help?</h3>
              <i className="fas fa-envelope">
                &nbsp;<small>support@elhijab.co.id</small>
              </i>
              <br />
              <i className="fas fa-map-marker-alt">
                &nbsp;<small>Jalan Terusan Patimuan 13, Cilacap</small>
              </i>
              <br />
              <button type="button" className="btn btn-outline-light">
                Hubungi kami
              </button>
            </div>
          </div>

          <div className="col-4 d-flex justify-content-center pt-3">
            <div>
              <h3>Keep in touch</h3>
              <i className="fab fa-facebook">&nbsp;Facebook</i>
              <br />
              <i className="fab fa-instagram-square">&nbsp;Instagram</i>
              <br />
              <i className="fab fa-twitter-square">&nbsp;Twitter</i>
              <br />
              <i className="fab fa-youtube">&nbsp;Youtube</i>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light text-black">
        <div className="text-center">
          <h5>Copyright 2020 El-Hijab</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
