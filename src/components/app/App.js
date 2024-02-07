import "./App.scss";

import { Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import Header from "../header/Header";

import CoffeeHouse from "../pages/coffeeHouse/CoffeeHouse";
import OurCoffe from "../pages/our-coffee/OurCofee";
import Pleasure from "../pages/pleasure/pleasure";
import More from "../pages/more/More";
import { ProductsData } from "../products-data/ProductsData";
import Footer from "../footer/Footer";
import getFormData from "../../components/sendForm/SendForm";
import PrewiewProductCard from "../pages/prewiewProductCard/PrewiewProductCard";
import ShoppingCart from "../shopping-cart/ShoppingCart.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsData: ProductsData,
      productsInCart: [],
      productPrewiew: JSON.parse(localStorage.getItem("lastProduct")) || "",
      shoppingCartState: false,
      formMessage: "",
      quantityProduct: 0,
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
    this.setState({
      productPrewiew: prewiew,
    });
    localStorage.setItem("lastProduct", JSON.stringify(prewiew));
  };

  //--------------------------find element from shopping cart and change  this.state.productsInCart
  addProductToCart = (id) => {
    if (this.state.productsInCart.length > 0) {
      let allElements = this.state.productsInCart.map((elem) => elem.id);
      if (allElements.includes(id)) {
        return;
      } else {
        this.setState(({ productsInCart }) => ({
          productsInCart: [...productsInCart, this.state.productPrewiew],
        }));
      }
    } else {
      this.setState(({ productsInCart }) => ({
        productsInCart: [...productsInCart, this.state.productPrewiew],
      }));
    }
  };

  // ---------------------------product counter increase
  productCounterIncrease = (id) => {
    this.setState(({ productsInCart }) => ({
      productsInCart: productsInCart.map((elem) => {
        // console.log(elem);
        if (elem.id === id) {
          return {
            ...elem,
            counter: ++elem.counter,
          };
        } else return elem;
      }),
    }));
  };

  // ---------------------------product counter decrease
  productCounterDecrease = (id) => {
    this.setState(({ productsInCart }) => ({
      productsInCart: productsInCart.map((elem) => {
        if (elem.id === id) {
          return {
            ...elem,
            counter: elem.counter <= 1 ? (elem.counter = 1) : --elem.counter,
          };
        } else return elem;
      }),
    }));
    console.log(this.state.productsInCart);
  };

  // ------------------------delete product element
  deleteElement = (id) => {
    this.setState(({ productsInCart }) => ({
      productsInCart: productsInCart.filter((elem) => elem.id !== id),
    }));
    this.setState(({ productsData }) => ({
      productsData: productsData.map((elem) => {
        if (elem.id === id) {
          return { ...elem, counter: 1 };
        } else return elem;
      }),
    }));
  };

  // ----------------------confirm  shopping card order and axios POST
  confirmOrder = (data, orderList) => {
    this.setState({
      formMessage: <img src="./icons/loader.svg" alt="load" />,
    });
    const order = { ...data, order: orderList };
    getFormData(this.userRegistrationUrl, order)
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

  // ---------------------state updating from local storage when page is loaded
  componentDidMount() {
    if (localStorage.productsInCart) {
      const getLocal = JSON.parse(localStorage.getItem("productsInCart"));
      this.setState({ productsInCart: getLocal });
    }
  }
  // -----------------------add finding element to localstorage
  componentDidUpdate() {
    localStorage.setItem(
      "productsInCart",
      JSON.stringify(this.state.productsInCart)
    );
  }

  render() {
    const total = this.state.productsInCart.reduce((acc, curr) => {
      return acc + curr.counter * curr.cost;
    }, 0);

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
            path="more/*"
            element={
              <More
                addProductToCart={this.addProductToCart}
                toggleShoppingCart={this.toggleShoppingCart}
                productPrewiew={productPrewiew}
                findIdProductForPrewiew={this.findIdProductForPrewiew}
              />
            }
          />
          <Route
            path="productPrewiew"
            element={
              <PrewiewProductCard
                productPrewiew={productPrewiew}
                addProductToCart={this.addProductToCart}
                toggleShoppingCart={this.toggleShoppingCart}
              />
            }
          />
          {/* ----------------------------- */}
          <Route
            path="more/productPrewiew"
            element={
              <PrewiewProductCard
                productPrewiew={productPrewiew}
                addProductToCart={this.addProductToCart}
                toggleShoppingCart={this.toggleShoppingCart}
              />
            }
          />
        </Routes>

        <Footer listItemsData={this.listItemsData} />

        <ShoppingCart
          shoppingCartState={shoppingCartState}
          toggleShoppingCart={this.toggleShoppingCart}
          productsInCart={productsInCart}
          deleteElement={this.deleteElement}
          productCounterIncrease={this.productCounterIncrease}
          productCounterDecrease={this.productCounterDecrease}
          total={total}
          confirmOrder={this.confirmOrder}
          formMessage={this.state.formMessage}
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
