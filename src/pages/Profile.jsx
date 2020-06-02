import React, { Component } from "react";
import Footer from "../component/Footer";
import Header from "../component/header";
import { getDataUser } from "../store/actions/userAction";
import { connect } from "react-redux";
import { doSignOut } from "../store/actions/userAction";
import { GetProductByCategory } from "../store/actions/productAction";
import "../style/profile.css";
import { Link } from "react-router-dom";

class Profile extends Component {
  componentDidMount = async () => {
    await this.props.getDataUser();
  };
  render() {
    return (
      <React.Fragment>
        <Header
          doSignOut={this.props.doSignOut}
          {...this.props}
          category={this.props.category}
          GetProductByCategory={this.props.GetProductByCategory}
        />

        <div className="profile">
          <div className="container">
            <div className="row">
              <div className="col-md-4 pt-3">
                <Link to="/profile/form">
                  <button type="button" class="btn btn-secondary">
                    Add your Profile
                  </button>
                </Link>
              </div>
            </div>
            <div className="d-flex justify-content-center py-4">
              <div className="card" style={{ width: "20rem" }}>
                <img
                  src={require("../images/profileimg.png")}
                  className="card-img-top"
                  alt="profileimage"
                />
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Name: {this.props.name}</li>
                  <li className="list-group-item">
                    Status: {this.props.status}
                  </li>
                  <li className="list-group-item">Email: {this.props.email}</li>
                  <li className="list-group-item">Phone: {this.props.phone}</li>
                  <li className="list-group-item">City: {this.props.city}</li>
                  <li className="list-group-item">
                    Province: {this.props.province}
                  </li>
                  {this.props.status === "merchant" ? (
                    <Link to="/product/form">
                      <div className="d-flex  justify-content-center">
                        <button type="button" class="btn btn-info">
                          Add your Product
                        </button>
                      </div>
                    </Link>
                  ) : (
                    <li className="list-group-item">Welcome to the store</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer doSignOut={this.doSignOut} {...this.props} />
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
    status: state.user.status,
    category: state.product.listCategory,
  };
};

const mapDispatchToProps = {
  doSignOut,
  getDataUser,
  GetProductByCategory,
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
