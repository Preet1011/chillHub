import React from 'react'
import "./Profile.css"
import Navbar from '../layout/navbar'

function Profile() {
    return (
        <div id="whole">
            <Navbar/>
            <div id="profile_card">
                <img id="profile_pic" src='https://i0.wp.com/hindimeinfo.com/wp-content/uploads/2023/03/shree-ram-dp-00013-91.png?resize=400%2C400&ssl=1'></img>
                <h2 className='text' id='username'>Hiimanshuuu_</h2>
                <button id='edit_profile'>Edit Profile</button>

            </div>

            <div id="hightlights">
                <div id="light"></div>
                <div id="light"></div>

                <div id="light"></div>
             </div>

        </div>
        
    )   
}

export default Profile