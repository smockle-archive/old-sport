import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./layout.css";

export const Layout = withRouter(
  class Layout extends React.Component {
    static propTypes = {
      location: PropTypes.object.isRequired
    };

    render() {
      const title = this.props.location.pathname.replace(/\//, "");
      return (
        <React.Fragment>
          <header className="layout-header layout-bar">
            <h1 className="layout-title layout-typographical">{title}</h1>
          </header>
          <div className="layout-body">{this.props.children}</div>
          <footer className="layout-footer layout-bar">
            <Link className="layout-link layout-typographical" to="/recipes">
              Recipes
            </Link>
            <Link
              className="layout-link layout-typographical"
              to="/ingredients"
            >
              Ingredients
            </Link>
          </footer>;
        </React.Fragment>
      );
    }
  }
);
