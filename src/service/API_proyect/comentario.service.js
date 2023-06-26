import { updateToken } from "../../util/updateToken";
import { API } from "./service.config";

export const createComentario = async (formData) => {
  return API.post("comentarios/create", formData, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

export const getAllComentarios = async () => {
  return API.get("/comentarios/getAll", {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

//-------------------get-by-id-------------
export const getByCoche = async (id) => {
  return API.get(`/comentarios/getByCoche/${id}`, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//--------------------get-by-catalogo-----------
export const getByCatalogo = async (id) => {
  return API.get(`/comentarios/getByCatalogo/${id}`, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
