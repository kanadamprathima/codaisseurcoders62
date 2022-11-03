import { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../store/user/thunks";
import "./Login.css";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("kelley@codaisseur.com");
  const [password, setPassword] = useState("abcd");
  const navigator = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(userLogin(email, password));
    //navigate to home page to see all products

    console.log("login credentials", email, password);
    navigator("/");
  };

  return (
    <section className="login">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-title">
          <h2>Login</h2>
          <p>Please login using below acccount </p>
        </div>
        <div className="login-input-container">
          <label>Email Address</label>
          <input
            required
            type="text"
            value={email}
            id="login-email-text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login-input-container">
          <label>Password</label>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="login-query">
          {/* need to navigate to mailid for reseting/recovering pwd */}
          <p>Forgot your password?</p>
        </div>
        <div className="login-button">
          <button
            type="submit"
            onClick={() => dispatch(userLogin(email, password))}
          >
            Login
          </button>
        </div>
        {/* <div className="login-query">
          <Link to="/signup">
            <p>Don't have an acccount? create account</p>
          </Link>
        </div> */}
      </form>
    </section>
  );
};
export default LoginPage;
