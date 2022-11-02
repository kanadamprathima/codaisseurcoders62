import { useEffect } from "react";
import React from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts } from "../store/posts/selectors";
import { getPosts } from "../store/posts/thunks";
const HomePage = () => {
  const dispatch = useDispatch();
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
              <h2>{item.title}</h2>
              {/* <p>{item.content}</p> */}
              <p>
                {moment(item.createdAt).format("DD-MM-YYYY")}&bull;
                <span
                  className="tags"
                  style={{
                    borderRadius: 5,
                    padding: 5,
                    fontWeight: "bold",
                    color: "white",
                    background: "#555",
                  }}
                >
                  {item.tags.map((tag, index) => {
                    return (
                      <React.Fragment key={index}>
                        <span>{tag.tag}</span>
                      </React.Fragment>
                    );
                  })}
                </span>
              </p>
            </div>
          );
        })
      )}
    </div>
  );
};
export default HomePage;
