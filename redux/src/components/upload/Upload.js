import React from 'react'

import Edit from '../Edit/Edit.js'
import './Upload.css'

const Upload = () => {
  return (

    <div >
        <Edit/>
        <div id='uploadcontainer'>
            <img id='uploadimg' src='https://icons-for-free.com/iconfiles/png/512/linecolor+version+svg+camera-1319964493060503417.png'></img>
            <div id='headupload'><h1>change profile photo</h1></div>
            <button type='submit' id='removebut'>REMOVE</button>
            <a href='edit' id='cancel'>Cancel</a>
            
            
        
         </div>
    </div>

  )
}

export default Upload