import React from 'react';
import { a } from 'react-router-dom';
import Logo from '../home/logo';
import "./navbar.css";
import { useState } from 'react';
import Notification from '../notification/Notification';
import Search from '../search/Search';
import Post from '../Post/Post';
import More from '../More/More';
export default function Navbar() {
  const[isOpen,setopen]= useState(false);
  let data=JSON.parse(localStorage.getItem("loginUser"));
  // if(!data){
  //   data={profilePic:"hello.jpg"}
  // }
  function Notificatio(){
   
      let a=document.getElementById("whole").style.display;
      if(a==="none"){
        document.getElementById("whole").style.display="inline-block";
        document.getElementById("morecont").style.display="none";
        document.getElementById("searchwhole").style.display="none";
        document.getElementById("post_cointainer").style.display="none";
      }
      else{
        document.getElementById("whole").style.display="none";
      }
  }
  function Searc(){
   
    let a=document.getElementById("searchwhole").style.display;
    if(a==="none"){
      document.getElementById("searchwhole").style.display="inline-block";
      document.getElementById("whole").style.display="none";
      document.getElementById("morecont").style.display="none";
      document.getElementById("post_cointainer").style.display="none";
    }
    else{
      document.getElementById("searchwhole").style.display="none";
    }
    }
  function Poss(){
   
      let a=document.getElementById("post_cointainer").style.display;
      if(a==="none"){
        document.getElementById("post_cointainer").style.display="inline-block";
        document.getElementById("whole").style.display="none";
        document.getElementById("morecont").style.display="none";
        document.getElementById("searchwhole").style.display="none";
        
      }
      else{
        document.getElementById("post_cointainer").style.display="none";
      }
    }
    function Mor(){
   
      let a=document.getElementById("morecont").style.display;
      if(a==="none"){
        document.getElementById("morecont").style.display="inline-block";
        document.getElementById("whole").style.display="none";
        document.getElementById("searchwhole").style.display="none";
        document.getElementById("post_cointainer").style.display="none";
      }
      else{
        document.getElementById("morecont").style.display="none";
      }
    }
    
  return (  
   
    <div id="navbar">
      
   
      <a href='' style={{color:"white"}}><Logo/>
      </a>
      
      <div className='navbarbut' onClick={Poss} >
       
        Post+
        <img  src='https://cdn4.vectorstock.com/i/1000x1000/20/33/house-icon-black-and-white-home-vector-24922033.jpg' id='homeimg'></img>
      </div>
      <a  href="messages" className='navbarbut'>
        Messages
        <img  src='https://i.pinimg.com/originals/d6/26/2f/d6262f6c8cf32db3ae992ed1489e503f.png' id='msgimg'></img>
      </a>
      <div className='navbarbut' onClick={Notificatio}>
        Notifications
        <img  src='https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-notification-icon-png-image_855007.jpg' id='notiimg'></img>
      </div>
      <div className='navbarbut' onClick={Searc}>
        Search
        <img  src='data:image/png;base64,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' id='searchimg'></img>
      </div>
      <a href='profile' className='navbarbut' >
        Profile
        <img  src={data.profilePic} id='profileimg'></img>
      </a>
      <div  className='navbarbut' id='morebut' onClick={Mor}>
        More
        <img  src='https://static.vecteezy.com/system/resources/thumbnails/002/292/406/small/hamburger-menu-line-icon-free-vector.jpg' id='moreimg'></img>
      </div>

      <Post/>
      <Notification/>
      <Search/>
      <More/> 
      
      

    </div>
    
    
    
  )
}
