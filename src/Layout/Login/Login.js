import React from 'react';
import styles from './Login.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginSidebar from '../../Components/Login/LoginSidebar/LoginSidebar';
import LoginForm from '../../Components/Login/LoginForm/LoginForm';
import LoginTitle from '../../Components/Login/LoginTitle/LoginTitle';

const loginLayout = ( props ) => {
  return(
    <Row className={styles.authWrapper}>
      <LoginSidebar />
      <Col lg={8} xl={8} className="right-col-login d-flex justify-content-center">
        <div className={styles.authBox}>
          <LoginTitle />
          <LoginForm />
        </div>
      </Col>
    </Row>
  );

}

export default loginLayout;
