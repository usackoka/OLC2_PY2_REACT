const reducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_DATAPERSONASELECCIONADA":
      return {
        ...state,
        dataPersonaSeleccionada: [action.payload]
      };
    case "SET_MENU":
      return {
        ...state,
        menu: [action.payload]
      };
    case "SET_CATALOGS":
      return {
        ...state,
        catalogs: [action.payload]
      };
    case "SET_CATDEPTOS":
      return {
        ...state,
        catDeptos: [action.payload]
      };

    case "SET_CATMODAL":
      return {
        ...state,
        catModal: [action.payload]
      };

    case "SET_DATAPERSONA":
      return {
        ...state,
        dataPersona: [action.payload]
      };

    case "SET_PERSONALDATA":
      return {
        ...state,
        personalData: [action.payload]
      };

    case "SET_PERSONALDATA2":
      return {
        ...state,
        personalData2: [action.payload]
      };

    case "SET_DIRECCIONCONTACTO":
      return {
        ...state,
        direccionContacto: [action.payload]
      };

    case "SET_NARRACIONHECHOS":
      return {
        ...state,
        narracionHechos: [action.payload]
      };

    case "SET_LISTINSTITUCION":
      return {
        ...state,
        listInstitucion: [action.payload]
      };

      case "SET_DERIVACIONSELECCIONADA":
        return {
          ...state,
          derivacionSeleccionada: [action.payload]
        };

      case "SET_NEWS":
        return {
          ...state,
          news: [action.payload]
        };

      case "SET_PERFIL":
        return {
          ...state,
          perfil: [action.payload]
        };


    default:
      return state;
  }
};

export default reducer;
