import axios from "axios";
import { loginSuccess } from "./slice";

const apiUrl = "https://codaisseur-coders-network.herokuapp.com";
export const userLogin = (email, password) => async (dispatch, getState) => {
  const response = await axios.post(`${apiUrl}/login`, { email, password });
  //   console.log("response of userLogin from thunk", response.data);

  //we are getting jwt token response here .while dispatching dont forget to give the parameters inside dispatch(userLogin(email,password)). we are not using useEffect here to call this function bcoz we need not require this func to render the page whenever refreshed.
  const token = response.data.jwt;
  localStorage.setItem("token", token);
  //step2: now that we've token ,we need to use token to find the user profile.its a "get" req.
  const profileResponse = await axios.get(`${apiUrl}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  //   console.log("response of user profile", profileResponse.data);
  const profile = profileResponse.data;
  dispatch(loginSuccess({ token, profile }));
};

// step3:now that we has all the token and by using token we had the userprofile ,now we need to persist the data in local Storage.For that localstorage takes 3 parametres(setItem,getItem,removeItem) add localStorage.setItem("token",token) "token"=>key , token is the value .remember the order of passing.now,we r having token in localstorage.
export const persistLogin = () => async (dispatch, getState) => {
  const token = localStorage.getItem("token");
  //   console.log("persist token", token);
  if (!token) return;
  const profileResponse = await axios.get(`${apiUrl}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  //   console.log("response of user profile", profileResponse.data);
  const profile = profileResponse.data;
  dispatch(loginSuccess({ token, profile }));
};
