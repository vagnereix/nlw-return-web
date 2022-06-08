import axios from "axios";

export const api = axios.create({
  //import.meta bescause we are using Vite bundle
  baseURL: import.meta.env.VITE_API_URL,
});
