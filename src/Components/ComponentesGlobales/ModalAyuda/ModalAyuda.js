import React from "react";

import { Modal, Button } from "react-bootstrap";

function ModalInfo(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.info ? ( props.info[0] ?
            props.info[0].Titulo : " ") : ""}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{props.info ? ( props.info[0] ?
          props.info[0].Body : " ") : ""}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalInfo;
