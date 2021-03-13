import React from "react";
import styles from "./Styles/NavigationLayout.module.css";
import NavigationItems from "./NavigationItems";

const NavigationLayout = () => {
  return (
    <div className={styles.NavigationLayout}>
      <NavigationItems
      ></NavigationItems>
    </div>
  );
};

export default NavigationLayout;
