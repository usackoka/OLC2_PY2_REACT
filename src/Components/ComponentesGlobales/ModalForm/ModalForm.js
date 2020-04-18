import React from "react";

import { Modal, Button, Col, Form } from "react-bootstrap";

function ModalInfo(props) {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Contacto
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p></p>

                <Col xs>
                    <Form.Group controlId="prTitulo">
                    <Form.Label>Tipo Contacto</Form.Label>
                    <Form.Control
                        as="select"
                        name="prTitulo"
                        //onChange={handleInput}
                        //value={formData.prTitulo}
                        >
                        <option>Seleccionar</option>
                        <option>Correo</option>
                        <option>Telefono</option>
                        
                    </Form.Control>
                    </Form.Group>
                </Col>


            <Col xs>
                <Form.Group controlId="telefono">
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                    name="prTelefono"
                    type="text"
                    //onChange={handleInput}
                    //value={formData.prTelefono}
                />
                </Form.Group>
            </Col>
      </Modal.Body>
      <Modal.Footer>
        <Button >Enviar </Button> 
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalInfo;
