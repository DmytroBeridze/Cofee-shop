import { Route, Routes, json } from "react-router-dom";
import Header from "../header/Header";
import React from "react";

import CoffeeHouse from "../pages/coffeeHouse/CoffeeHouse";
import OurCoffe from "../pages/our-coffee/OurCofee";
import Pleasure from "../pages/pleasure/pleasure";
import More from "../pages/more/More";
import { ProductsData } from "../products-data/ProductsData";
import "./App.scss";
import Footer from "../footer/Footer";
import getFormData from "../sendForm/SendForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsData: ProductsData,
      formMessage: "",
    };

    this.listItemsData = [
      { name: "Coffee house", path: "/" },
      { name: "Our coffee", path: "ourCoffe" },
      { name: "For your pleasure", path: "pleasure" },
    ];
  }

  getFormData = async (userName, userMail, userPhone) => {
    const userData = {
      userName,
      userMail,
      userPhone,
    };
    this.setState({ formMessage: "Sending..." });
    return fetch(
      "https://test-key-d6afb-default-rtdb.firebaseio.com/test.json",
      {
        method: "POST",
        body: JSON.stringify(userData),
        headers: { "Content-type": "application/json" },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else throw new Error("New Error");
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

  render() {
    // getFormData();
    const { productsData } = this.state;
    return (
      <div className="App">
        <Header listItemsData={this.listItemsData} />
        <Routes>
          <Route
            path="/"
            element={
              <CoffeeHouse
                productsData={productsData}
                getFormData={this.getFormData}
                // getFormData={getFormData}
                formMessage={this.state.formMessage}
              />
            }
          />
          <Route path="ourCoffe" element={<OurCoffe />} />
          <Route path="pleasure" element={<Pleasure />} />
          <Route path="more" element={<More />} />
        </Routes>
        <Footer listItemsData={this.listItemsData} />
      </div>
    );
  }
}

export default App;
