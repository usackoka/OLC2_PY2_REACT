import React from "react";
import styles from "./LoginSidebar.module.css";
import MPLogo from "../../ComponentesGlobales/MPLogo/MPLogo";

const LoginSidebar = props => {
  return (
    <div className={`${styles.leftLoginPanel} col-lg-4 col-xlg-4`}>
      <div className={styles.loginLogo}>
        <span
          className={`${styles.logoText} d-flex justify-content-center align-items-center`}
        >
          <MPLogo />
        </span>
      </div>
    </div>
  );
};

export default LoginSidebar;
