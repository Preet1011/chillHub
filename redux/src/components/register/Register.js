import React, { useState } from "react";
import {Link} from 'react-router-dom'
import "./Register.css"; // import CSS file
import Logo from "../home/logo";
import axios from 'axios';

function Register() {
  const [user,setUser]=useState({
    username:"",
    name:"",
    email:"",
    password:""
  });
  const {name,username,email,password}=user;
  const onValChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  }
  const handleSubmit=()=>{
    // alert("hello");
    // const [name,username,email,password]=user;
    // if(name&&username&&email&&password){
      //  axios.post("http://localhost:8000/register",user).then(res=>console.log(res));
    // }
    // else {
    //   alert("not valid");
    // }
  }

  return (
    <div id="register-container">
    <div id="register-info"></div>
    <div className="register-container">
      
      <Logo/>
      <h1 ><img src="https://www.sitesvault.com/users/img/images/icons/icon_sign_up.png" style={{width:"30%",borderRadius:"50%"}}></img></h1>
      
      <form onSubmit={handleSubmit}>
      <table>
        <tr>
          <td>Username:</td>
          <td><input
            type="text"
            name="username"
            value={username}
            onChange={onValChange}
            className="input-field"
          />
        </td>
        </tr>
        <tr>
          <td>Name:</td>
          <td><input
            type="text"
            name="name"
            value={name}
            onChange={onValChange}
            className="input-field"
          />
        </td>
        </tr>
        <tr>
          <td>Email:</td>
          <td><input
            type="Email"
            name="email"
            value={email}
            onChange={onValChange}
            className="input-field"
          />
        </td>
        </tr>
        <tr>
          <td>Password:</td>
          <td><input
            type="password"
            name="password"
            value={password}
            onChange={onValChange}
            className="input-field"
          />
        </td></tr>
        <tr >
        <td colSpan={2}><button type="submit" className="submit-button">Register</button></td></tr>
        </table>
      </form>
     Already have account ?<Link to="/login"id="a"><b>Login</b></Link>
    </div>
    </div>
  );
}

export default Register;
