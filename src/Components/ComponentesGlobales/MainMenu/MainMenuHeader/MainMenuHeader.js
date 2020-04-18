import React from 'react';
import MPLogo from '../../MPLogo/MPLogo';
import styles from './MainMenuHeader.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faToggleOn} from '@fortawesome/free-solid-svg-icons';

const MainMenuHeader = ( props ) => {

  return(
    <div className={styles.navBarHeader}>
      <div className="navbar-brand d-flex justify-content-center">
        { /*logo needs to be conditional on user login */ }
        <a href="/home" className={styles.logoText}><span><MPLogo /></span></a>
        <span className={styles.togglerIcon}><FontAwesomeIcon icon={faToggleOn}/></span>
      </div>
    </div>
  );

}

export default MainMenuHeader;
