import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../services/callAPI";

import "./index.scss";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remenber, setRemenber] = useState(false);
  const [error, setError] = useState("")

  const token = useSelector((state) => state.signIn.token)
  if (remenber) {
    localStorage.setItem("token", token);
    //plutot un getitem qui va garder les info mail et mdp
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(auth({ email, password }));
      navigate("/profile");
    } catch (err) {
      setError("Email or Password is incorrect")
    }
  };

  return (
    <>
      <form  onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <span className="error-message">{error}</span>}
        </div>
        <div className="input-remember">
          <input
            type="checkbox"
            id="remember-me"
            checked={remenber}
            onChange={(e) => setRemenber(e.target.checked)}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button">Sign In</button>
      </form>
    </>
  );
}
