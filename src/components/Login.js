import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        await axios.post("http://localhost:5000/api/users/register", { email, password });
      } else {
        const response = await axios.post("http://localhost:5000/api/users/login", { email, password });
        console.log(response.data)
        if (response.data) {
          navigate("/recipes");
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <div className="bg"></div>
      <form onSubmit={handleSubmit}>
        <h2 className="heading">{isRegistering ? "Register" : "Login"}</h2>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className="login-btn" type="submit">{isRegistering ? "Register" : "Login"}</button>
        <span className="register-btn" onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? "Already have an account? Login" : "Don't have an account? Register"}
        </span>
      </form>
    </div>
  );
};

export default Login;