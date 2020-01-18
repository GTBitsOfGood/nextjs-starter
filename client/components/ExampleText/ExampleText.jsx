import React from "react";
import PropTypes from "prop-types";
import styles from "./ExampleText.module.css";

const ExampleText = ({ children }) => (
  <div className={styles.Container}>
    <h3 className={styles.Text}>{children}</h3>
  </div>
);

ExampleText.propTypes = {
  children: PropTypes.node.isRequired
};

export default ExampleText;
