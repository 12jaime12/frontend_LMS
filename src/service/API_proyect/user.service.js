import { updateToken } from '../../util/updateToken';
import { API } from './service.config';

//------------------register-------------------------
export const registerUser = async (formData) => {
  return API.post('/user/register', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//---------------------verify-code-------------------
export const checkCode = async (formData) => {
  return API.post('/user/checkCode', formData)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//---------------------resend-code-------------------
export const resendCode = async (formData) => {
  return API.post('/user/resendCode', formData)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//---------------------autologin---------------------
export const autologinUser = async (formData) => {
  return API.post('/user/autologin', formData)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//---------------------login-------------------------
export const loginUser = async (formData) => {
  return API.post('/user/login', formData)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//---------------------sendPassword------------------
export const sendPassword = async (formData) => {
  return API.patch('/user/sendPassword/:id', formData)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//---------------------changePassword----------------
export const changePassword = async (formData) => {
  return API.patch('user/changePassword', formData, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//---------------------forgotPassword----------------
export const forgotPassword = async (formData) => {
  return API.patch('/user/forgotPassword', formData)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//---------------------updateUser--------------------
export const updateUser = async (formData) => {
  console.log('formData', formData);
  return API.patch('/user/updateUser', formData, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
      'Content-Type': 'multipart/form-data',
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//---------------------deleteUser--------------------
export const deleteUser = async () => {
  return API.delete('/user/deleteUser', {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//---------------------add like----------------------
export const addLike = async (dataId) => {
  console.log(dataId);
  return API.patch('/coche/addLike', dataId, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

//---------------------getAllUser--------------------
export const getAllUser = async () => {
  return API.get('/user/')
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//---------------------getByIdUser-------------------
export const getByIdUser = async (id) => {
  return API.get(`user/id/${id}`)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//--------------------getByRolUser-------------------
export const getByRolUser = async () => {
  return API.get('/user/rol/taller/')
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
