import React, { Fragment } from "react";
import { Col, Row} from "react-bootstrap";
import styles from "./ViewHome.module.scss";
import {UnControlled as CodeMirror} from 'react-codemirror2'

const Index = (props) => {

  return (
    <Fragment>
      <br></br>
      <br></br>
    <CodeMirror
      options={{
        mode: 'javascript',
        theme: 'monokai',
        lineNumbers: true,
        keymap:"sublime"
      }}
      onChange={(editor, data, value) => {
      }}
    />
    </Fragment>
  );
};

export default Index;
