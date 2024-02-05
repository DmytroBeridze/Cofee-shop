import "./prewiewProductCard.scss";

export default function PrewiewProductCard({
  productPrewiew,
  addProductToCart,
  toggleShoppingCart,
}) {
  const { id, image, name, country, weight, cost, best, description, counter } =
    productPrewiew;
  // console.log(counter);
  return (
    <section className="prewiewProductCard">
      <div className="prewiewProductCard__photo">
        <img src={`./img/product-images/${image}`} alt="product" />
      </div>
      <div className="prewiewProductCard__description">
        <h3 className="prewiewProductCard__name">{name}</h3>
        <div className="prewiewProductCard__weight">
          Weight: <span>{weight} kg</span>
        </div>
        <div className="prewiewProductCard__country">
          Country: <span>{country}</span>
        </div>
        <p className="prewiewProductCard__text">{description}</p>
        <div className="prewiewProductCard__purchase">
          <button
            className="prewiewProductCard__addCardBtn"
            onClick={() => {
              addProductToCart(id);
              toggleShoppingCart();
            }}
          >
            Add
          </button>
          {/* <button className="prewiewProductCard__counter">{counter}</button> */}
        </div>
      </div>
    </section>
  );
}
