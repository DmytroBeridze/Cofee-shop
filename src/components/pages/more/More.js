import { Route, Routes } from "react-router-dom";
import CoffeeCarousel from "../../carousel/Carousel";
import ProductCard from "../../product-card/ProductCard";
import { ProductsData } from "../../products-data/ProductsData";
import "./more.scss";
import PrewiewProductCard from "../prewiewProductCard/PrewiewProductCard";
export default function More({
  addProductToCart,
  productPrewiew,
  toggleShoppingCart,
  findIdProductForPrewiew,
}) {
  const productCard = ProductsData.filter((item) => item.best).map((elem) => {
    console.log(elem);
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
      <Routes>
        <Route
          path="productPrewiew"
          element={
            <PrewiewProductCard
              productPrewiew={productPrewiew}
              addProductToCart={addProductToCart}
              toggleShoppingCart={toggleShoppingCart}
            />
          }
        />
      </Routes>
      <div className="more" style={{ backgroundColor: "gray" }}></div>
      <div
        className="testCont"
        style={{ border: "1px solid red", width: "800px", margin: "0 auto" }}
      >
        <CoffeeCarousel productCard={productCard} />
      </div>
      {/* {qwerty} */}
      <div
        className=""
        style={{ width: "100px", height: "100px", border: "1px solid red" }}
      >
        <img src="71qBQnpQFYL.png" alt="" style={{ width: "100%" }} />
      </div>
    </>
  );
}
