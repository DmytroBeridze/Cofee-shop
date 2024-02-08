import CoffeBeansIcon from "../../coffe-beans-icon/coffeBeansIcon";
import "./coffeeHouse.scss";
import Main from "./components/main/Main";
import AboutUs from "./components/about-us/AboutUs";
import OurBest from "./components/our-best/OurBest";
import { MainForm } from "../../forms/Forms";

export default function CoffeeHouse({
  productsData,
  getFormData,
  formMessage,
  findIdProductForPrewiew,
}) {
  return (
    <>
      <Main />
      <AboutUs />
      <OurBest
        productsData={productsData}
        findIdProductForPrewiew={findIdProductForPrewiew}
      />
      <MainForm getFormData={getFormData} formMessage={formMessage} />
    </>
  );
}
