import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/js/all.js";
import styles from "../assets/styles/navbar.module.css";

function Navbar() {
  return (
    <div id={styles.navbar}>
      <div id={styles.links}>
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
