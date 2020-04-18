import React, { Fragment } from "react";
import styles from "./MainMenu.module.scss";
import MainMenuHeader from "./MainMenuHeader/MainMenuHeader";
import MainMenuItems from "./MainMenuNav/MainMenuItems";

const MainMenu = props => {
  return (
    <Fragment>
      <aside
        className={`col col-md-4 col-lg-2 col-xlg-2 ${styles.leftSidebar}`}>
        <MainMenuHeader />
        <MainMenuItems />
      </aside>
    </Fragment>
  );
};

export default MainMenu;
