import React, { Component } from "react";
import "../style/signin.css";
import { Link } from "react-router-dom";
import Header from "../component/header";
import { connect } from "react-redux";
import {
  doLogin,
  changeInputUser,
  doSignOut,
} from "../store/actions/userAction";
import { GetProductByCategory } from "../store/actions/productAction";
import Footer from "../component/Footer";

class Signin extends Component {
  postLogin = async () => {
    await this.props.doLogin();
    const is_login = this.props.login;
    if (is_login) {
      this.props.history.push("/");
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
        <div className="bg-signin py-5">
          <div className="d-flex justify-content-center mt-5">
            <div className="card signin-card">
              <div className="card-body">
                <p className="h4 text-center">Sign in</p>
                <hr />
                <form
                  className="text-center p-3"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="text"
                    id="button-form"
                    className="form-control mb-4"
                    name="namaPengguna"
                    placeholder="Username"
                    onChange={(e) => this.props.changeInput(e)}
                  />

                  <input
                    type="password"
                    id="defaultLoginFormPassword"
                    className="form-control mb-4"
                    name="kataKunci"
                    onChange={(e) => this.props.changeInput(e)}
                    placeholder="Password"
                  />

                  <div className="d-flex justify-content-around">
                    <div></div>
                  </div>

                  <button
                    className="btn btn-info btn-block my-4"
                    id="button"
                    onClick={() => this.postLogin()}
                    type="submit"
                  >
                    Sign in
                  </button>

                  <p>
                    Tidak ada akun?
                    <Link to="/signup" href="">
                      Daftar
                    </Link>
                  </p>
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
    login: state.user.is_login,
    category: state.product.listCategory,
  };
};

const mapDispatchToProps = {
  changeInput: (e) => changeInputUser(e),
  doLogin: doLogin,
  doSignOut,
  GetProductByCategory,
};
export default connect(mapStateToProps, mapDispatchToProps)(Signin);
