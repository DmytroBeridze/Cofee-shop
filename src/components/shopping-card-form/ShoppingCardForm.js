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
        className="shopping-cart__confirm"
        value="Confirm"
      ></input>
      <input
        style={errors.phone && { border: "1px solid red" }}
        type="text"
        name="phone"
        {...register("phone", {
          required: true,
          pattern: { value: /[0-9]/, message: "Only numbers" },
        })}
      />
      {errors.phone && <span>Error</span>}
      <div className="">{formMessage}</div>
    </form>
  );
}
