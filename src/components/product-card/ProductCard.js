import "./productCard.scss";
import { NavLink } from "react-router-dom";

export default function ProductCard({ elem, findIdProductForPrewiew, clazz }) {
  const { image, name, country, weight, cost, id } = elem;
  return (
    <NavLink
      className={`product-card ${clazz}`}
      to={"productPrewiew"}
      onClick={() => {
        findIdProductForPrewiew(id);
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
  );
}
