import React, { Fragment, useState } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { Tabs, Tab, Row, Col, Button } from "react-bootstrap";

const Index = (props) => {
  const [key, setKey] = useState("tabla");

  return (
    <Fragment>
      <Row>
        <Col xs="auto">
          <Button variant="success" fixed="bottom">
            {"Ejecutar"}
          </Button>
        </Col>
      </Row>

      <Row>
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
      <Row>
        <Col>
          <CodeMirror
            options={{
              theme: "material",
              lineNumbers: true,
              keymap: "sublime",
            }}
            onChange={(editor, data, value) => {}}
          />
        </Col>
      </Row>
    </Fragment>
  );
};

export default Index;
