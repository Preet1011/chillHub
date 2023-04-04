import React, { useState } from "react";
import {Link} from 'react-router-dom'
import "./Login.css"; // import CSS file
import Logo from "../home/logo";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
    // handle login logic here
  };

  return (
    <div id="login-container">
    <div id="login-info"></div>
    <div className="login-container">
      
      <Logo/>
      <h1 ><img src="https://download.logo.wine/logo/Microsoft_account/Microsoft_account-Logo.wine.png" style={{width:"30%",borderRadius:"50%"}}></img></h1>
      
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            className="input-field"
          />
        </label>
        <br/>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="input-field"
          />
        </label><br/>
        <button type="submit" className="submit-button">Submit</button>
      </form>
     Don't have account ? <Link to="/register"><b>Register</b></Link>
    </div>
    </div>
  );
}

export default Login;
