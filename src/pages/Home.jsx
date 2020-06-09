import React, { Component } from "react";
import Header from "../component/header";
import Footer from "../component/Footer";
import Carousel from "../component/Carousel";
import { doSignOut } from "../store/actions/userAction";
import {
  getCategory,
  GetProductByCategory,
  GetProduct,
  getProductId,
} from "../store/actions/productAction";
import { connect } from "react-redux";
import ProductComp from "../component/ProductComp";
class Home extends Component {
  componentDidMount() {
    this.props.getCategory();
    this.props.GetProduct();
  }
  handleRequestProductId = async (id) => {
    await this.props.history.replace("/product/" + id);
    this.props.getProductId(id);
  };
  render() {
    return (
      <React.Fragment>
        <Header
          doSignOut={this.doSignOut}
          category={this.props.category}
          GetProductByCategory={this.props.GetProductByCategory}
          {...this.props}
        />
        <div className="text-center bg-dark text-white">
          <p>
            <p>Siap melayani pengiriman seluruh wilayah Indonesia</p>
          </p>
        </div>
        <div>
          <Carousel />
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center">
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
        <div className="container text-center mb-4">
          <hr />
          <h1>
            <strong>Tentang Kami</strong>
          </h1>

          <p>
            EL-Hijab merupakan toko hijab pertama di Cilacap, yang mampunyai
            produk-produk hijab terbaru dan terjamin kualitasnya dengan harga
            terjangkau.
            <br /> El-Hijab meyakini bahwa setiap wanita mampu memancarkan
            kecantikannya. Kami siap melayani pelanggan dengan produk-produk
            spesial yang kami miliki. Pancarkan pesonamu dengan El-Hijab.
          </p>
        </div>

        <Footer doSignOut={this.doSignOut} {...this.props} />
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
    product: state.product.listProduct,
  };
};

const mapDispatchToProps = {
  doSignOut,
  getCategory,
  GetProductByCategory,
  GetProduct,
  getProductId,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
