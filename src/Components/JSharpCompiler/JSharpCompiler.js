import React, { Fragment, useState } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { Tabs, Tab, Row, Col, Button } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";

const Index = (props) => {
  const [key, setKey] = useState("tabla");

  var valoresSimbolos = [
  ]
  var valoresErrores = [
  ]

  const columnsSimbolos = [
    {
      dataField: "index",
      text: "No.",
    },
    {
      dataField: "lex",
      text: "Lexema",
    },
    {
      dataField: "type",
      text: "Tipo",
    },
    {
      dataField: "dataType",
      text: "Tipo Dato",
    },
    {
      dataField: "line",
      text: "Linea",
    },
    {
      dataField: "column",
      text: "Columna",
    },
  ];

  const columnsErrores = [
    {
      dataField: "index",
      text: "No.",
    },
    {
      dataField: "lex",
      text: "Lexema",
    },
    {
      dataField: "type",
      text: "Tipo",
    },
    {
      dataField:"desc",
      text:"Descripcion"
    },
    {
      dataField: "line",
      text: "Linea",
    },
    {
      dataField: "column",
      text: "Columna",
    },
  ];

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
              <BootstrapTable
                keyField="tbSimbolos"
                data={valoresSimbolos}
                columns={columnsSimbolos}
              ></BootstrapTable>
            </Tab>
            <Tab eventKey="errores" title="Tabla de Errores">
              <br></br>
              <BootstrapTable
                keyField="tbErrores"
                data={valoresErrores}
                columns={columnsErrores}
              ></BootstrapTable>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Index;
