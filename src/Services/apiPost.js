import { baseUrl, baseAlerta } from "../config/config";
import axios from "axios";


async function postApi(endpoint, formData, options = {}) {
  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json"
  };

  //const url = baseUrl+endpoint
  const url = endpoint;

  var data = await axios({
    method: "post",
    url: url,
    data: formData
  });

  return data;
}

const apiPost = {
  sendData: {
    personalData(formData) {
      return postApi(baseUrl + "datospersonales/add", formData);
    },
    contactoData(formData) {
      return postApi(baseUrl + "direccionycontacto/add", formData);
    },
    busquedaPersona(formData) {
      return postApi(baseUrl + "busqueda/get", formData);
    },
    busquedaDenuncia(formData) {
      return postApi(baseUrl + "busqueda/denuncia/list", formData);
    },
    advanceSearch(formData) {
      return postApi(baseUrl + "busqueda/list", formData);
    },
    narracionHechos(formData) {
      return postApi(baseUrl + "narraciondehechos/add", formData);
    },
    busquedaIntitucion(formData) {
      return postApi(baseUrl + "busqueda/institucion/list", formData);
    },
    perfil(formData) {
      return postApi(baseUrl + "perfil/add", formData);
    },
    alerta(formData) {
      return postApi(baseAlerta + "list/", formData);
    },
    SearchDenuncia(formData){
      return postApi(baseUrl + "busqueda/denuncia/list", formData);
    }
  }
};

export default apiPost;
