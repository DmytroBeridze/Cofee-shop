import Navigation from "../navigation/Navigation";
import "./footer.scss";

export default function Footer({ listItemsData }) {
  return (
    <div className="footerContainer">
      <Navigation listItemsData={listItemsData} fontColor="#000000" />
    </div>
  );
}
