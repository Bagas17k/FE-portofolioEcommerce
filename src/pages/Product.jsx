import React, { Component } from "react";
import Header from "../component/header";
import Footer from "../component/Footer";
import ProductComp from "../component/ProductComp";
import { doSignOut } from "../store/actions/userAction";
import { connect } from "react-redux";
import {
  PostCart,
  getProductId,
  GetProductByCategory,
  getCategory,
} from "../store/actions/productAction";

class Product extends Component {
  componentDidMount() {
    this.props.getCategory();
    this.props.GetProductByCategory(this.props.match.params.id);
  }
  handleRequestProductId = async (id) => {
    await this.props.history.replace("/product/" + id);
    this.props.getProductId(id);
  };
  render() {
    return (
      <React.Fragment>
        <Header
          doSignOut={doSignOut}
          category={this.props.category}
          GetProductByCategory={this.props.GetProductByCategory}
          {...this.props}
        />
        <div className="container">
          <div className="row">
            {this.props.product.map((el, index) => {
              return (
                <div className="col-4 my-3">
                  <ProductComp
                    name={el.name}
                    price={el.price}
                    color={el.color}
                    desc={el.description}
                    createdAt={el.createdAt}
                    index={index}
                    size={el.size}
                    img={el.image_url}
                    category={el.product_type}
                    id={el.id}
                    PostCart={this.props.PostCart}
                    GetProductByCategory={this.props.GetProductByCategory}
                    getHandle={(id) => this.handleRequestProductId(id)}
                    {...this.props}
                  />
                </div>
              );
            })}
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
    category: state.product.listCategory,
  };
};

const mapDispatchToProps = {
  doSignOut,
  PostCart,
  getProductId,
  GetProductByCategory,
  getCategory,
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
