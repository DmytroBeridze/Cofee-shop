import "./more.scss";

import CoffeeCarousel from "../../carousel/Carousel";
import ProductCard from "../../product-card/ProductCard";
import { ProductsData } from "../../products-data/ProductsData";

export default function More({ addProductToCart, findIdProductForPrewiew }) {
  const productCard = ProductsData.filter((item) => item.best).map((elem) => {
    return (
      <ProductCard
        elem={elem}
        key={elem.id}
        addProductToCart={addProductToCart}
        findIdProductForPrewiew={findIdProductForPrewiew}
      />
    );
  });

  return (
    <>
      <div className="more" style={{ backgroundColor: "gray" }}></div>
      <div
        className="testCont"
        style={{ border: "1px solid red", width: "800px", margin: "0 auto" }}
      >
        <CoffeeCarousel productCard={productCard} />
      </div>
    </>
  );
}
