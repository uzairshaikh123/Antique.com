import axios from "axios";
import * as types from "../Redux/type";

const getProducts = () => {
  return "";
};

const registeruser = async (data) => async (dispatch)=>{
  dispatch({type:types.LOADING})
  try {
    let newuser = await axios.post("http://localhost:8080/signup", data);
    dispatch({type:types.SIGNUP,payload:newuser.data.token})
    console.log(newuser)
    return newuser;
  } catch (error) {
    dispatch({type:types.ERROR})
    return error;
  }
};
const Loginuser = async (data) => async (dispatch)=>{
  dispatch({type:types.LOADING})
  try {
    let user = await axios.post("http://localhost:8080/login", data);
    console.log(user)
    dispatch({type:types.LOGIN,payload:user.data.token})
    return user;
  } catch (error) {
    dispatch({type:types.ERROR})
    return error;
  }
};

export { getProducts, registeruser, Loginuser };
