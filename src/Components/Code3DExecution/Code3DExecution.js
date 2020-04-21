import React, { useState } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { Row, Col, Button, Container } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import "./Code3DExecution.css";
import { AST } from "../../interprete/AST/AST";
import TextField from '@material-ui/core/TextField';
var interprete = require('../../interprete/interprete')

const Index = (props) => {
  var txtEntrada;
  const [txtSalida, setTxtSalida] = useState({
    value:''
  });

  var valoresStack = [
  ];

  var valoresHeap = [
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

  const clickEjecutar = async e => {
    console.log("Ejecutando interprete")
    if(!txtEntrada) return null;

    interprete.ast = new AST();
    let ast = interprete.parser.parse(txtEntrada.getValue())
    ast.ejecutar();
    let salida = "";
    ast.mensajes.forEach(element => {
      salida += element.toString();
    });

    if(!txtSalida) return null;
    setTxtSalida({value:salida});
  };

  return (
    <Container fluid>
      <Row>
        <Col xs="auto">
          <Button variant="success" fixed="bottom" onClick={clickEjecutar}>
            {"Ejecutar"}
          </Button>
        </Col>
      </Row>

      <br></br>
      <Row>
        <Col md="6">
          <CodeMirror
            className="test"
            editorDidMount={(editor) => {
              txtEntrada = editor;
            }}
            options={{
              mode: "pascal",
              theme: "material",
              lineNumbers: true,
              keymap: "sublime",
            }}
            onChange={(editor, data, value) => {
              txtEntrada = txtEntrada?txtEntrada:editor;
            }}
          />
        </Col>
        {/*=================== tablas heap y stack ======================*/}
        <Col>
          <h3>Stack</h3>
          <BootstrapTable
            keyField="tbStack"
            data={valoresStack}
            columns={columnsStack}
          ></BootstrapTable>
        </Col>
        <Col>
          <h3>Heap</h3>
          <BootstrapTable
            keyField="tbStack"
            data={valoresHeap}
            columns={columnsHeap}
          ></BootstrapTable>
        </Col>
      </Row>

      <br></br>
      <Row>
        <Col>
          <TextField
              id="txtSalida"
              value={txtSalida.value}
              label="Salida 3D"
              multiline
              rows={5}
              fullWidth
              variant="outlined"
            />
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
