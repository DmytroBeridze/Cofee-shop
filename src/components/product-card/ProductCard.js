import { NavLink } from "react-router-dom";
import "./productCard.scss";

export default function ProductCard({
  elem,
  findIdProductForPrewiew,
  addProductToCart,
}) {
  const { image, name, country, weight, cost, id } = elem;
  return (
    <NavLink
      className="product-card"
      to={"productPrewiew"}
      onClick={() => {
        findIdProductForPrewiew(id);

        // addProductToCart(id);
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
    </NavLink>

    // <div
    //   className="product-card"
    //   onClick={() => {
    //     findIdProductForPrewiew(id);
    //     // addProductToCart(id);
    //   }}
    // >
    //   <div className="product-card__img">
    //     <img src={`./img/product-images/${image}`} alt="card" />
    //   </div>
    //   <div className="product-card__info">
    //     <div className="product-card__desc">{name}</div>
    //     <div className="product-card__weight">{weight} kg</div>
    //     <div className="product-card__country">{country}</div>
    //     <div className="product-card__price">{cost} $</div>
    //   </div>
    // </div>
  );
}
