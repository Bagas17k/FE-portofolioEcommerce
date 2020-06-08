import React, { Component } from "react";
import Header from "../component/header";
import Footer from "../component/Footer";
import Carousel from "../component/Carousel";
import { doSignOut } from "../store/actions/userAction";
import {
  getCategory,
  GetProductByCategory,
} from "../store/actions/productAction";
import { connect } from "react-redux";
import CategoryCard from "../component/CategoryCard";

class Home extends Component {
  componentDidMount() {
    this.props.getCategory();
  }
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
            {this.props.category.map((el, index) => {
              return (
                <CategoryCard
                  category={el.name}
                  image={el.img_url}
                  id={el.id}
                  GetProductByCategory={this.props.GetProductByCategory}
                />
              );
            })}
          </div>
        </div>
        <div className="container text-center mb-4">
          <hr />
          <h1>
            <strong>About El-Hijab</strong>
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
  };
};

const mapDispatchToProps = {
  doSignOut,
  getCategory,
  GetProductByCategory,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
