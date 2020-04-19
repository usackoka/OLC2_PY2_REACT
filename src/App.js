import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import "codemirror/theme/material.css"
import "codemirror/mode/javascript/javascript"
import "codemirror/mode/pascal/pascal"
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <Routes />
    );
  }
}

export default App;
