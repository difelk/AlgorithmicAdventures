import React from "react";
import styles from "./TopNav.module.scss";
import CustomButton from "../share/customButton/CustomButton";
import logo from "../../assets/img/logo.png";
import { useNavigate, useLocation } from "react-router-dom";

type TopNavProps = {};

const TopNav = ({}: TopNavProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarlogo} onClick={() => navigate("/")}>
        <img src={logo} alt="main logo" />
      </div>
      <div className={styles.navbarlogoLinks}>
        <CustomButton
          text={"All Games"}
          variant={location.pathname === "/" ? "primary" : "ghost"}
          onClick={() => navigate("/")}
        />
        <CustomButton
          text={"Info"}
          variant={location.pathname === "/page/info" ? "primary" : "ghost"}
          onClick={() => navigate("/page/info")}
        />
        <CustomButton
          text={"Help"}
          variant={location.pathname === "/page/help" ? "primary" : "ghost"}
          onClick={() => navigate("/page/help")}
        />
        <CustomButton
          text={"Login"}
          variant={location.pathname === "/login" ? "primary" : "ghost"}
          onClick={() => navigate("/login")}
        />
      </div>
      <div className={styles.navbarlogoToggle}></div>
    </div>
  );
};

export default TopNav;
