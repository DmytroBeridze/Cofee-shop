import ProductCard from "../../product-card/ProductCard";
import AboutOurPleasure from "./about-our-pleasure/AboutOurPleasure";
import "./pleasure.scss";

export default function Pleasure({ viewedProducts, findIdProductForPrewiew }) {
  const viewed = viewedProducts.map((elem) => {
    return (
      <ProductCard
        elem={elem}
        key={elem.id}
        clazz="our-coffee__product-card"
        findIdProductForPrewiew={findIdProductForPrewiew}
      />
    );
  });

  return (
    <div className="pleasure">
      <div className="pleasure__main">
        <h1 className="pleasure__title">For your pleasure</h1>
      </div>
      <AboutOurPleasure />
      <h3 className="pleasure__viewed">Viewed products:</h3>
      {/* galery */}
      <div className="our-coffee__galery pleasure__viewed-galery">{viewed}</div>
    </div>
  );
}
