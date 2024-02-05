import "./shoppingCardForm.scss";
import React from "react";
import { useForm } from "react-hook-form";

export default function ShoppingCardForm({ confirmOrder, productsInCart }) {
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
  } = useForm({ mode: "onBlur" });

  const orderSend = (data) => {
    confirmOrder(data, orderList);
  };

  return (
    <form onSubmit={handleSubmit(orderSend)}>
      <input
        type="submit"
        className="shopping-cart__confirm"
        value="Confirm"
      ></input>
      <input
        type="text"
        name="userName"
        {...register("userName", { required: true, maxLength: 20 })}
      />
    </form>
  );
}
