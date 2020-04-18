import axios from "axios";
import { baseUrlStrapi, baseAlerta, baseUrl } from "../config/config";


async function getApi(endpoint, token , options = {} ) {
  //var token = token
  if (token) {
    options.headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      token: token
    };
  }else {
    options.headers = {
      "Content-Type": "application/json",
      Accept: "application/json"
    };
  }
  

  //const url = baseUrl+endpoint
  const url = endpoint;
  const data = await axios.get(url, options);
  return data;
}

const api = {
  generalData: {
    async catalogs() {
      const data = await getApi(baseUrlStrapi + "tbdiccionarios/");
      return data;
    },
    async catDeptos() {
      return await getApi(baseUrlStrapi + "departamentos/");
    },
    async catModal() {
      const data = await getApi(baseUrlStrapi + "tbmodalinfos/");
      return data;
    },
    async news() {
      const data = await getApi(
        baseUrlStrapi + "noticias/?_start=0&_limit=10&_sort=id:DESC"
      );
      return data;
    },
    async alertas() {
      return await getApi(baseAlerta + "list/");
    },
    async perfil(token) {
      return await getApi(baseUrl + "perfil/get", token );
    },
  }
};

export default api;

//export default connect(mapStateToProps, mapDispatchToProps)(api);
