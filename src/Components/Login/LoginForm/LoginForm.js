import React, { Component } from "react";
//import { withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { setMenu } from "../../../actions/actions";
import {baseUrl} from "../../../config/config"
//libreria para encriptar password
import Cryptr from "cryptr";
import { withRouter } from "react-router-dom";
//libreria de alertas
import Swal from 'sweetalert2';
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // message : this.props.location.state ? this.props.location.state.message: '',
    };
  }

  pass = ""

  signIn = async () => {

    const cryptr = new Cryptr("Jes-plataforma1");
    let cont = cryptr.encrypt(this.pass);
    const data = { user: this.user, pass: cont };
    const requestInfo = {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    };



    fetch(baseUrl + "sso/USER_AUTHENTICATION", requestInfo)

      .then(response => {

        if (response.ok) {

          return response.json();
        }
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Login Invalido!',
          footer: 'Verifique Usuario y Contraseña!'
        })
        throw new Error("Login inválido...");
      })
      .then(res => {
        if (res.valid) {
          let data = res.info[0];
          localStorage.setItem("token", res.token);
          console.log(localStorage.getItem("token"))
          localStorage.setItem("menu", JSON.stringify(data));
          const menu = res.info;
          this.props.setMenu(menu[0]);
          //console.log("res info", res.info);
          //console.log(this.props);

          this.props.history.push("/home", {
            data: menu
          });
          return;
        }
        this.setState({ message: "Respuesta Invalida!" });
      })
      .catch(e => {
        console.dir(e.message);
        this.setState({ message: e.message });
      });
  };


  render() {
    return (
      <Form className="form-horizontal m-t-20 text-center" id="loginform">
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="correo-icon">
              <FontAwesomeIcon icon={faUser} />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Ingrese su correo"
            aria-label="Correo"
            aria-describedby="correo-icon"
            id="user"
            onChange={e => (this.user = e.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="contrasenia-icon">
              <FontAwesomeIcon icon={faKey} />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Ingrese su contraseña"
            aria-label="Correo"
            type="password"
            aria-describedby="contrasenia-icon"
            id="pass"
            onChange={e => (this.pass = e.target.value)}
          />
        </InputGroup>
        <Button
          variant="secondary"
          onClick={this.signIn}
          className="btn btn-block btn-lg btn-secondary"
        >
          Iniciar sesión
        </Button>
      </Form>
    );
  }
}
//export default withRouter (LoginForm);
const mapStateToProps = state => {
  return {
    menu: state.menu
  };
};

const mapDispatchToProps = {
  setMenu
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginForm));
