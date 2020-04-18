
import axios from "axios";
import {baseUrl} from "../config/config"
async function ApiPut(endpoint, formData, options = {}) {
  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json"
  };

  //const url = baseUrl+endpoint
  const url = endpoint;

  var data = await axios({
    method: "PUT",
    url: url,
    data: formData
  });

  return data;
}

const apiPut = {
  sendData: {
    personalData(formData) {
      return ApiPut(baseUrl + "datospersonales/update1", formData);
    },
    personalData2(formData) {
      return ApiPut(baseUrl + "datospersonales/update2", formData);
    },
    direccionYContacto(formData) {
      return ApiPut(baseUrl + "direccionycontacto/update", formData);
    },
    narracionYHechos(formData) {
      return ApiPut(baseUrl + "narraciondehechos/update", formData);
    }
  }
};

export default apiPut;
