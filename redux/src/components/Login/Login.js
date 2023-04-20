import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import "./Login.css"; // import CSS file
import Logo from "../home/logo";
import Axios from "axios"
function Login({setLogin}) {
  const navigate=useNavigate();

  const [user,setUser]=useState({
    username:"",
    password:""
  });
  const {username,password}=user;
  const onValChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  }

  const handleSubmit = () => {
    const {username,password}=user;
    if(username&&password){
      Axios.post("http://localhost:8000/login",user).then(res=>{
        if(res.data.message==="Login Successfully"){
          setLogin(true);
          localStorage.setItem("loginUser",JSON.stringify(res.data.user));
           navigate("/");
        }else{
           alert(res.data.message);
        }
      });
    }
    else{
      alert("Please enter details")
    }
    

    
  };

  return (
    <div id="login-container">
    <div id="login-info"></div>
    <div className="login-container">
      
      <Logo/>
      <h1 ><img src="https://download.logo.wine/logo/Microsoft_account/Microsoft_account-Logo.wine.png" style={{width:"30%",borderRadius:"50%"}}></img></h1>
      
      
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={onValChange}
            className="input-field"
          />
        </label>
        <br/>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={onValChange}
            className="input-field"
          />
        </label><br/>
        <button type="submit" className="submit-button" onClick={handleSubmit}>Submit</button>
      <br></br>
     Don't have account ? <Link to="/register"id="a"><b>Register</b></Link>
    </div>
    </div>
  );
}

export default Login;
