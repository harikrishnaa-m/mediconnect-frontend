import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";

export const getAllDoctorsAPI = async () => {
  return await commonAPI("GET", `${serverURL}/api/getAllDoctors`, null, null);
};

export const getADoctorAPI = async (id) => {
  return await commonAPI(
    "GET",
    `${serverURL}/api/getADoctor/${id}`,
    null,
    null
  );
};

export const makepaymentAPI = async (reqBody) => {
  return await commonAPI("POST", `${serverURL}/api/makepayment`, reqBody, null);
};

export const googleSigninAPI = async (reqBody) => {
  return await commonAPI(
    "POST",
    `${serverURL}/api/googlesignin`,
    reqBody,
    null
  );
};

export const loginAPI = async (reqBody) => {
  return await commonAPI("POST", `${serverURL}/api/login`, reqBody, null);
};

export const registerAPI = async (reqBody) => {
  return await commonAPI("POST", `${serverURL}/api/register`, reqBody, null);
};
