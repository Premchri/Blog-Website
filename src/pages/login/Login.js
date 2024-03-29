import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
    <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input type="text" placeholder="Enter The email..." />
        <label>Password</label>
        <input type="password" placeholder="Enter The password..." />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">Register</button>
    </div>
  );
}

export default Login;
