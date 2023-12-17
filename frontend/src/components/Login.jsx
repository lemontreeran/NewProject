import React, { useState } from "react";
import "./../css/login.css";
import axios from "axios";

const Login = ({ formData, setFormData, onLogin }) => {
   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = (e) => {
      axios
         .post("http://localhost:8000/api/token/", {
            username: formData.username,
            password: formData.password,
         })
         .then(function (res) {
            console.log(res);
            localStorage.setItem("refresh_token", res.data.refresh);
            localStorage.setItem("user", res.config.data);
            window.location.href = "/";
         })
         .catch(function (err) {
            console.log(err);
         });
      e.preventDefault();
   };

   return (
      <div className='login-container'>
         <form onSubmit={handleSubmit} className='login-form'>
            <h2>Login</h2>
            <img src='https://img.freepik.com/free-vector/world-with-landmarks-flat-style_23-2147765177.jpg?w=740&t=st=1702786129~exp=1702786729~hmac=eca9ed1a9e1a62948504b943a07b168b480d33f169e8359f8290b285448b87dc' height='600' width='600' />

            <div className='form-group'>
               <label htmlFor='username'>Country name</label>
               <input type='text' id='username' name='username' value={formData.username} onChange={handleChange} placeholder='Enter your username' />
            </div>
            <div className='form-group'>
               <label htmlFor='password'>Password</label>
               <input type='password' id='password' name='password' value={formData.password} onChange={handleChange} placeholder='Enter your password' />
            </div>
            <button className='login-button' type='submit'>
               Login
            </button>
         </form>
      </div>
   );
};

export default Login;
