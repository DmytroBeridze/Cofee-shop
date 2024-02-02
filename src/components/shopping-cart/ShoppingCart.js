import "./ShoppingCart.scss";

export default function ShoppingCart({
  shoppingCartState,
  toggleShoppingCart,
}) {
  let activeClass = "shopping-cart";
  if (shoppingCartState) {
    activeClass += " active";
  }

  return (
    <div className={activeClass}>
      <div className="shopping-cart__body">
        <div className="shopping-cart__header">
          <h3>You have added to cart</h3>
          <div className="shopping-cart__close" onClick={toggleShoppingCart}>
            <img src="./icons/header/white-close.png" alt="close" />
          </div>
        </div>
        <ul className="shopping-cart__list">
          <li className="shopping-cart__item">
            <div className="shopping-cart__prewiew">
              <div className="shopping-cart__img">
                <img src="./img/product-images/71qBQnpQFYL.png" alt="product" />
              </div>
              <div className="shopping-cart__description">
                <div className="shopping-cart__description_name">
                  Movenpick Caffe Crema
                </div>
                <div className="shopping-cart__description_weight">0.5kg</div>
              </div>
            </div>
            <div className="shopping-cart__best">Best product</div>
            <div className="shopping-cart__counter">deg/eng</div>
            <div className="shopping-cart__prise">99.0</div>
            <div className="shopping-cart__delete">DEL</div>
          </li>
          <li className="shopping-cart__item">
            <div className="shopping-cart__prewiew">
              <div className="shopping-cart__img">
                <img src="./img/product-images/71qBQnpQFYL.png" alt="product" />
              </div>
              <div className="shopping-cart__description">
                <div className="shopping-cart__description_name">
                  Movenpick Caffe Crema
                </div>
                <div className="shopping-cart__description_weight">0.5kg</div>
              </div>
            </div>
            <div className="shopping-cart__best">Best product</div>
            <div className="shopping-cart__counter">deg/eng</div>
            <div className="shopping-cart__prise">99.0</div>
            <div className="shopping-cart__delete">DEL</div>
          </li>
        </ul>
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
