import "./ShoppingCart.scss";
import { ArrowUp, ArrowDown } from "./arrows.js";
import ShoppingCardForm from "../shopping-card-form/ShoppingCardForm";
import { ReactComponent as TeapotCoffeeHotDrink } from "./teapot_coffee_hot_drink_cup_icon_142406.svg";

export default function ShoppingCart({
  shoppingCartState,
  toggleShoppingCart,
  productsInCart,
  deleteElement,
  productCounterIncrease,
  productCounterDecrease,
  total,
  confirmOrder,
  formMessage,
}) {
  let activeClass = "shopping-cart";
  if (shoppingCartState) {
    activeClass += " active";
    document.body.style = "overflow:hidden";
  } else document.body.style = "overflow:auto";

  const listElement = productsInCart.map((elem) => {
    const { image, name, weight, cost, best, id, counter } = elem;
    const bestMark = best ? "Best product*" : "";

    return (
      <li className="shopping-cart__item" key={id}>
        <div className="shopping-cart__prewiew">
          <div className="shopping-cart__img">
            <img
              src={window.location.origin + `/img/product-images/${image}`}
              alt={name}
            />
          </div>
          <div className="shopping-cart__description">
            <div className="shopping-cart__description_name">{name}</div>
            <div className="shopping-cart__description_weight">{weight} kg</div>
          </div>
          <div className="shopping-cart__best">{bestMark}</div>
        </div>
        <div className="shopping-cart__order-wrapper">
          <div className="shopping-cart__counter-wrapper">
            <div
              className="shopping-cart__counter shopping-cart__counter_up"
              onClick={() => productCounterIncrease(id)}
            >
              <ArrowUp />
            </div>

            <div className="shopping-cart__quantity">{counter}</div>

            <div
              className="shopping-cart__counter shopping-cart__counter_down"
              onClick={() => productCounterDecrease(id)}
            >
              <ArrowDown />
            </div>
          </div>
          <div className="shopping-cart__prise">
            {(cost * counter).toFixed(2)} $
          </div>
          <input
            type="button"
            value="Delete"
            onClick={() => deleteElement(id)}
            className="shopping-cart__delete prewiewProductCard__btn"
          />
        </div>
      </li>
    );
  });

  const empty = (
    <div
      className="shopping-cart__body  shopping-cart__body_empty"
      // style={{ maxWidth: "500px", height: "fit-content" }}
    >
      <div
        className="shopping-cart__header shopping-cart__header_empty"
        style={{
          marginBottom: "0px",
          alignItems: "center",
        }}
      >
        <h3 style={{ textAlign: "center" }}>You haven`t added anything!</h3>
        <div
          className="shopping-cart__icon-wrapper"
          style={{ width: "50px", height: "50px" }}
        >
          <img
            src={window.location.origin + "/icons/icons8-shopping-cart.gif"}
            alt="cart"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="shopping-cart__close" onClick={toggleShoppingCart}>
          <img
            src={window.location.origin + "/icons/header/white-close.png"}
            alt="close"
          />
        </div>
      </div>
    </div>
  );

  const full = (
    <div className="shopping-cart__body">
      <div className="shopping-cart__header">
        <h3>You have added to cart:</h3>
        <div className="shopping-cart__close" onClick={toggleShoppingCart}>
          <img
            src={window.location.origin + `/icons/header/white-close.png`}
            alt="close"
          />
        </div>
      </div>
      <ul className="shopping-cart__list">{listElement}</ul>
      <div className="shopping-cart__footer">
        <ShoppingCardForm
          confirmOrder={confirmOrder}
          productsInCart={productsInCart}
          formMessage={formMessage}
        />

        <div className="shopping-cart__total-wrapper">
          <span> Total price:</span>
          <div className="shopping-cart__total-prise">{total.toFixed(2)} $</div>
        </div>
      </div>
      <div className="shopping-cart__footer-icon">
        <TeapotCoffeeHotDrink />
      </div>
    </div>
  );

  return (
    <div className={activeClass}>{!!productsInCart.length ? full : empty}</div>
  );
}
