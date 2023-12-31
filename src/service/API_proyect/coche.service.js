import { updateToken } from '../../util/updateToken';
import { API } from './service.config';

//--------------------CREATE CAR----------------------
export const createCocheServicio = async (dataForm) => {
  return API.post('/coche/createCoche', dataForm, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//--------------------add SERVICE------------------
export const createServiceTaller = async (dataId) => {
<<<<<<< HEAD
  return API.post("/coche/addTaller", dataId, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
=======
  return API.post('/coche/addTaller', dataId)
>>>>>>> 8d7f7d658cfc142793f3a2eff563ca980b4e4884
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
//--------------------UPDATE -------------------------
export const updateCocheServicio = async (id, data) => {
  return API.patch(`/coche/updateCoche/${id}`, data, {
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
  return API.get('/coche')
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
export const getByMarca = async (marca) => {
  return API.get(`/coche/marca/${marca}`, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//--------------------get-coche-venta------------------

export const getCochesVenta = async () => {
  return API.get(`/coche/getCocheVenta`, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//--------------------ADD LIKE------------------------
//--------------------ADD TALLER----------------------
