import { useEffect } from "react";
import React from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts } from "../store/posts/selectors";
import { selectUser } from "../store/user/selectors";
import { getPosts } from "../store/posts/thunks";
import PostCard from "../components/PostCard";
const HomePage = () => {
  const dispatch = useDispatch();
  const alluser = useSelector(selectUser);
  const getAllposts = useSelector(selectPosts);
  //   console.log("allposts on homepage", getAllposts);
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <div>
      <h2>home page</h2>
      {!getAllposts ? (
        <p>Loading...</p>
      ) : (
        getAllposts.map((item) => {
          return (
            <div key={item.id}>
              <PostCard
                id={item.id}
                title={item.title}
                date={moment(item.createdAt).format("DD-MM-YYYY")}
                tags={item.tags.map((tag, index) => {
                  return (
                    <React.Fragment key={index}>
                      <span>{tag.tag}</span>
                    </React.Fragment>
                  );
                })}
                des={item.content}
              />
            </div>
          );
        })
      )}
      <button onClick={() => dispatch(getPosts())}>Loadmore</button>
    </div>
  );
};
export default HomePage;
