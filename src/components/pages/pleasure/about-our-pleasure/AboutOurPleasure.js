import "./aboutOurPleasure.scss";
import CoffeBeansIconBlack from "../../../../components/coffee-beans-icon-black/CoffeBeansIconBlack.js";

export default function AboutOurPleasure() {
  return (
    <div className="aboutOurPleasure">
      <div className="aboutOurPleasure__img"></div>
      <div className="aboutOurPleasure__info">
        <div className="aboutOurPleasure__title">About our beans</div>
        <CoffeBeansIconBlack iconClass={"black-bean-logo"} />
        <div className="aboutOurPleasure__text">
          Extremity sweetness difficult behaviour he of. On disposal of as
          landlord horrible.
          <p>
            Afraid at highly months do things on at. Situation recommend
            objection do intention <br /> so questions.
          </p>
          <p>
            As greatly removed calling pleased improve an. Last ask him cold
            feel
          </p>
          <p>
            met spot shy want. Children me laughing we prospect answered
            followed. At it went <br /> is song that held help face.
          </p>
        </div>
      </div>
    </div>
  );
}
