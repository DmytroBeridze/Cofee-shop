import CoffeeCarousel from "../../../../carousel/Carousel";
import ProductCard from "../../../../product-card/ProductCard";
import "./OurBest.scss";

export default function OurBest({
  productsData,
  findIdProductForPrewiew,
  addProductToCart,
}) {
  const productCard = productsData
    .filter((item) => item.best)
    .map((elem) => {
      return (
        <ProductCard
          elem={elem}
          key={elem.id}
          findIdProductForPrewiew={findIdProductForPrewiew}
        />
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
