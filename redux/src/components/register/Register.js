import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import "./Register.css"; // import CSS file
import Logo from "../home/logo";
import Axios from 'axios';

function Register() {
  const navigate=useNavigate();
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
    
    const {username,password,email,name}=user;
    if(username&&password&&email&&name){
      Axios.post("http://localhost:8000/register",user).then(res=>{
        if(res.data.message==="registered"){
           navigate("/login");
        }else{
           alert(res.data.message);
        }
      });
    }
    else{
      alert("Please enter details")
    }
  }

  return (
    <div id="register-container">
    <div id="register-info"></div>
    <div className="register-container">
      
      <Logo/>
      <h1 ><img src="https://www.sitesvault.com/users/img/images/icons/icon_sign_up.png" style={{width:"30%",borderRadius:"50%"}}></img></h1>
      
    
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
        <td colSpan={2}><button type="submit" className="submit-button" onClick={handleSubmit}>Register</button></td></tr>
        </table>
    
     Already have account ?<Link to="/login"id="a"><b>Login</b></Link>
    </div>
    </div>
  );
}

export default Register;
