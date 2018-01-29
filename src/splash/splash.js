import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import styles from "./splash.css";

export const Splash = () => (
  <div className={styles.splash}>
    <header className={styles["splash-header"]}>
      <img src={logo} className={styles["splash-logo"]} alt="logo" />
      <h1 className={styles["splash-title"]}>Greetings, Old Sport!</h1>
    </header>
    <hr className={styles["splash-divider"]} />
    <p className={styles["splash-intro"]}>
      To get started, simply tell us what ingredients you have.
    </p>
    <Link className={styles["splash-link"]} to="/ingredients">
      Add Ingredients
    </Link>
  </div>
);
