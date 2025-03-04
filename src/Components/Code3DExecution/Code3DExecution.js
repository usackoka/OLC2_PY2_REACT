import React, { useState } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { Row, Col, Button, Container } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import "./Code3DExecution.css";
import TextField from '@material-ui/core/TextField';

const Index = (props) => {
  var txtEntrada;
  const [txtSalida, setTxtSalida] = useState({
    value:''
  });

  const [valoresSimbolos,setValoresSimbolos] = useState([]);

  const columnsStack = [
    {
      dataField: "no",
      text: "No.",
    },
    {
      dataField: "regla",
      text: "No de Regla",
    },
    {
      dataField: "descripcion",
      text: "Descripcion de Regla",
    },
    {
      dataField: "fila",
      text: "Fila",
    },
    {
      dataField: "columna",
      text: "Columna",
    }
  ];

  const graficarBloques= async e => {
    if(!txtEntrada) return null;
    
    var optimizador = require("../../optimizacion/optimizacion")
    let entorno = optimizador.parser.parse(txtEntrada.getValue())
    let salida = entorno.getGraficaBloques();

    if(!txtSalida) return null;
    setTxtSalida({value:salida});
  };

  const clickEjecutar = async e => {
    console.log("Ejecutando optimizacion")
    if(!txtEntrada) return null;
    
    var optimizador = require("../../optimizacion/optimizacion")
    let entorno = optimizador.parser.parse(txtEntrada.getValue())
    let salida = entorno.getMirilla();
    setValoresSimbolos(entorno.optimizaciones)

    if(!txtSalida) return null;
    setTxtSalida({value:salida});
  };

  const clickEjecutar2 = async e => {
    console.log("Ejecutando optimizacion")
    if(!txtEntrada) return null;
    
    var optimizador = require("../../optimizacion/optimizacion")
    let entorno = optimizador.parser.parse(txtEntrada.getValue())
    let salida = entorno.getBloques();
    setValoresSimbolos(entorno.optimizaciones)

    let entorno1 = optimizador.parser.parse(salida)
    let salida1 = entorno1.getBloques();
    setValoresSimbolos(entorno1.optimizaciones)

    if(!txtSalida) return null;
    setTxtSalida({value:salida1});
  };

  return (
    <Container fluid>
      <Row>
        <Col xs="auto">
          <Button variant="success" fixed="bottom" onClick={clickEjecutar}>
            {"Optimizar Mirilla"}
          </Button>
        </Col>
        <Col xs="auto">
          <Button variant="success" fixed="bottom" onClick={clickEjecutar2}>
            {"Optimizar Bloques"}
          </Button>
        </Col>
        <Col xs="auto">
          <Button variant="success" fixed="bottom" onClick={graficarBloques}>
            {"Graficar Bloques"}
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
          <h3>Optimizaciones</h3>
          <BootstrapTable
            keyField="tbStack"
            data={valoresSimbolos}
            columns={columnsStack}
          ></BootstrapTable>
        </Col>
      </Row>

      <br></br>
      <Row>
        <Col>
          <TextField
              id="txtSalida"
              value={txtSalida.value}
              label="Optimizaciones"
              multiline
              rows={10}
              fullWidth
              variant="outlined"
            />
        </Col>
      </Row>
      <br></br>
      <br></br>
    </Container>
  );
};

export default Index;
