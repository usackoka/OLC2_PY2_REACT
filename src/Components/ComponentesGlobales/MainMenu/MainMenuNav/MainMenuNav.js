import React from "react";
import Nav from "react-bootstrap/Nav";
import styles from "./MainMenuNav.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const MainMenuNav = ({ items }) => {
  return (
    <nav className="sidebarNav">
      <Nav as="ul" className={styles.MainNav}>
        {items.map(({ label, name, href, icon }) => (
            <Nav.Item as="li" key={name} className={styles.navItem}>
              <Link to={href} key={name} className={styles.sidebarLink}>
                <i><FontAwesomeIcon icon={`${icon}`} /></i>
                <span className={`hideMenu ${name}`}>{label}</span>
              </Link>
            </Nav.Item>
        ))}
      </Nav>
    </nav>
  );
};

export default MainMenuNav;
