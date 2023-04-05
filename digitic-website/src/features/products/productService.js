import axios from "axios";
import { base_url } from "../../util/axiosConfig";

const getProducts = async (userDate) => {
  const response = await axios.get(`${base_url}product`);
  console.log(response.data,'api');
  if (response.data) {
    return response .data;
  }
};


export const productService = {
 getProducts,
};
