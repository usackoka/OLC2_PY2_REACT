import React, { Fragment, useState } from "react";
import { Tabs, Tab, Row, Col, Button } from "react-bootstrap";
import JSharpCompiler from "../../Components/JSharpCompiler" ;

const Index = (props) => {

  const [key, setKey] = useState('trad');

  return (
    <Fragment>
      <br></br>
      <br></br>
      <Tabs
        id="controlled-tab-example"
        bg = "dark"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="trad" title="J# Compiler">
          <br></br>
          <JSharpCompiler/>
        </Tab>
        <Tab eventKey="exec" title="3D Execution">
          <br></br>
        </Tab>
      </Tabs>

    </Fragment>
  );
};

export default Index;
