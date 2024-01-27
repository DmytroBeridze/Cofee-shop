import { Route, Routes } from "react-router-dom";
import Header from "../header/Header";
import React from "react";

import CoffeeHouse from "../pages/coffeeHouse/CoffeeHouse";
import OurCoffe from "../pages/our-coffee/OurCofee";
import Pleasure from "../pages/pleasure/pleasure";
import More from "../pages/more/More";
import { ProductsData } from "../products-data/ProductsData";
import "./App.scss";
import Footer from "../footer/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsData: ProductsData,
    };
    this.listItemsData = [
      { name: "Coffee house", path: "/" },
      { name: "Our coffee", path: "ourCoffe" },
      { name: "For your pleasure", path: "pleasure" },
    ];
  }
  render() {
    const { productsData } = this.state;
    return (
      <div className="App">
        <Header listItemsData={this.listItemsData} />
        <Routes>
          <Route
            path="/"
            element={<CoffeeHouse productsData={productsData} />}
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
