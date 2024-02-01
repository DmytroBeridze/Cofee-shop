import "./forms.scss";
import React from "react";
import CoffeBeansIcon from "../coffe-beans-icon/coffeBeansIcon";
import { useForm } from "react-hook-form";

function MainForm({ getFormData, formMessage }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const testSendForm = (data) => {
    getFormData(data);
    reset();
  };
  return (
    <div className="form-container">
      <CoffeBeansIcon iconClass="main__logo" />

      <div className="main-form__title">Contact us</div>
      <form
        className="main-form"
        name="main-form"
        onSubmit={handleSubmit(testSendForm)}
      >
        <div className="main-form__inputs-wrapper">
          <div className="main-form__field">
            <label htmlFor="main-name"> Name</label>
            <div
              style={{
                position: "relative",
              }}
            >
              <div className="error-container">
                <input
                  style={errors.userName && { border: "1px solid red" }}
                  type="text"
                  name="userName"
                  id="main-name"
                  className="main-form__name"
                  placeholder="enter yor name"
                  {...register("userName", {
                    minLength: { value: 3, message: "Less than 3 characters" },
                    pattern: { value: /^[A-Za-z]/, message: "Only letters" },
                    // pattern: { value: /^[A-Za-z]+$/i, message: "Only letters" },
                  })}
                />
              </div>
              {errors.userName && (
                <span className="user-error">{errors.userName.message}</span>
              )}
            </div>
          </div>
          <div className="main-form__field">
            <label htmlFor="main-phone"> Phone</label>
            <div className="error-container">
              <input
                style={errors.userPhone && { border: "1px solid red" }}
                type="text"
                name="userPhone"
                id="main-phone"
                className="main-form__name"
                placeholder="enter yor phone"
                {...register("userPhone", {
                  required: true,
                  minLength: { value: 5, message: "Less than 5 characters" },
                  pattern: { value: /[0-9]/, message: "Only numbers" },
                })}
              />
              {errors.userPhone && (
                <span className="user-error">
                  {errors.userPhone.message || "This field is required"}
                </span>
              )}
            </div>
          </div>
          <div className="main-form__field">
            <label htmlFor="user-male">Email</label>
            <div className="error-container">
              <input
                style={errors.userMail && { border: "1px solid red" }}
                type="text"
                // type="email"
                name="userMail"
                id="main-mail"
                className="main-form__name"
                placeholder="enter your email"
                {...register("userMail", {
                  minLength: { value: 3, message: "Less than 3 characters" },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                    message: "Incorrect email",
                  },
                })}
              />
              {errors.userMail && (
                <span className="user-error">{errors.userMail.message}</span>
              )}
            </div>
          </div>
        </div>
        <input
          id="form__submit"
          type="submit"
          name="contacts-submit"
          className="main-form__submit button"
          value="Send"
        />
      </form>

      <div className="main-form__message">{formMessage}</div>
    </div>
  );
}
export { MainForm };
