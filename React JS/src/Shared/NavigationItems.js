import React from "react";
import NavLinks from "./NavLink";
import styles from "./Styles/NavigationItems.module.css";

const NavigationItems = () => {
  return (
    <div className={styles.NavigationItems}>
      <NavLinks Link="/">Get All Products</NavLinks>

      <NavLinks Link="/addNewProduct">Post A New Product</NavLinks>
    </div>
  );
};

export default NavigationItems;
