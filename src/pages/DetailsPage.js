import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getPostById } from "../store/posts/thunks";
import { selectComments, selectDetails } from "../store/posts/selectors";
const DetailsPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const getDetailsofPost = useSelector(selectDetails);
  const getComments = useSelector(selectComments);
  console.log("comments from selector", getComments);
  //   console.log("details selector", getDetailsofPost);
  const { id } = params;

  useEffect(() => {
    dispatch(getPostById(id));
  }, []);
  return (
    <div>
      <h2>detailspage</h2>
      {!getDetailsofPost ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>{getDetailsofPost.title}</h2>
          <h3>developer name:{getDetailsofPost.developer.name}</h3>
          <p>{getDetailsofPost.content}</p>
          <div>
            technologies:
            {getDetailsofPost.developer.technologies.map((p, i) => {
              return (
                <ul key={i}>
                  <li>{p.title}</li>
                </ul>
              );
            })}
          </div>
          <p>
            tags:
            {getDetailsofPost.tags.map((t, i) => {
              return (
                <span
                  key={i}
                  style={{
                    borderRadius: 5,
                    padding: 5,
                    fontWeight: "bold",
                    color: "white",
                    background: "#555",
                  }}
                >
                  {t.tag}
                </span>
              );
            })}
          </p>
        </div>
      )}
      <div>
        <h2 style={{ color: "green", textDecoration: "underline" }}>
          comments
        </h2>
        {!getComments ? (
          <p>Loading...</p>
        ) : (
          getComments.map((c) => {
            return (
              <div key={c.id}>
                <ul>
                  <li>{c.text}</li>
                </ul>
              </div>
            );
          })
        )}
      </div>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};
export default DetailsPage;
