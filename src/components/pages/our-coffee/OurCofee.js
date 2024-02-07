import "./ourCofee.scss";
import ProductCard from "../../product-card/ProductCard";
import Filter from "../../filter/Filter";

export default function OurCoffe({
  findIdProductForPrewiew,
  // productsData,
  produstsToCountry,
  selectCountry,
}) {
  const ourProductCard = produstsToCountry.map((elem) => {
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
      <Filter selectCountry={selectCountry} />
      <div className="our-coffee__galery">{ourProductCard}</div>
    </div>
  );
}
