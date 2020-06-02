import React, { Component } from "react";
import Header from "../component/header";
import {
  doSignUp,
  changeInputUser,
  changeUserType,
} from "../store/actions/userAction";
import { GetProductByCategory } from "../store/actions/productAction";
import { connect } from "react-redux";
import "../style/signup.css";
import Footer from "../component/Footer";

class SignUp extends Component {
  postSignUp = async () => {
    await this.props.doSignUp();
    const is_login = this.props.login;
    if (!is_login) {
      this.props.history.push("/signin");
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
        <div className="bg-signup py-5">
          <div className="d-flex justify-content-center mt-5">
            <div className="card signup-card">
              <div className="card-body">
                <p className="h4 text-center">Sign up</p>
                <hr />
                <form
                  className="text-center p-5"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="form-row mb-4">
                    <div className="col">
                      <input
                        type="text"
                        id="defaultRegisterFormFirstName"
                        className="form-control"
                        onChange={(e) => this.props.changeInput(e)}
                        name="namaPengguna"
                        placeholder="Username"
                      />
                    </div>
                  </div>

                  <input
                    type="password"
                    id="defaultRegisterFormPassword"
                    className="form-control mb-3"
                    name="kataKunci"
                    onChange={(e) => this.props.changeInput(e)}
                    placeholder="Password"
                    aria-describedby="defaultRegisterFormPasswordHelpBlock"
                  />

                  <select
                    className="custom-select my-1 mr-sm-2"
                    id="inlineFormCustomSelectPref"
                    onChange={(e) => this.props.changeUserType(e)}
                  >
                    <option selected>Start as...</option>
                    <option value="buyer">Customer</option>
                    <option value="merchant">Merchant</option>
                  </select>

                  <button
                    className="btn btn-info my-4 btn-block"
                    onClick={() => this.postSignUp()}
                    type="submit"
                  >
                    Sign up
                  </button>

                  <hr />
                </form>
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
    namaPengguna: state.user.namaPengguna,
    kataKunci: state.user.kataKunci,
    status: state.user.state,
    login: state.user.is_login,
    category: state.product.listCategory,
  };
};

const mapDispatchToProps = {
  changeInput: (e) => changeInputUser(e),
  doSignUp: doSignUp,
  GetProductByCategory,
  changeUserType: (e) => changeUserType(e),
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
