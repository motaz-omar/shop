import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import styles from "../../assets/styles/cartItem.module.css";
function CartItem({ data }) {
  const { id, productName, price, productImage } = data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className={styles.cartItem}>
      <img src={productImage} />
      <div className={styles.description}>
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
        <div className={styles.countHandler}>
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
}
export default CartItem;
