import axios from "axios";
import { postsFetched } from "./slice";

const apiUrl = "https://codaisseur-coders-network.herokuapp.com";
export const getPosts = () => async (dispatch, getState) => {
  const response = await axios.get(`${apiUrl}/posts`);
  console.log("fetching posts", response.data.rows);
  dispatch(postsFetched(response.data.rows));
};
