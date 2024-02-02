import CoffeeCarousel from "../../carousel/Carousel";
import ProductCard from "../../product-card/ProductCard";
import { ProductsData } from "../../products-data/ProductsData";
import "./more.scss";

export default function More({ addProductToCart }) {
  const productCard = ProductsData.filter((item) => item.best).map((elem) => {
    return (
      <ProductCard
        elem={elem}
        key={elem.id}
        addProductToCart={addProductToCart}
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
