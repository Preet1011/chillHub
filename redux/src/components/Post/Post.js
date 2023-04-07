import React from 'react';
import Navbar from '../layout/navbar';
import Home from '../home/home';
import './Post.css';

const Post = () => {
  return (
    <div>
        <Navbar/>
        <div id='post_cointainer'>
            <img id='post_img' src='https://cdn-icons-png.flaticon.com/512/7385/7385350.png'></img>
            <div id='post_head'> Drag photos and videos here </div>
            <button id='but'>Select from computer</button>

        </div> 
        
        <Home/>
    </div>  
  )
}

export default Post;