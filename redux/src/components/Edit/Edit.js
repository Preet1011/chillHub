import React from 'react'
import Navbar from '../layout/navbar';
import './Edit.css'

const Edit = () => {
  return (
    <div >
    
    

        <div id='edit_container'>
            <div id='editheader'>
                <img id='editprofile_img' src="https://i0.wp.com/hindimeinfo.com/wp-content/uploads/2023/03/shree-ram-dp-00013-91.png?resize=400%2C400&ssl=1"></img>
                <h3 id='usernamee'>hiimanshuuu_ </h3>
                <a id='edit_a' href='upload'>change profile</a>
                
            </div>

        </div>

        
        <Navbar/>
    </div>
   
  )
}

export default Edit;