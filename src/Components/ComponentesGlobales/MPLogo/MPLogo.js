import React from 'react';
import styles from './MPLogo.module.css';
import logoImg from '../../../assets/images/logos/MP-logo-blanco.png';

const MPLogo = ( props ) => {
  return(
    <img
    className={styles.logoImg}
    src={logoImg}
    alt="Mp Logo" />
  );
}

export default MPLogo;
