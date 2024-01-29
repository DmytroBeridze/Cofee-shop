import CoffeBeansIcon from "../coffe-beans-icon/coffeBeansIcon";
import "./forms.scss";

function MainForm() {
  return (
    <div className="form-container">
      <CoffeBeansIcon iconClass="main__logo" />
      <div className="main-form__title">Contact us</div>
      <form className="main-form" name="main-form">
        <div className="main-form__inputs-wrapper">
          <div className="main-form__field">
            <label htmlFor="main-name"> Name</label>
            <input
              type="text"
              name="user-name"
              id="main-name"
              className="main-form__name"
              placeholder="enter yor name"
            />
          </div>
          <div className="main-form__field">
            <label htmlFor="main-phone"> Phone</label>
            <input
              type="text"
              name="user-phone"
              id="main-phone"
              className="main-form__name"
              placeholder="enter yor phone"
            />
          </div>
          <div className="main-form__field">
            <label htmlFor="user-male">Email</label>
            <input
              type="email"
              name="user-male"
              id="main-mail"
              className="main-form__name"
              placeholder="enter your email"
            />
          </div>
        </div>
        <input
          id="form__submit"
          type="button"
          name="contacts-submit"
          className="main-form__submit"
          value="Send"
        />
      </form>
    </div>
  );
}
export { MainForm };
