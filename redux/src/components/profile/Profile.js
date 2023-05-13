import React, { useEffect, useState } from 'react'
import "./Profile.css"
import Edit from '../Edit/Edit';

function Profile() {
    let data=JSON.parse(localStorage.getItem("loginUser"));
    let data1=JSON.parse(localStorage.getItem("posts"));
    console.log(data1); 
    const [count,setCount]=useState(0);
    let a=0
    function countPost(){
        data1.map(post=>{
            if(post.user_id===data.user_id){
                a=a+1;
                
            }
    
         })
         setCount(a/2);
    }

    function editpro(){
   
        let a=document.getElementById("edit_whole").style.display;
        if(a==="none"){
          document.getElementById("edit_whole").style.display="inline-block";
          
        }
        else{
          document.getElementById("edit_whole").style.display="none";
        }
    }
    return (
        <div onLoad={countPost} >
            {/* <Navbar/> */}
            <Edit/>
            <div id='profile_container'>
                <div id="profile_card">
                   <span style={{width:"11vw",height:"22vh"}}> <img id="profile_pic" src={data.profilePic} alt='upload.ls'></img></span>
                    <h2 className='text' id='username' style={{marginLeft:"36vw"}}>{data.username}</h2><br></br>
                </div>
                <div id="profile_follow">
                    <div className='follow'><h3>{count}</h3><h4>posts</h4></div>
                    <div className='follow'><h3>0</h3><h4>followers</h4></div>
                    <div className='follow'><h3>0</h3><h4>following</h4></div>
                </div>
                <div id="profile_btn">
                    <div id='edit_profile' onClick={editpro}> Edit</div>
                    <button id='edit_profile' ><a href='messages'>Message</a></button>
                </div>
            </div>
            <div id="post_line">
                
            </div>
            </div>

            

        
        
    )   
}

export default Profile