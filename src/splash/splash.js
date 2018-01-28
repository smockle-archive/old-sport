import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./splash.css";

export const Splash = () => (
  <div className="splash">
    <header className="splash-header">
      <img src={logo} className="splash-logo" alt="logo" />
      <h1 className="splash-title">Greetings, Old Sport!</h1>
    </header>
    <hr className="splash-divider" />
    <p className="splash-intro">
      To get started, simply tell us what ingredients you have.
    </p>
    <Link className="splash-link" to="/ingredients">
      Add Ingredients
    </Link>
  </div>
);
