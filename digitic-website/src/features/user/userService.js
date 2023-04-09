  import axios from "axios";
import { base_url, config } from "../../util/axiosConfig";
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
      if(response.data)
      {
        localStorage.setItem("customer",JSON.stringify(response.data))
      }
    return response .data;
  }
};

const getUserWishlist=async()=>{
     const response = await axios.get(`${base_url}user/wishlist`, config);
      if (response.data) {
        console.log(response,"responce");
    return response.data;
  }
}

const AddToCart=async(cartData)=>{
  const response=await axios.post(`${base_url}user/cart`,cartData,config);
  if (response.data) {
    console.log(response,"responce");
      return response.data;

}
}

const getCart=async()=>{
  const response=await axios.get(`${base_url}user/cart`,config);
  if (response.data) {
    console.log(response,"responce");
      return response.data;

}
}


export const authService = {
  register,
  login,
  getUserWishlist,
  AddToCart,
  getCart
};
