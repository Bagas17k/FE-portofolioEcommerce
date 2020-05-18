import React, { Component } from "react";
import "../style/signin.css";
import Header from "../component/header";
import { connect } from "react-redux";
import { doLogin, doSignOut } from "../store/actions/userAction";
import {
  GetCart,
  deleteCart,
  GetProductByCategory,
} from "../store/actions/productAction";
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
        <Header
          doSignOut={this.doSignOut}
          {...this.props}
          category={this.props.category}
          GetProductByCategory={this.props.GetProductByCategory}
        />
        <div className="text-center my-4">
          <h1> Table of Cart </h1>
        </div>
        <div className="container">
          <div className="row">
            {this.props.listCart.map((el, index) => {
              return (
                <CartComp
                  product={el.product}
                  price={el.price}
                  qty={el.qty}
                  id={el.id}
                  deleteCart={this.props.deleteCart}
                  {...this.props}
                />
              );
            })}
          </div>
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
    category: state.product.listCategory,
  };
};

const mapDispatchToProps = {
  doLogin: doLogin,
  doSignOut,
  GetCart,
  deleteCart,
  GetProductByCategory,
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
