import { updateToken } from '../../util/updateToken';
import { API } from './service.config';

//--------------------get-by-marca---------------
export const getMarcaCocheBase = async (marca) => {
  return API.get(`/cochebase/getByMarca/${marca}`, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//--------------------get-by-id----------------
export const getByIdCocheBase = async (id) => {
  return API.get(`/cochebase/getById/${id}`, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
