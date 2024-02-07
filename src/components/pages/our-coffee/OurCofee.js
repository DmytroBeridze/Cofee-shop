import "./ourCofee.scss";
import ProductCard from "../../product-card/ProductCard";
import { ProductsData } from "../../products-data/ProductsData";

export default function OurCoffe({ findIdProductForPrewiew }) {
  const ourProductCard = ProductsData.map((elem) => {
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
    <div className="our-coffee">
      <div style={{ height: "400px", backgroundColor: "black" }}>Our Cofee</div>

      <div className="our-coffee__galery">{ourProductCard}</div>
    </div>
  );
}
