import "./App.scss";

import { Route, Routes } from "react-router-dom";
import Header from "../header/Header";
import React, { useEffect } from "react";

import CoffeeHouse from "../pages/coffeeHouse/CoffeeHouse";
import OurCoffe from "../pages/our-coffee/OurCofee";
import Pleasure from "../pages/pleasure/pleasure";
import More from "../pages/more/More";
import { ProductsData } from "../products-data/ProductsData";
import Footer from "../footer/Footer";
import getFormData from "../../components/sendForm/SendForm";
import ShoppingCart from "../shopping-cart/ShoppingCart";
import PrewiewProductCard from "../pages/prewiewProductCard/PrewiewProductCard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsData: ProductsData,
      productsInCart: [],
      productPrewiew: "",
      shoppingCartState: false,
      // productPrewiewState: false,
      formMessage: "",
    };

    this.listItemsData = [
      { name: "Coffee house", path: "/" },
      { name: "Our coffee", path: "ourCoffe" },
      { name: "For your pleasure", path: "pleasure" },
    ];
    this.userRegistrationUrl =
      "https://test-key-d6afb-default-rtdb.firebaseio.com/test.json";
  }

  //------------------------ axios POST
  testSend = (data) => {
    this.setState({
      formMessage: <img src="./icons/loader.svg" alt="load" />,
    });
    getFormData(this.userRegistrationUrl, data)
      .then((response) => {
        if (response.status > 399) {
          throw new Error("New Error");
        }
      })
      .then(() => {
        this.setState({ formMessage: "We will contact you soon" });
      })
      .catch(() => {
        this.setState({ formMessage: "Something went wrong!" });
      })
      .finally(() => {
        setTimeout(() => {
          this.setState({ formMessage: "" });
        }, 3000);
      });
  };
  // --------------------------toggle shopping cart
  toggleShoppingCart = () => {
    this.setState(({ shoppingCartState }) => ({
      shoppingCartState: !shoppingCartState,
    }));
  };

  // --------------------------findIdProductForPrewiew and toggle product prewiew

  findIdProductForPrewiew = (id) => {
    const prewiew = this.state.productsData.find((elem) => elem.id === id);
    this.setState({ productPrewiew: prewiew });
  };

  //--------------------------find element from shopping cart and change  this.state.productsInCart
  addProductToCart = () => {
    this.setState(({ productsInCart }) => ({
      productsInCart: [...productsInCart, this.state.productPrewiew],
    }));
  };
  // addProductToCart = (id) => {
  //   const res = this.state.productsData.find((elem) => elem.id === id);
  //   this.setState(({ productsInCart }) => ({
  //     productsInCart: [...productsInCart, res],
  //   }));
  // };
  // -----------------------add finding element to localstorage
  componentDidMount() {
    if (localStorage.productsInCart) {
      const getLocal = JSON.parse(localStorage.getItem("productsInCart"));
      this.setState({ productsInCart: getLocal });
    }
  }
  // ------------------------state updating from local storage when page is loaded
  componentDidUpdate() {
    localStorage.setItem(
      "productsInCart",
      JSON.stringify(this.state.productsInCart)
    );
  }

  render() {
    const { productsData, shoppingCartState, productPrewiew, productsInCart } =
      this.state;

    return (
      <div className="App">
        <Header
          listItemsData={this.listItemsData}
          toggleShoppingCart={this.toggleShoppingCart}
        />
        <Routes>
          <Route
            path="/"
            element={
              <CoffeeHouse
                productsData={productsData}
                getFormData={this.testSend}
                formMessage={this.state.formMessage}
                findIdProductForPrewiew={this.findIdProductForPrewiew}
                // addProductToCart={this.addProductToCart}
              />
            }
          />
          <Route path="ourCoffe" element={<OurCoffe />} />
          <Route path="pleasure" element={<Pleasure />} />
          <Route
            path="more"
            // element={<More addProductToCart={this.addProductToCart} />}
          />
          <Route
            path="productPrewiew"
            element={
              <PrewiewProductCard
                productPrewiew={productPrewiew}
                addProductToCart={this.addProductToCart}
              />
            }
          />
        </Routes>
        <Footer listItemsData={this.listItemsData} />
        {/* ------------cart---- */}
        <ShoppingCart
          shoppingCartState={shoppingCartState}
          toggleShoppingCart={this.toggleShoppingCart}
          productsInCart={productsInCart}
        />
        {/* <PrewiewProductCard
          productPrewiew={productPrewiew}
          productPrewiewState={productPrewiewState}
        /> */}
      </div>
    );
  }
}

export default App;
