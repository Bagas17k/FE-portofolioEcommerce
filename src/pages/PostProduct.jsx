import React, { Component } from "react";
import Header from "../component/header";
import Footer from "../component/Footer";
import { connect } from "react-redux";
import { doSignOut } from "../store/actions/userAction";
import {
  changeInputProduct,
  PostInputProduct,
  changeProductType,
  GetProductByCategory,
} from "../store/actions/productAction";

class PostProduct extends Component {
  postInProduct = async (e) => {
    e.preventDefault();
    await this.props.PostInputProduct();
    const login = this.props.is_login;
    if (!login) {
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
        <div className="container">
          <div className="row">
            <div className="col-md-5 my-3">
              <img
                src={require("../images/formprofile.png")}
                alt="formprofile"
              />
            </div>
            <div>
              <div className="container ml-4 my-5">
                <div className="my-3">
                  <h1>Form Product</h1>
                </div>
                <form onSubmit={this.postInProduct}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      name="name"
                      placeholder="Name"
                      onChange={(e) => this.props.changeInput(e)}
                    />
                  </div>
                  <form>
                    <div className="form-group">
                      <label for="exampleFormControlFile1">Upload Images</label>
                      <input
                        type="file"
                        class="form-control-file"
                        id="exampleFormControlFile1"
                        name="image_url"
                        onChange={(e) => this.props.changeInputProduct(e)}
                      />
                    </div>
                  </form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Description"
                      onChange={(e) => this.props.changeInput(e)}
                      name="description"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Price"
                      onChange={(e) => this.props.changeInput(e)}
                      name="price"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Color"
                      onChange={(e) => this.props.changeInput(e)}
                      name="color"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Weight"
                      onChange={(e) => this.props.changeInput(e)}
                      name="weight"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Size"
                      onChange={(e) => this.props.changeInput(e)}
                      name="size"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Stock"
                      onChange={(e) => this.props.changeInput(e)}
                      name="stock"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Discount"
                      onChange={(e) => this.props.changeInput(e)}
                      name="discount"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Category"
                      onChange={(e) => this.props.changeInput(e)}
                      name="product_type_id"
                    />
                  </div>

                  <button className="btn btn-primary">Enter</button>
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
    login: state.user.is_login,
    category: state.product.listCategory,
  };
};

const mapDispatchToProps = {
  doSignOut,
  changeInputProduct: (e) => changeInputProduct(e),
  changeInput: (e) => changeProductType(e),
  PostInputProduct,
  GetProductByCategory,
};
export default connect(mapStateToProps, mapDispatchToProps)(PostProduct);
