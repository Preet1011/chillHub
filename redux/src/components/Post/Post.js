import React, { useState } from 'react';
import './Post.css';
import axios from "axios";
const Post = () => {
  const [post,setPost]=useState({
    user_id:"",
    image:"",
    caption:"",
   type:""
  });
  let {user_id,image,caption}=post;
  
  let data=JSON.parse(localStorage.getItem("loginUser"));
  
  
 const onValChange=e=>{
  setPost({...post,[e.target.name]:e.target.value,"user_id":data.user_id,"type":data.type});
 }
 const handleSubmit=()=>{
  console.log(data.user_id);
  
console.log(post)
  axios.post("http://localhost:8000/AddPost",post).then(res=>console.log(res.data.message));
  window.location.reload();
 }
  
  return (
    <div>
        
        <div id='post_cointainer'>
            <img id='post_img' src='https://cdn-icons-png.flaticon.com/512/7385/7385350.png'></img>
            <div id='post_head'> Enter the URL of the Image : </div>
            <input type="text" name="image" value={image} onChange={onValChange}></input>
            <div id='post_head'> Add caption : </div>
            <input type="text" name="caption" value={caption}onChange={onValChange}></input>
            <button id='but' onClick={handleSubmit}>submit</button>
        </div> 
        
        
    </div>  
  )
}

export default Post;