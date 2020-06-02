import React, { Component } from "react";
import Header from "../component/header";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import { doSignOut } from "../store/actions/userAction";
import { connect } from "react-redux";
import {
  getProductId,
  GetProductByCategory,
  PostCart,
} from "../store/actions/productAction";

class ProductDetail extends Component {
  render() {
    return (
      <React.Fragment>
        <Header
          doSignOut={doSignOut}
          {...this.props}
          category={this.props.category}
          GetProductByCategory={this.props.GetProductByCategory}
        />
        <div className="container d-flex justify-content-center">
          <div className="row">
            <div className="">
              <div className="card my-5" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={this.props.productId.image_url}
                  alt="Card cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{this.props.productId.name}</h5>
                  <p className="card-text badge badge-danger">
                    Harga :{this.props.productId.price} IDR
                  </p>
                  <br />
                  <Link
                    href="#"
                    className="btn btn-primary"
                    onClick={() => this.props.PostCart(this.props.productId.id)}
                  >
                    Add Cart
                  </Link>
                </div>
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
    product: state.product.listProduct,
    productId: state.product.productId,
    category: state.product.listCategory,
  };
};

const mapDispatchToProps = {
  doSignOut,
  getProductId,
  PostCart,
  GetProductByCategory,
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
