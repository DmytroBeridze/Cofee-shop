import styles from "./Header.module.scss";
import React from "react";
import BurgerButton from "../burger-button/BurgerButton";
import ShoppingCartButton from "../shopping-cart-button/ShoppingCartButton";
import Navigation from "../navigation/Navigation";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      burgerState: false,
    };
  }

  toggleBurger = () => {
    this.setState({ burgerState: !this.state.burgerState });
  };

  render() {
    document.body.style = this.state.burgerState
      ? "overflow:hidden"
      : "overflow:auto";
    return (
      <header className={styles.header}>
        <div className="container">
          <Navigation
            fontColor="#fff"
            toggleBurger={this.toggleBurger}
            burgerState={this.state.burgerState}
            listItemsData={this.props.listItemsData}
          />
        </div>
        <BurgerButton
          toggleBurger={this.toggleBurger}
          burgerState={this.state.burgerState}
        />
        <ShoppingCartButton
          toggleShoppingCart={this.props.toggleShoppingCart}
        />
      </header>
    );
  }
}
