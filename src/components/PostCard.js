import { Link } from "react-router-dom";
const PostCard = (props) => {
  return (
    <div>
      {/* <h2>component</h2> */}
      <Link to={`/${props.id}`}>
        <h2>{props.title}</h2>
      </Link>
      <p>{props.date}.</p>{" "}
      <p>
        tags:
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
          {props.tags}
        </span>
      </p>
      {/* <p>{props.des}</p> */}
    </div>
  );
};
export default PostCard;
