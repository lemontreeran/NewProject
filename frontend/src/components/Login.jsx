import React, { useState } from "react";
import "./../css/login.css"; // Import your CSS file for styling
import axios from "axios";

const Login = ({ formData, setFormData, onLogin }) => {
  // const [formData, setFormData] = useState({
  //   username: "",
  //   password: "",
  // });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // onLogin(formData);
    axios
      .post("http://localhost:8000/api/token/", {
        username: formData.username,
        password: formData.password,
      })
      .then(function (res) {
        console.log(res);
        localStorage.setItem("refresh_token", res.data.refresh);
        localStorage.setItem("user", res.config.data);
        window.location.href = "/"
      })
      .catch(function (err) {
        console.log(err);
      });
    e.preventDefault();
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
