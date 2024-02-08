import "./ourCofee.scss";
import ProductCard from "../../product-card/ProductCard";
import Filter from "../../filter/Filter";

export default function OurCoffe({
  findIdProductForPrewiew,
  produstsToCountry,
  selectCountry,
  costValue,
  ourCofeeSortCost,
}) {
  const ourProductCard = produstsToCountry
    .sort((a, b) =>
      ourCofeeSortCost === "cheaper"
        ? a.cost - b.cost
        : ourCofeeSortCost === "expensive"
        ? b.cost - a.cost
        : ourCofeeSortCost === "random"
        ? Math.random() - 0.5
        : a.id - b.id
    )
    .map((elem) => {
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
      <Filter selectCountry={selectCountry} costValue={costValue} />
      <div className="our-coffee__galery">{ourProductCard}</div>
    </div>
  );
}
