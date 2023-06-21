import { API } from "./service.config";
import { updateToken } from "../../util/updateToken";
//--------------get-by-marca-base--------------
export const getMarcaBase = async (marca) => {
  return API.get(`/getMarca/${marca}`, {
    headers: {
      Authorization: `Bearer ${updateToken}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
