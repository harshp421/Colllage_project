import axios from "axios";
import { base_url, config } from "../../util/axiosConfig";

const getProducts = async (userDate) => {
  const response = await axios.get(`${base_url}product`);
  console.log(response.data, "api");
  if (response.data) {
    return response.data;
  }
};

const getSingleProduct = async (id) => {
  const response = await axios.get(`${base_url}product/${id}`);
  console.log(response.data, "Single api");
  if (response.data) {
    return response.data;
  }
};

const addToWishList = async (productId) => {
  const response = await axios.put(
    `${base_url}product/wishlist`,
    { productId },
    config
  );
  console.log(response.data, "api");
  if (response.data) {
    return response.data;
  }
};

export const productService = {
  getProducts,
  addToWishList,
  getSingleProduct,
};
