import { baseUrlStrapi } from "../config/config";
import { baseUrl } from "../config/config";

import axios from "axios";

async function postApi(endpoint, formData, options = {}) {
  options.headers = {
    "Content-Type": "multipart/form-data"
  };

  const url = endpoint;

  var data = await axios({
    method: "post",
    url: url,
    data: formData,
    options
  });

  return data;
}

const apiPost = {
  sendData: {
    noticias(formData) {
      return postApi(baseUrlStrapi + "noticias", formData);
    },
    perfil(formData) {
      return postApi(baseUrl + "perfil/add", formData);
    }
  }
};

export default apiPost;
