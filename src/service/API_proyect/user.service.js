import { API } from "./service.config";

//------------------register-------------------------
export const registerUser = async (formData) => {
  return API.post("/user/register", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//---------------------verify-code-------------------
