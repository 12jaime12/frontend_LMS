import { API } from "./service.config";
import { updateToken } from "../../util/updateToken";
//--------------get-by-marca-base--------------
export const getMarcaBase = async (marca) => {
  return API.get(`/catalogo/getMarca/${marca}`, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//--------------get-by-id----------------------
export const getById = async (id) => {
  return API.get(`/catalogo/getById/${id}`, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//--------------create-catalogo----------------
export const createCatalogo = async (formData) => {
  return API.post(`/catalogo/create`, formData, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
