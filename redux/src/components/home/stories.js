import React, { useEffect, useState }  from 'react'
import "./stories.css";
import axios from "axios";

export default function Stories() {
  const [storys,setstory]=useState({
    user_id:"",
    story:"",
    caption:"",
   type:""
  });
  let {story,caption}=storys;
  let [st,setSt]=useState([1,2]);
  
let data1=JSON.parse(localStorage.getItem("stories"));
useEffect(()=>{
  setSt(data1);
},[])
  let data=JSON.parse(localStorage.getItem("loginUser"));
  const onValChange=e=>{
    setstory({...storys,[e.target.name]:e.target.value,"user_id":data.user_id,"type":data.type});
   }
  
   const handleSubmit=()=>{
        axios.post("http://localhost:8000/Addstory",storys).then(res=>console.log(res.data.message));
        window.location.reload();
   }
   const showStory=()=>{
      let a=document.getElementById("story_container").style.display;
      document.getElementById("post").style.opacity=".5";
      if(a==="none"){
        document.getElementById("story_container").style.display="inline-block";
      }
      else{
        document.getElementById("story_container").style.display="none";
      }
   }
   const showsStory=(id)=>{
    let a=document.getElementById(id).style.display;
    
    if(a==="none"){
      document.getElementById(id).style.display="inline-block";
      
    }
    else{
      document.getElementById(id).style.display="none";
    }
    setTimeout(() => {
      document.getElementById(id).style.display="none";
    }, 10000);
 }
  return (
    <div id="stories">
       <div id='story_container'>
            <img id='story_img' src='https://cdn-icons-png.flaticon.com/512/7385/7385350.png'></img>
            <div id='story_head'>Enter the URL of the Image :</div>
            <input type="text" name="story" value={story} onChange={onValChange}></input>
            <div id='story_head'>Add caption :</div>
            <input type="text" name="caption" value={caption}onChange={onValChange}></input>
            <button id='but' onClick={handleSubmit}>submit</button>
        </div> 
        <div id="story" onClick={showStory}>
          <img src='https://png.pngtree.com/png-clipart/20190516/original/pngtree-button-plus-icon-png-image_3566853.jpg'></img>
        </div>
        
        {st?
          st.map(d=>(
            <div id="div_st">
              <div id={d.story_id} className='story_containers'>
                    <div i><div id="loadings"></div></div>
                    <img id='story_im' src={d.story}></img>
                </div>
              <div id="story" onClick={()=>showsStory(d.story_id)}>
                  
                  <img src={d.story} ></img>
              </div>
            </div>
          )):null
        }
        
    </div>
  )
}
