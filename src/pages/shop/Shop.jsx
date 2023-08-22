import React from "react";
import { PRODUCTS } from "../../products.jsx";
import Product from "./Product.jsx";
import styles from "../../assets/styles/shop.module.css";

function Shop() {
  const items = PRODUCTS.map((product, i) => (
    <Product data={product} key={i} />
  ));

  return (
    <div id={styles.shop}>
      <div id={styles.products}>{items}</div>
    </div>
  );
}
export default Shop;
