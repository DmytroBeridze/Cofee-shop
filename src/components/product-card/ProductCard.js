import "./productCard.scss";

export default function ProductCard({ elem, addProductToCart }) {
  const { image, name, country, weight, cost, id } = elem;
  return (
    <div
      className="product-card"
      onClick={() => {
        addProductToCart(id);
      }}
    >
      <div className="product-card__img">
        <img src={`./img/product-images/${image}`} alt="card" />
      </div>
      <div className="product-card__info">
        <div className="product-card__desc">{name}</div>
        <div className="product-card__weight">{weight} kg</div>
        <div className="product-card__country">{country}</div>
        <div className="product-card__price">{cost} $</div>
      </div>
    </div>
  );
}
