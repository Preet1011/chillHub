import React, { useEffect, useState } from 'react'
import Navbar from '../layout/navbar';
import './Edit.css'
import axios from 'axios';

const Edit = () => {
    let data=JSON.parse(localStorage.getItem("loginUser"));
    const [user,setUser]=useState({
        name:"",
        username:"",
        website:"",
        bio:"",
        phone:"",
        email:"",
        profilePic:"",
        user_id:""
    });
    useEffect(()=>{
        setUser(data);
    },[])
    const {name,username,website,bio,email,phone,profilePic}=user;
    const onValChange=e=>{
        setUser({...user,[e.target.name]:e.target.value,"user_id":data.user_id});
       
    }
    const edit=()=>{
        axios.post("http://localhost:8000/editUser",user).then(res=>localStorage.setItem("loginUser",JSON.stringify(res.data.result[0])));
         window.location.reload();
    }
  return (
    <div id='edit_whole' >
        <div id='edit_container'>
            <div id='editheader'>
                <a href='profile'><img id='editprofile_img' src={data.profilePic}></img></a>
                <h3 id='usernamee'>{data.username}</h3>
                <button id='edit_a' onClick={edit}>change profile</button>
                
            </div>
            <form id='formnoflex'>
                <div id='form_content'>
                <div id='leftchild'>
                        Name
                    </div>
                    <div id='rightchild'>
                        <input type='text' name="name" value={name} onChange={onValChange} id='inpbut'></input>
                        <p id='discription'>Help people discover your account by using the name you're known by: either your full name, nickname, or business name.</p>
                    </div>
                </div>
                <div id='form_content'>
                <div id='leftchild'>
                       User Name
                    </div>
                    <div id='rightchild'>
                        <input type='text' name="username" value={username} onChange={onValChange} id='inpbut'></input>
                        <p id='discription'>in most cases, you'll be able to change your username back to hiimanshuuu_ for another 14 days</p>
                    </div>
                </div>
                <div id='form_content'>
                <div id='leftchild'>
                        Website
                    </div>
                    <div id='rightchild'>
                        <input type='text' name="website" value={website} onChange={onValChange} id='inpbut'></input>
                        <p id='discription'>add your website if you have any link</p>
                    </div>
                </div>
                <div id='form_content'>
                <div id='leftchild'>
                        Bio
                    </div>
                    <div id='rightchild'>
                        <input type='text' name="bio" value={bio} onChange={onValChange} id='inpbut'></input>
                        <p id='discription'>Help people discover your account by using the name you're known by: either your full name, nickname, or business name.</p>
                    </div>
                </div>
                <div id='form_content'>
                <div id='leftchild'>
                        Email
                    </div>
                    <div id='rightchild'>
                        <input type='text' name="email" value={email} onChange={onValChange}id='inpbut'></input>
                        <p id='discription'></p>
                    </div>
                </div>
                <div id='form_content'>
                <div id='leftchild'>
                        Phone number
                    </div>
                    <div id='rightchild'>
                        <input type='text' name="phone" value={phone} onChange={onValChange} id='inpbut'></input>
                        <p id='discription'></p>
                    </div>
                </div>
                <div id='form_content'>
                <div id='leftchild'>
                        Image URL :
                    </div>
                    <div id='rightchild'>
                        <input type='text' name="profilePic" value={profilePic} onChange={onValChange}id='inpbut'></input>
                        <p id='discription'></p>
                    </div>
                </div>
                    
            
            </form>

        </div>

        
        
    </div>
   
  )
}

export default Edit;