import BurgerButton from "../burger-button/BurgerButton";
import Navigation from "../navigation/Navigation";
import styles from "./Header.module.scss";
import React from "react";

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
    return (
      <header className={styles.header}>
        <div className="container">
          <Navigation
            toggleBurger={this.toggleBurger}
            burgerState={this.state.burgerState}
            listItemsData={this.props.listItemsData}
          />
        </div>
        <BurgerButton
          toggleBurger={this.toggleBurger}
          burgerState={this.state.burgerState}
        />
      </header>
    );
  }
}
