import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import styles from "./Layout.css";

export const Layout = withRouter(
  class Layout extends React.Component {
    static propTypes = {
      location: PropTypes.object.isRequired
    };

    render() {
      const title = this.props.location.pathname.replace(/\//, "");
      return (
        <React.Fragment>
          <header className={styles["layout-header"]}>
            <h1 className={styles["layout-title"]}>{title}</h1>
          </header>
          <div className={styles["layout-body"]}>{this.props.children}</div>
          <footer className={styles["layout-footer"]}>
            <Link className={styles["layout-link"]} to="/recipes">
              Recipes
            </Link>
            <Link className={styles["layout-link"]} to="/ingredients">
              Ingredients
            </Link>
          </footer>;
        </React.Fragment>
      );
    }
  }
);
