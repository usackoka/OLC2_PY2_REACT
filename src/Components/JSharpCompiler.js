import React, { Fragment, useState } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { Tabs, Tab, Row, Col, Button } from "react-bootstrap";

const Index = (props) => {
  const [key, setKey] = useState("trad");

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
              mode: "javascript",
              theme: "monokai",
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
