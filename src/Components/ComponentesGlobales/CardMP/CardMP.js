import React from "react";
import Card from "react-bootstrap/Card";
import styles from "./CardMP.module.css";
import { Link } from "react-router-dom";

const CardMP = props => {

  /* Set Title */
  let title;
  if (props.title == null) {
    title = "";
  } else {
    title = <Card.Title>{props.title} </Card.Title>;
  }
  /* Set Body Button */
  /* si necesita un enlace no un botón debe definir el enlace*/
  let bodyLink;
  if (props.buttonLink === undefined) {
    bodyLink = "";
  } else {
    bodyLink = props.buttonLink;
  }
  /* set an img */

  let cardImg;
  if (props.cardImg === undefined) {
    cardImg = "";
  } else {
    cardImg = <div className="card-img"><Card.Img variant="top" src={props.cardImg} /></div>;
  }

  /* Set footer Class */
  let footerClass;

  if (props.footerClass === "plain") {
    footerClass = styles.plainFooter;
  } else {
    footerClass = "";
  }

  /* Set footer */
  let footer;

  if (props.footerLinkTo === undefined) {
    footer = props.footer;
  } else {
    footer = (
      <Link className="bold-link" to={props.footerLinkTo}>
        {props.footerLink}
      </Link>
    );
  }

  return (
    /* generic re-usable card */
    <Card className={styles.cardMP +' '+ props.cardClass}>
      <Card.Header className={styles.cardMPHeader}>{props.header}</Card.Header>
      {cardImg}
      <Card.Body component="span" className={styles.cardMPBody}>
        {title}
        {props.body}
        {bodyLink}
      </Card.Body>
      <Card.Footer className={`${styles.cardMPFooter} ${footerClass}`}>
        {footer}
      </Card.Footer>
    </Card>
  );
};

export default CardMP;
