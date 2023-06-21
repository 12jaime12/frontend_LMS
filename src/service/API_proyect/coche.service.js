import { API } from "./service.config";

//--------------------CREATE CAR----------------------
export const createCocheServicio = async (dataForm) => {
  return API.post("/coche/createCoche", dataForm)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//--------------------DELETE CAR----------------------
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
