import React from "react";
import CoffeBeansIcon from "../coffe-beans-icon/coffeBeansIcon";
import "./forms.scss";

class MainForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userPhone: "",
      userMail: "",
    };
  }

  getUserData = (e) => {
    const data = e.target.name;
    const value = e.target.value;
    this.setState({ [data]: value });
  };
  submitForm = (e) => {
    e.preventDefault();
    this.props.getFormData(
      this.state.userName,
      this.state.userMail,
      this.state.userPhone
    );
    this.setState({
      userName: "",
      userPhone: "",
      userMail: "",
    });
  };

  render() {
    return (
      <div className="form-container">
        <CoffeBeansIcon iconClass="main__logo" />
        <div className="main-form__title">Contact us</div>
        <form className="main-form" name="main-form" onSubmit={this.submitForm}>
          <div className="main-form__inputs-wrapper">
            <div className="main-form__field">
              <label htmlFor="main-name"> Name</label>
              <input
                type="text"
                name="userName"
                id="main-name"
                className="main-form__name"
                placeholder="enter yor name"
                value={this.state.userName}
                onChange={(e) => this.getUserData(e)}
              />
            </div>
            <div className="main-form__field">
              <label htmlFor="main-phone"> Phone</label>
              <input
                type="text"
                name="userPhone"
                id="main-phone"
                className="main-form__name"
                placeholder="enter yor phone"
                value={this.state.userPhone}
                onChange={(e) => this.getUserData(e)}
              />
            </div>
            <div className="main-form__field">
              <label htmlFor="user-male">Email</label>
              <input
                type="email"
                name="userMail"
                id="main-mail"
                className="main-form__name"
                placeholder="enter your email"
                value={this.state.userMail}
                onChange={(e) => this.getUserData(e)}
              />
            </div>
          </div>
          <input
            id="form__submit"
            type="submit"
            name="contacts-submit"
            className="main-form__submit"
            value="Send"
          />
        </form>
      </div>
    );
  }
}
export { MainForm };
