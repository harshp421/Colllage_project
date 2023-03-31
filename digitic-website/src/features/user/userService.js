  import axios from "axios";
import { base_url } from "../../util/axiosConfig";
const register = async (userDate) => {
  const response = await axios.post(`${base_url}user/register`, userDate);
  if (response.data) {
    return response.data;
  }
};

const login = async (userDate) => {
  const response = await axios.post(`${base_url}user/login`, userDate);
  console.log(response.data);
  if (response.data) {
    return response .data;
  }
};


export const authService = {
  register,
  login
};
