import React from 'react'
import './More.css'
import {Link, useNavigate} from 'react-router-dom'

const More = () => {
  function Logout(){
    localStorage.clear();
    window.location.reload();
  }
  return (
    <div id='morecont'>
        <div className='morebut'> Settings </div>
        <div className='morebut'> report problem </div>
        <div className='morebut'> accounts </div>
        <div className='morebut' onClick={Logout}> Logout </div>
    
    </div>
  )
}

export default More