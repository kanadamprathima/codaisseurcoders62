import axios from "axios";
import { postsFetched, FetchById } from "./slice";

const apiUrl = "https://codaisseur-coders-network.herokuapp.com";
export const getPosts = () => async (dispatch, getState) => {
  const response = await axios.get(`${apiUrl}/posts`);
  //   console.log("fetching posts", response.data.rows);
  dispatch(postsFetched(response.data.rows));
};

export const getPostById = (id) => async (dispatch, getState) => {
  const response = await axios.get(`${apiUrl}/posts/${id}`);
  //   console.log("one post response", response.data);
  dispatch(FetchById(response.data));
};
