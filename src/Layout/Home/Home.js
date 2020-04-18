import React, { Fragment } from "react";
import styles from "./Home.module.scss";
import MenuUsuario from "../../Components/ComponentesGlobales/MenuUsuario/MenuUsuario";
import MainMenu from "../../Components/ComponentesGlobales/MainMenu/MainMenu";
import { Col, Row } from "react-bootstrap";
import { Route } from "react-router-dom";
import ViewHome from "../../views/ViewHome/ViewHome";

const homeLayout = props => {
  return (
    <Fragment>
      <Row>
        <MenuUsuario />
        <MainMenu />
        <Col className={styles.homeContainer}>
          <Route exact path="/home" component={ViewHome} />
        </Col>
      </Row>
    </Fragment>
  );
};

export default homeLayout;
