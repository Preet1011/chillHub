import React from 'react';
import { a } from 'react-router-dom';
import "./navbar.css";
export default function Navbar() {
  return (
    
    <div id="navbar">
      <a href='home'>
      <div class="hub">
        <span>Chill</span>
        <span>Hub</span>
      </div>
      </a>
      
      <h2>
        <a href="post">Post +</a>
      </h2>
      <h2>
        <a href="messages">Messages</a>
      </h2>
      <h2>
        <a href="Notification"> Notifications</a>
      </h2>
      <h2>
        <a href="Search">Search</a>
      </h2>
      <h2>
        <a href="Profile">Profile</a>
      </h2>

    </div>
    
  )
}
