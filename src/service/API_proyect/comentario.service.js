import { updateToken } from "../../util/updateToken";
import { API } from "./service.config";

export const createComentario = async (formData) => {
  return API.post("comentarios/create", formData)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
