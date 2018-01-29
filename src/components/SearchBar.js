import React from "react";
import styles from "./SearchBar.css";

export const SearchBar = () => (
  <input
    className={styles.searchbar}
    placeholder="Search ingredients"
    aria-label="Search ingredients"
    type="search"
  />
);
