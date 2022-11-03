import axios from "axios";

const apiUrl = "https://codaisseur-coders-network.herokuapp.com";
export const userLogin = (email, password) => async (dispatch, getState) => {
  const response = await axios.post(`${apiUrl}/login`, { email, password });
  console.log("response of userLogin from thunk", response.data);
  //we are getting jwt token response here .while dispatching dont forget to give the parameters inside dispatch(userLogin(email,password)). we are not using useEffect here to call this function bcoz we need not require this func to render the page whenever refreshed.
  const token = response.data.jwt;
};
