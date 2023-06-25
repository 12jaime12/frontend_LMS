import { updateToken } from "../../util/updateToken";
import { API } from "./service.config";

export const createComentario = async (formData) => {
  return API.post("comentarios/create", formData)
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
