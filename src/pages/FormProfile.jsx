import React, { Component } from "react";
import Header from "../component/header";
import Footer from "../component/Footer";
import { connect } from "react-redux";
import {
  doSignOut,
  doPostProfile,
  changeInputUser,
} from "../store/actions/userAction";
import { GetProductByCategory } from "../store/actions/productAction";
import FormProfil from "../component/FormProfil";

class FormProfile extends Component {
  postProfile = async () => {
    await this.props.doPostProfile();
    const is_login = this.props.login;
    if (!is_login) {
      this.props.history.push("/profile");
    }
  };
  render() {
    return (
      <React.Fragment>
        <Header
          doSignOut={this.doSignOut}
          {...this.props}
          category={this.props.category}
          GetProductByCategory={this.props.GetProductByCategory}
        />
        <div className="container">
          <div className="row">
            <div className="col-md-5 my-3">
              <img
                src={require("../images/formprofile.png")}
                alt="formprofile"
              />
            </div>
            <div className="col-md-4">
              <FormProfil
                postProfile={this.postProfile}
                changeInput={this.props.changeInput}
                {...this.props}
              />
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
    name: state.user.name,
    email: state.user.email,
    province: state.user.province,
    city: state.user.city,
    postal_code: state.user.postal_code,
    city_type: state.user.city_type,
    street: state.user.street,
    phone: state.user.state,
    login: state.user.is_login,
    category: state.product.listCategory,
  };
};

const mapDispatchToProps = {
  doSignOut,
  doPostProfile,
  changeInput: (e) => changeInputUser(e),
  GetProductByCategory,
};
export default connect(mapStateToProps, mapDispatchToProps)(FormProfile);
