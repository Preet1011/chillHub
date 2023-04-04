import React, { useState } from "react";
import {Link} from 'react-router-dom'
import "./Register.css"; // import CSS file
import Logo from "../home/logo";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
            value={username}
            onChange={handleUsernameChange}
            className="input-field"
          />
        </td>
        </tr>
        <tr>
          <td>Name:</td>
          <td><input
            type="text"
            value={name}
            onChange={handleUsernameChange}
            className="input-field"
          />
        </td>
        </tr>
        <tr>
          <td>Email:</td>
          <td><input
            type="Email"
            value={email}
            onChange={handleUsernameChange}
            className="input-field"
          />
        </td>
        </tr>
        <tr>
          <td>Password:</td>
          <td><input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="input-field"
          />
        </td></tr>
        <tr >
        <td colSpan={2}><button type="submit" className="submit-button">Register</button></td></tr>
        </table>
      </form>
     Already have account ?<Link to="/login"><b>Login</b></Link>
    </div>
    </div>
  );
}

export default Register;
