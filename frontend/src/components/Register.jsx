import React, { useEffect, useState } from "react";
import "./../css/register.css";
import axios from "axios";

const Register = ({ onRegister }) => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const handleSubmit = (e) => {
      axios
         .post("http://localhost:8000/account/api/register", {
            username: username,
            password: password,
         })
         .then(function (res) {
            console.log(res);
            console.log(res.data.refresh);
            console.log(res.config.data);
            localStorage.setItem("refresh_token", res.data.refresh);
            localStorage.setItem("user", res.config.data);
            window.location.href = "/login";
         })
         .catch(function (err) {
            console.log(err);
         });
      e.preventDefault();
   };

   return (
      <div className='form-container'>
         <form onSubmit={handleSubmit} className='vertical-form'>
            <div className='form-group'>
               <label htmlFor='username'>Username</label>
               <input
                  type='text'
                  name='username'
                  id='username'
                  value={username}
                  onChange={(e) => {
                     setUsername(e.target.value);
                  }}
               />
            </div>
            <div className='form-group'>
               <label htmlFor='password'>Password</label>
               <input
                  type='text'
                  name='password'
                  id='password'
                  value={password}
                  onChange={(e) => {
                     setPassword(e.target.value);
                  }}
               />
            </div>
            <button type='submit' className='register-button'>
               Register
            </button>
         </form>
      </div>
   );
};

export default Register;
