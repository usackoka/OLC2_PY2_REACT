import { Component } from 'react';
//libreria de alertas
import Swal from 'sweetalert2';
export default class Logout extends Component {

    logout(){
        Swal.fire({
            title: '¿Quieres Cerrar Sesion?',
            text: "Si cierras sesion tendras que ingresar nuevamente!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, quiero Salir!'
          }).then((result) => {
            if (result.value) {
                localStorage.removeItem('token');
                this.props.history.push('/');
              Swal.fire(
                'Exelente',
                'Cerro Sesion Correctamente',
                'success'
              )
            }else{
                this.props.history.push('/home');
            }
          })
    }

    componentWillMount() {
        this.logout();
    }


    render() {
        return null;
    }
}