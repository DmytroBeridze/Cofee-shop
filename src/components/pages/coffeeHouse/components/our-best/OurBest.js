import CoffeeCarousel from "../../../../carousel/Carousel";
import "./OurBest.scss";

export default function OurBest({ productsData }) {
  const productCard = productsData
    .filter((item) => item.best)
    .map((elem) => {
      const { image, name, country, weight, cost, id } = elem;
      return (
        <div className="our-best__card" key={id}>
          <div className="our-best__img">
            <img src={`./img/product-images/${image}`} alt="card" />
          </div>
          <div className="our-best__info">
            <div className="our-best__desc">{name}</div>
            <div className="our-best__weight">{weight} kg</div>
            <div className="our-best__country">{country}</div>
            <div className="our-best__price">{cost} $</div>
          </div>
        </div>
      );
    });

  return (
    <section className="our-best">
      <h3 className="our-best__title">Our best</h3>
      <div className="our-best__slider">
        <CoffeeCarousel productCard={productCard} />
      </div>
    </section>
  );
}
