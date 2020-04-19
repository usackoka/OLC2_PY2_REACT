import React, { Fragment } from "react";
import { Navbar, Container } from "react-bootstrap";
import ViewHome from "../../views/ViewHome/ViewHome";

const homeLayout = props => {
  return (
    <Fragment>

      <Container>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Container>
            <Navbar.Brand>OLC2 - 201503712 - PROYECTO 2</Navbar.Brand>
          </Container>
        </Navbar>
      </Container>

      <ViewHome/>
    </Fragment>
  );
};

export default homeLayout;
