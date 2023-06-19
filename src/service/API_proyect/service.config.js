import axios from "axios";
import { updateToken } from "../../util/updateToken";

const APIHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  Authorization: `Bearer ${updateToken()}`,
};

export const API = axios.create({
  baseURL: `http://localhost:8088/api/v1`,
  headers: APIHeaders,
  timeout: 60000,
});
