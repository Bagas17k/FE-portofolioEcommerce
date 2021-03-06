import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/index";
import Home from "../pages/Home";
import SignIn from "../pages/Signin";
import Cart from "../pages/Cart";
import SignUp from "../pages/Signup";
import FormProfile from "../pages/FormProfile";
import Profile from "../pages/Profile";
import Product from "../pages/Product";
import PostProduct from "../pages/PostProduct";
import ProductDetail from "../pages/ProductDetail";

const MainRoute = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/member/cart" component={Cart} />
          <Route exact path="/profile/form" component={FormProfile} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/product/form" component={PostProduct} />
          <Route exact path="/product/:id" component={ProductDetail} />
          <Route exact path="/product/category/:id" component={Product} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoute;
