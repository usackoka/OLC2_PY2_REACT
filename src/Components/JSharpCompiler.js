import React, { Fragment, useState } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { Tabs, Tab, Row, Col, Button } from "react-bootstrap";

const Index = (props) => {
  const [key, setKey] = useState("tabla");

  return (
    <Fragment>
      <Row>
        <Col>
          <CodeMirror
            options={{
              mode: "javascript",
              theme: "monokai",
              lineNumbers: true,
              keymap: "sublime",
            }}
            onChange={(editor, data, value) => {}}
          />
        </Col>

        <Col xs="auto">
          <Button variant="success" fixed="bottom">
            {"Traducir"}
          </Button>
        </Col>

        <Col>
          <CodeMirror
            options={{
              mode: "pascal",
              theme: "material",
              lineNumbers: true,
              keymap: "sublime",
            }}
            onChange={(editor, data, value) => {}}
          />
        </Col>
      </Row>
      
      <br></br>
      {/*======================== TABLAS DE RESULTADOS ===============================*/}
      <Row>
        <Col>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            <Tab eventKey="tabla" title="Tabla de Símbolos">
              <br></br>
            </Tab>
            <Tab eventKey="errores" title="Tabla de Errores">
              <br></br>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Index;
