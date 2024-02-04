import "./ShoppingCart.scss";

export default function ShoppingCart({
  shoppingCartState,
  toggleShoppingCart,
  productsInCart,
}) {
  let activeClass = "shopping-cart";
  if (shoppingCartState) {
    activeClass += " active";
  }

  const listElement = productsInCart.map((elem) => {
    console.log(elem);
    const { image, name, weight, cost, best, id } = elem;
    const bestMark = best ? "Best product*" : "";
    return (
      <li className="shopping-cart__item" key={id}>
        <div className="shopping-cart__prewiew">
          <div className="shopping-cart__img">
            <img src={`./img/product-images/${image}`} alt={name} />
          </div>
          <div className="shopping-cart__description">
            <div className="shopping-cart__description_name">{name}</div>
            <div className="shopping-cart__description_weight">{weight}</div>
          </div>
        </div>
        <div className="shopping-cart__best">{bestMark}</div>
        <div className="shopping-cart__counter">deg/eng</div>
        <div className="shopping-cart__prise">{cost}</div>
        <div className="shopping-cart__delete">DEL</div>
      </li>
    );
  });
  return (
    <div className={activeClass}>
      <div className="shopping-cart__body">
        <div className="shopping-cart__header">
          <h3>You have added to cart</h3>
          <div className="shopping-cart__close" onClick={toggleShoppingCart}>
            <img src="./icons/header/white-close.png" alt="close" />
          </div>
        </div>
        <ul className="shopping-cart__list">{listElement}</ul>
        <div className="shopping-cart__footer">
          <button className="shopping-cart__confirm">Confirm</button>
          <label>
            Total price:
            <input
              type="text"
              name=""
              id=""
              className="shopping-cart__total-prise"
              defaultValue={"99.99"}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
