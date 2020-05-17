import React, { Component } from "react";
import Header from "../component/header";
import Footer from "../component/Footer";
import ProductComp from "../component/ProductComp";
import { doSignOut } from "../store/actions/userAction";
import { connect } from "react-redux";
import { GetProduct } from "../store/actions/productAction";

class Product extends Component {
  componentDidMount() {
    this.props.GetProduct();
  }
  render() {
    return (
      <React.Fragment>
        <Header doSignOut={doSignOut} {...this.props} />
        <div className="container">
          <div className="row">
            {this.props.product.map((el, index) => {
              return (
                <ProductComp
                  name={el.name}
                  price={el.price}
                  color={el.color}
                  desc={el.description}
                  createdAt={el.createdAt}
                  index={index}
                  img={el.image_url}
                  category={el.product_type}
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
    dataUser: state.user,
    login: state.user.is_login,
    product: state.product.listProduct,
  };
};

const mapDispatchToProps = {
  doSignOut,
  GetProduct,
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
