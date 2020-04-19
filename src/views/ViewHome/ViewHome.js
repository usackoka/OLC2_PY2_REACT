import React, { Fragment, useState } from "react";
import { Tabs, Tab, Row, Col, Button } from "react-bootstrap";
import JSharpCompiler from "../../Components/JSharpCompiler" ;
import Code3DExecution from "../../Components/Code3DExecution"

const Index = (props) => {

  const [key, setKey] = useState('exec');

  return (
    <Fragment>
      <br></br>
      <br></br>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="trad" title="J# Compiler">
          <br></br>
          <JSharpCompiler/>
        </Tab>
        <Tab eventKey="exec" title="3D Execution">
          <br></br>
          <Code3DExecution/>
        </Tab>
      </Tabs>

    </Fragment>
  );
};

export default Index;
