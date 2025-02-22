import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/recipes"); 
  };

  return (
    <div className="container">
            <div className="bg"> </div>

      <form onSubmit={handleLogin}>
        <h2 className="heading">LOG!N --: </h2>

        <label htmlFor="email">Email: </label>
        <input type="email" id="email" required />

        <label htmlFor="password">Password: </label>
        <input type="password" id="password" required />

        <button className="login-btn" type="submit">Login</button>
        <span className="register-btn">Don't have an account?</span>
      </form>
    </div>
  );
};

export default Login;
