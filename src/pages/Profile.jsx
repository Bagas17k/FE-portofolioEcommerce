import React, { Component } from "react";
import Footer from "../component/Footer";
import Header from "../component/header";
import { getDataUser } from "../store/actions/userAction";
import { connect } from "react-redux";
import { doSignOut } from "../store/actions/userAction";
import "../style/profile.css";

class Profile extends Component {
  componentDidMount = async () => {
    await this.props.getDataUser();
  };
  render() {
    return (
      <React.Fragment>
        <Header doSignOut={this.props.doSignOut} {...this.props} />
        <div className="profile">
          <div className="container">
            <div className="d-flex justify-content-center py-4">
              <div className="card" style={{ width: "20rem" }}>
                <img
                  src={require("../images/profileimg.png")}
                  className="card-img-top"
                  alt="profileimage"
                />
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Name: {this.props.name}</li>
                  <li className="list-group-item">Email: {this.props.email}</li>
                  <li className="list-group-item">Phone: {this.props.phone}</li>
                  <li className="list-group-item">City: {this.props.city}</li>
                  <li className="list-group-item">
                    Province: {this.props.province}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    dataUser: state.user,
    login: state.user.is_login,
    name: state.user.name,
    email: state.user.email,
    phone: state.user.phone,
    city: state.user.city,
    province: state.user.province,
  };
};

const mapDispatchToProps = {
  doSignOut,
  getDataUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
