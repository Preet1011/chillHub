import React from 'react'
import Navbar from '../layout/navbar';
import './Edit.css'

const Edit = () => {
  return (
    <div id='edit_whole' >
    
    

        <div id='edit_container'>
            <div id='editheader'>
                <a href='profile'><img id='editprofile_img' src="https://i0.wp.com/hindimeinfo.com/wp-content/uploads/2023/03/shree-ram-dp-00013-91.png?resize=400%2C400&ssl=1"></img></a>
                <h3 id='usernamee'>hiimanshuuu_ </h3>
                <a id='edit_a' href='upload'>change profile</a>
                
            </div>
            <form id='formnoflex'>
                <div id='form_content'>
                <div id='leftchild'>
                        Name
                    </div>
                    <div id='rightchild'>
                        <input type='text' defaultValue={"Himanshu sharma"} id='inpbut'></input>
                        <p id='discription'>Help people discover your account by using the name you're known by: either your full name, nickname, or business name.</p>
                    </div>
                </div>
                <div id='form_content'>
                <div id='leftchild'>
                       User Name
                    </div>
                    <div id='rightchild'>
                        <input type='text' defaultValue={"Hiimanshuuu_"} id='inpbut'></input>
                        <p id='discription'>in most cases, you'll be able to change your username back to hiimanshuuu_ for another 14 days</p>
                    </div>
                </div>
                <div id='form_content'>
                <div id='leftchild'>
                        Website
                    </div>
                    <div id='rightchild'>
                        <input type='text' defaultValue={"CHILLHUB"} id='inpbut'></input>
                        <p id='discription'>add your website if you have any link</p>
                    </div>
                </div>
                <div id='form_content'>
                <div id='leftchild'>
                        Bio
                    </div>
                    <div id='rightchild'>
                        <input type='text' defaultValue={"Hiimanshuuu_"} id='inpbut'></input>
                        <p id='discription'>Help people discover your account by using the name you're known by: either your full name, nickname, or business name.</p>
                    </div>
                </div>
                <div id='form_content'>
                <div id='leftchild'>
                        Email
                    </div>
                    <div id='rightchild'>
                        <input type='text' defaultValue={"himannshu0296.be20@chitkara.edu.in"} id='inpbut'></input>
                        <p id='discription'></p>
                    </div>
                </div>
                <div id='form_content'>
                <div id='leftchild'>
                        Phone number
                    </div>
                    <div id='rightchild'>
                        <input type='text' defaultValue={"6284953103"} id='inpbut'></input>
                        <p id='discription'></p>
                    </div>
                </div>

                    
            
            </form>

        </div>

        
        
    </div>
   
  )
}

export default Edit;