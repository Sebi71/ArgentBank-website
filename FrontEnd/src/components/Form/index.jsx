import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { auth, profile } from "../../services/callAPI";
import Loader from "../Loader";

import "./index.scss";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const error = useSelector((state) => state.signIn.error);
  const loading = useSelector((state) => state.signIn.loading);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const checkedRemember = localStorage.getItem("remember");
    const emailValue = localStorage.getItem("email");
    const passwordValue = localStorage.getItem("password");

    if (checkedRemember === "true" && emailValue && passwordValue) {
      setEmail(emailValue);
      setPassword(passwordValue);
      setRemember(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(auth({ email, password }));

    if (remember) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("remember", remember.toString());
    } else {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      localStorage.removeItem("remember");
    }

    navigate("/profile");
    await dispatch(profile())
  };

  const handleRememberChange = (e) => {
    setRemember(e.target.checked);

    if (!e.target.checked) {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      localStorage.removeItem("remember");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
    {loading ? (
      <Loader />
    ) : (
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {error && <span className="error-message">{error}</span>}
        </div>
        <div className="input-remember">
          <input
            type="checkbox"
            id="remember-me"
            checked={remember}
            onChange={handleRememberChange}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button">Sign In</button>
      </form>
    )}
    </>
  );
}
