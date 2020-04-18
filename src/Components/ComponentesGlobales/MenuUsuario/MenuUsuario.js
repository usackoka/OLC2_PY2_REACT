import React, { Fragment } from "react";
import styles from "./MenuUsuario.module.scss";
import MenuUsuarioBuscar from "./MenuUsuarioBuscar/MenuUsuarioBuscar"

const MenuUsuario = props => {
  return (
    <Fragment>
      <header className={styles.topbar}>
        <nav className={`d-flex navbar-expand-md ${styles.topNavbar}`}>
          <div className={`navbar-collapse collapse ${styles.navBarContainer}`}>
            <MenuUsuarioBuscar />
          </div>
        </nav>
      </header>

    </Fragment>
  );
};

export default MenuUsuario;
