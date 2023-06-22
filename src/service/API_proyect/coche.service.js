import { updateToken } from "../../util/updateToken";
import { API } from "./service.config";

//--------------------CREATE CAR----------------------
export const createCocheServicio = async (dataForm) => {
  return API.post("/coche/createCoche", dataForm, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//--------------------DELETE CAR----------------------
export const deleteCocheServicio = async (id) => {
  return API.delete(`/coche/deleteCoche/${id}`, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//--------------------GET ALL-------------------------
export const getAllCochesOcasion = async () => {
  return API.get("/coche")
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//--------------------GET BY ID----------------------
export const getCocheById = async (id) => {
  return API.get(`/coche/coche/${id}`)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//--------------------GET BY MODELO-------------------
//--------------------GET BY LIKES--------------------
//--------------------GET BY MARCA--------------------
//--------------------ADD INTERESADO------------------
//--------------------ADD LIKE------------------------
//--------------------ADD TALLER----------------------
