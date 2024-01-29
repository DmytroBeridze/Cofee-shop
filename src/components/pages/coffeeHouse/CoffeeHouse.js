import CoffeBeansIcon from "../../coffe-beans-icon/coffeBeansIcon";
// import MainButton from "../../main-button/MainBtn";
import "./coffeeHouse.scss";
import Main from "./components/main/Main";
import AboutUs from "./components/about-us/AboutUs";
import OurBest from "./components/our-best/OurBest";
import { MainForm } from "../../forms/Forms";

export default function CoffeeHouse({ productsData }) {
  return (
    <>
      <Main />
      <AboutUs />
      <OurBest productsData={productsData} />
      <MainForm />
    </>
    // <section className="main">
    //   <h1 className="main__title">Everything You Love About Coffee</h1>

    //   <CoffeBeansIcon iconClass={"main__logo"} />
    //   <h2 className="main__subtitle">
    //     We makes every day full of energy and taste Want to try our beans?
    //   </h2>
    //   <MainButton />
    // </section>
  );
}
