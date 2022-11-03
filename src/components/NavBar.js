import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../store/user/slice";
const NavBar = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/login">Login</Link>
      <br />
      <Link to="/login">
        <button onClick={() => dispatch(logOut())}>LOG OUT</button>
      </Link>
    </div>
  );
};
export default NavBar;
