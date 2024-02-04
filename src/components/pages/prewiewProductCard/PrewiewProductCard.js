import "./prewiewProductCard.scss";

export default function PrewiewProductCard({
  productPrewiew,
  addProductToCart,
}) {
  const { image, name, country, weight, cost, best, description } =
    productPrewiew;
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
            onClick={addProductToCart}
          >
            Add
          </button>
          <button className="prewiewProductCard__counter">+-</button>
        </div>
      </div>
    </section>
  );
}
