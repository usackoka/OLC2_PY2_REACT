import React, { Component } from 'react';
import Routes from './routes';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faFolderOpen,
  faFileMedical,
  faUsers,
  faCalendarAlt,
  faChartBar,
  faNewspaper,
  faClipboardList,
  faQuestionCircle,
  faPhone,
  faEnvelope,
  faLanguage,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";

library.add(faHome,
  faFolderOpen,
  faFileMedical,
  faUsers,
  faCalendarAlt,
  faChartBar,
  faNewspaper,
  faClipboardList,
  faQuestionCircle,
  faPhone,
  faEnvelope,
  faLanguage,
  faLocationArrow
  );

class App extends Component {
  render() {
    return (
      <Routes />
    );
  }
}

export default App;
