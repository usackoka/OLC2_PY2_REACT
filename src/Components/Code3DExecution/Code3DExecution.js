import React from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { Row, Col, Button, Container } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";

const Index = (props) => {
  const valoresStack = [
    {
      index: 1,
      value: 1,
    },
    {
      index: 2,
      value: 2,
    },
  ];

  const columnsStack = [
    {
      dataField: "index",
      text: "No.",
    },
    {
      dataField: "value",
      text: "Valor",
    },
  ];

  const columnsHeap = [
    {
      dataField: "index",
      text: "No.",
    },
    {
      dataField: "value",
      text: "Valor",
    },
    {
      dataField: "ascii",
      text: "Ascii",
    },
  ];

  return (
    <Container fluid>
      <Row>
        <Col xs="auto">
          <Button variant="success" fixed="bottom">
            {"Ejecutar"}
          </Button>
        </Col>
      </Row>

      <br></br>
      <Row>
        <Col md="6">
          <CodeMirror className="test"
            options={{
              mode: "pascal",
              theme: "material",
              lineNumbers: true,
              keymap: "sublime",
              
            }}
            onChange={(editor, data, value) => {}}
          />
        </Col>
        {/*=================== tablas heap y stack ======================*/}
        <Col>
        <h3>Stack</h3>
          <BootstrapTable
            keyField="tbStack"
            data={valoresStack}
            columns={columnsStack}
            striped
            hover
            condensed
            insertRow
            deleteRow
            search
          ></BootstrapTable>
        </Col>
        <Col>
        <h3>Heap</h3>
            <BootstrapTable
                keyField="tbStack"
                data={valoresStack}
                columns={columnsHeap}
                striped
                hover
                condensed
                insertRow
                deleteRow
                search
            ></BootstrapTable>
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
    </Container>
  );
};

export default Index;
