import React from "react";
import styles from "./TopNav.module.scss";
import CustomButton from "../share/customButton/CustomButton";

type TopNavProps = {};

const TopNav = ({}: TopNavProps) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarlogo}>hi</div>
      <div className={styles.navbarlogoLinks}>
        <CustomButton text={"All Games"} variant="primary" />
        <CustomButton text={"Info"} variant="primary" />
        <CustomButton text={"Help"} variant="primary" />
        <CustomButton text={"Login"} variant="primary" />
      </div>
      <div className={styles.navbarlogoToggle}></div>
    </div>
  );
};

export default TopNav;
