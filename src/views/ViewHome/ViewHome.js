import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import styles from "./ViewHome.module.scss";

const Index = (props) => {

  return (
    <Fragment>
      <Row className={styles.PadRow}>
        <Col sm="12" md="6" lg="3">
        </Col>
        <Col sm="12" md="6" lg="3">
        </Col>
      </Row>
      <Row className={styles.PadRow}>
        <Col sm="12" md="6" lg="3">
        </Col>
        <Col sm="12" md="6" lg="3">
        </Col>
        <Col sm="12" md="12" lg="6">
        </Col>
      </Row>
      <Row>
        <Col sm="12" md="12" lg="9">
        </Col>
        <Col sm="12" md="12" lg="3">
        </Col>
      </Row>

      <hr className="my-3" />
      <div className="text-center">
        <Link to="/logout" className="btn btn-outline-primary">
          {" "}
          Log Out{" "}
        </Link>
      </div>
    </Fragment>
  );
};

export default Index;
