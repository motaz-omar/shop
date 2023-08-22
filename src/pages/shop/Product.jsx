import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import styles from "../../assets/styles/products.module.css";
function Product({ data }) {
  const { id, productName, price, productImage } = data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className={styles.product}>
      <img src={productImage} />
      <div className={styles.description}>
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className={styles.addToCartBttn} onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
}
export default Product;
