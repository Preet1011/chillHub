import React from 'react'
import "./Profile.css"
import Navbar from '../layout/navbar'

function Profile() {
    function editpro(){
   
        let a=document.getElementById("edit_whole").style.display;
        if(a=="none"){
          document.getElementById("edit_whole").style.display="inline-block";
          
        }
        else{
          document.getElementById("edit_whole").style.display="none";
        }
        }
    return (
        <div  >
            <Navbar/>
            <div id='profile_container'>
                <div id="profile_card">
                    <img id="profile_pic" src='https://i0.wp.com/hindimeinfo.com/wp-content/uploads/2023/03/shree-ram-dp-00013-91.png?resize=400%2C400&ssl=1'></img>
                    <h2 className='text' id='username'>Hiimanshuuu_</h2><br></br>
                

                </div>
                <div id="profile_follow">
                    <div className='follow'><h3>0</h3><h4>posts</h4></div>
                    <div className='follow'><h3>0</h3><h4>followers</h4></div>
                    <div className='follow'><h3>0</h3><h4>following</h4></div>
                </div>
                <div id="profile_btn">
            
                <div id='edit_profile' onClick={editpro}> Edit
                </div>
                <button id='edit_profile' ><a href='messages'>Message</a></button>
                </div>
            </div>
            
            </div>

            

        
        
    )   
}

export default Profile