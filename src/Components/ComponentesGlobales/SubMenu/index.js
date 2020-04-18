import React, { Component, Fragment } from "react";

import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./SubMenu.module.scss";

export default class Sidebar extends Component {
  render() {
    return (
      <Fragment>
        <Navbar>
          <Nav className={`flex-column ${styles.rightColNav}`}>
            {this.props.array.map(array => (
              <Link to={array.route} key={array.name}>
                <span className={styles.navItemName}>{array.name} </span>
                <FontAwesomeIcon icon={faCircle} />
              </Link>
            ))}
          </Nav>
        </Navbar>
      </Fragment>
    );
  }
}
