import React, { Fragment, useState } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { Tabs, Tab, Row, Col, Button } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import { Principal } from "../../compilador/AST_JS/Principal";
import TextField from '@material-ui/core/TextField';

const Index = (props) => {

  var txtEntrada;
  const [key, setKey] = useState("tabla");
  const [txtSalida, setTxtSalida] = useState({
    value:''
  });

  const [valoresSimbolos,setValoresSimbolos] = useState([]);
  const [valoresErrores,setValoresErrores] = useState([]);
  const [valoresFunciones,setValoresFunciones] = useState([]);

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

  const clickEjecutar = async e => {
    var compilador = require("../../compilador/compilador")
    if(!txtEntrada){
      console.log("No se encontró la instancia de codeMirror")
      return null;
    }
    compilador.principal = new Principal();
    let principal = compilador.parser.parse(txtEntrada.getValue())
    let salida = principal.run();

    if(!txtSalida) return null;
    setTxtSalida({value:salida});

    setValoresSimbolos(principal.getSimbolosJSON())
    //cargo las variables
    setValoresSimbolos(principal.getSimbolosJSON())
    //cargo las funciones
    setValoresFunciones(principal.getFuncionesJSON());
    //seteo los errores
    setValoresErrores(principal.getErroresJSON())
  };

  return (
    <Fragment>
      <Row>
        <Col>
          <CodeMirror
            editorDidMount={(editor) => {
              txtEntrada = editor;
            }}
            options={{
              mode: "javascript",
              theme: "monokai",
              lineNumbers: true,
              keymap: "sublime",
            }}
            onChange={(editor, data, value) => {
              txtEntrada = txtEntrada?txtEntrada:editor;
            }}
          />
        </Col>

        <Col xs="auto">
          <Button variant="success" fixed="bottom" onClick={clickEjecutar}>
            {"Traducir"}
          </Button>
        </Col>

        <Col>
          <TextField
              id="txtSalida"
              value={txtSalida.value}
              label="Salida 3D"
              multiline
              rows={14}
              fullWidth
              variant="outlined"
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
              <h2>Tabla de Variables</h2>
              <br></br>
              <BootstrapTable
                keyField="tbSimbolos"
                data={valoresSimbolos}
                columns={columnsSimbolos}
              ></BootstrapTable>
              <h2>Tabla de Funciones</h2>
              <br></br>
              <BootstrapTable
                keyField="tbFunciones"
                data={valoresFunciones}
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
