import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { PRODUCTS } from "../../products";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

import styles from "../../assets/styles/cart.module.css";

function Cart() {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  const items = PRODUCTS.map((product, i) => {
    if (cartItems[product.id] !== 0) {
      return <CartItem data={product} key={i} />;
    }
  });
  return (
    <div className={styles.cart}>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className={styles.cart}>{items}</div>

      {totalAmount > 0 ? (
        <div id={styles.checkout}>
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/");
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
}
export default Cart;
