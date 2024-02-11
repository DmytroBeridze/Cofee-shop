import "./shoppingCardForm.scss";
import React from "react";
import { useForm } from "react-hook-form";

export default function ShoppingCardForm({
  confirmOrder,
  productsInCart,
  formMessage,
}) {
  const orderList = productsInCart.map(({ name, cost, counter }) => {
    return {
      name,
      cost,
      counter,
      price: (cost * counter).toFixed(2),
    };
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const orderSend = (data) => {
    if (orderList) {
      confirmOrder(data, orderList);
      reset();
    } else return;
  };

  return (
    <form onSubmit={handleSubmit(orderSend)} name="confirm">
      <input
        type="submit"
        className="shopping-cart__confirm prewiewProductCard__btn"
        value="Confirm"
      ></input>
      <div className="shopping-cart__phone_wrapper">
        <input
          id="shopping-cart-phone"
          className="shopping-cart__phone"
          style={errors.phone && { border: "1px solid red" }}
          type="text"
          name="phone"
          placeholder="Enter your phone"
          {...register("phone", {
            required: true,
            pattern: { value: /[0-9]/, message: "Only numbers" },
          })}
        />
      </div>

      {errors.phone && <span>Error</span>}
      <div className="shopping-cart__formMessage">{formMessage}</div>
    </form>
  );
}
