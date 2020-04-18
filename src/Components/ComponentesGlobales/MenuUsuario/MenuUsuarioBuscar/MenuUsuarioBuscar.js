import React, { Fragment } from "react";
import { Col, Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const MenuUsuarioBuscar = props => {
  return (
    <Fragment>
      <Form.Group as={Col} md="4" controlId="userMenuSearchForm">
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Búsqueda en la Plataforma"
            aria-describedby="inputGroupApend"
            name="searchbox"
            defaultValue=""
          />
          <InputGroup.Append>
            <InputGroup.Text id="inputGroupApend">
              <i>
                <FontAwesomeIcon icon={faSearch} />
              </i>
            </InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>
    </Fragment>
  );
};

export default MenuUsuarioBuscar;
