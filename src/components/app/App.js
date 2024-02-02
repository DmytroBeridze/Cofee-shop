import "./App.scss";

import { Route, Routes } from "react-router-dom";
import Header from "../header/Header";
import React from "react";

import CoffeeHouse from "../pages/coffeeHouse/CoffeeHouse";
import OurCoffe from "../pages/our-coffee/OurCofee";
import Pleasure from "../pages/pleasure/pleasure";
import More from "../pages/more/More";
import { ProductsData } from "../products-data/ProductsData";
import Footer from "../footer/Footer";
import getFormData from "../../components/sendForm/SendForm";
import ShoppingCart from "../shopping-cart/ShoppingCart";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsData: ProductsData,
      productsInCart: [],
      formMessage: "",
    };

    this.listItemsData = [
      { name: "Coffee house", path: "/" },
      { name: "Our coffee", path: "ourCoffe" },
      { name: "For your pleasure", path: "pleasure" },
    ];
  }

  //------------------------ axios POST
  testSend = (data) => {
    this.setState({
      formMessage: <img src="./icons/loader.svg" alt="load" />,
    });
    getFormData(data)
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
  //--------------------------find element from shopping cart

  addProductToCart = (id) => {
    const res = this.state.productsData.find((elem) => elem.id === id);
    this.setState(({ productsInCart }) => ({
      productsInCart: [...productsInCart, res],
    }));
  };

  render() {
    const { productsData, productsInCart } = this.state;
    console.log(productsInCart);
    return (
      <div className="App">
        <Header listItemsData={this.listItemsData} />
        <Routes>
          <Route
            path="/"
            element={
              <CoffeeHouse
                productsData={productsData}
                getFormData={this.testSend}
                formMessage={this.state.formMessage}
                addProductToCart={this.addProductToCart}
              />
            }
          />
          <Route path="ourCoffe" element={<OurCoffe />} />
          <Route path="pleasure" element={<Pleasure />} />
          <Route
            path="more"
            element={<More addProductToCart={this.addProductToCart} />}
          />
          <Route path="shoppingCart" element={<ShoppingCart />} />
        </Routes>
        <Footer listItemsData={this.listItemsData} />
      </div>
    );
  }
}

export default App;
