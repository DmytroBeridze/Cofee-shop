import { NavLink } from "react-router-dom";
import CoffeBeansIconBlack from "../../coffee-beans-icon-black/CoffeBeansIconBlack";
import OurCoffeeMain from "../our-coffee/components/our-coffee-main/Our-coffee-main";
import "./prewiewProductCard.scss";

export default function PrewiewProductCard({
  productPrewiew,
  addProductToCart,
  toggleShoppingCart,
}) {
  const { id, image, name, country, weight, cost, best, description, counter } =
    productPrewiew;

  return (
    <>
      <OurCoffeeMain />
      <section className="prewiewProductCard">
        <div className="prewiewProductCard__photo">
          <img src={`./img/product-images/${image}`} alt="product" />
        </div>
        <div className="prewiewProductCard__description">
          <h2 className="prewiewProductCard__title">About it</h2>
          <CoffeBeansIconBlack iconClass="black-bean-logo" />
          <h3 className="prewiewProductCard__name">{name}</h3>
          <div className="prewiewProductCard__country">
            <span>Country: </span>
            {country.slice(0, 1).toUpperCase() + country.slice(1)}
          </div>
          <div className="prewiewProductCard__weight">
            <span> Weight: </span> {weight} <span>kg</span>
          </div>
          <p className="prewiewProductCard__text">
            <span>Description: </span> {description}
          </p>
          <div className="prewiewProductCard__price">
            <span>Price: </span> {cost}$
          </div>
          {/* <div className="prewiewProductCard__purchase"> */}
          <input
            name="add"
            className="prewiewProductCard__btn prewiewProductCard__btn_addCart"
            type="button"
            defaultValue="Add"
            onClick={() => {
              addProductToCart(id);
              toggleShoppingCart();
            }}
          />
          <NavLink to={"ourCoffe"} className="prewiewProductCard__btn_back">
            <input
              className="prewiewProductCard__btn "
              type="button"
              defaultValue="Back"
            />
          </NavLink>
        </div>
      </section>
    </>
  );
}
