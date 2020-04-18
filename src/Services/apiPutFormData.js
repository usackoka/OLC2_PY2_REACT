import { baseUrlStrapi } from "../config/config";

import axios from "axios";

async function putApi(endpoint, formData, options = {}) {
  options.headers = {
    "Content-Type": "multipart/form-data"
  };

  const url = endpoint;

  var data = await axios({
    method: "put",
    url: url,
    data: formData,
    options
  });

  return data;
}

const apiPut = {
  sendData: {
    noticias(formData, id) {
      return putApi(baseUrlStrapi + "noticias/"+id, formData);
    },
  }
};

export default apiPut;
