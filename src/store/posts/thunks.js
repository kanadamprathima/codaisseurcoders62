import axios from "axios";
import { postsFetched, FetchById } from "./slice";

const apiUrl = "https://codaisseur-coders-network.herokuapp.com";
export const getPosts = () => async (dispatch, getState) => {
  //while adding thunks change the slice posts from null to [] then modify reducer with spread operator and then dispatch the action in loadmore button. check the offset declatarion ;like from getstate length.whrn u click the loadmore btn in homepage it loads the remaining items
  const offset = getState().posts.posts.length;
  const response = await axios.get(`${apiUrl}/posts?offset=${offset}&limit=4`);
  console.log("fetching posts", response.data.rows);
  dispatch(postsFetched(response.data.rows));
};

export const getPostById = (id) => async (dispatch, getState) => {
  const response = await axios.get(`${apiUrl}/posts/${id}`);
  const commentsResponse = await axios.get(`${apiUrl}/posts/${id}/comments`);
  //   console.log("one post response", response.data);
  console.log("comments res", commentsResponse.data.rows);
  dispatch(
    FetchById({ comment: commentsResponse.data.rows, post: response.data })
  );
  //   dispatch(FetchById(commentsResponse.data.rows));
};

///////THUNKS CONCEPT/////////////////////
// Thunks is a func which retuens a func like as middleware. its used to fetch the data from API. this accepts two parameters i.e.,dispatch n getstate. dispatch acts as dispatcing func(getter) and getState as a (selector). clg the response will be done once we called(diapatch in homepage) the func in page inside USEEFFECT (dispatch there) and now,u can see the console .then goto slie reducer and clg the action ,where it displays the response and for updating the reduxDev Tools we need to dispatch the reducer inside the thunk. &finally, use selectors to select and import that selectPosts selector in homepage as (const getAllposts = useSelector(selectPosts);) then render the results.
