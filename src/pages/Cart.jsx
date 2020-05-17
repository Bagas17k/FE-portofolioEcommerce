import React, { Component } from "react";
import "../style/signin.css";
import { Link } from "react-router-dom";
import Header from "../component/header";
import { connect } from "react-redux";
import { doLogin, doSignOut } from "../store/actions/userAction";
import { GetCart } from "../store/actions/productAction";
import Footer from "../component/Footer";
import CartComp from "../component/CartComp";

class Cart extends Component {
  postLogin = async () => {
    await this.props.doLogin();
    const is_login = this.props.login;
    if (is_login) {
      this.props.history.push("/");
    }
  };
  componentDidMount() {
    this.props.GetCart();
  }
  render() {
    return (
      <React.Fragment>
        <Header doSignOut={this.doSignOut} {...this.props} />
        <div className="justify-content-center">
          {this.props.listCart.map((el, index) => {
            return (
              <div className="row">
                <CartComp product={el.product} price={el.price} qty={el.qty} />
              </div>
            );
          })}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    login: state.user.is_login,
    listCart: state.product.listCart,
  };
};

const mapDispatchToProps = {
  doLogin: doLogin,
  doSignOut,
  GetCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
