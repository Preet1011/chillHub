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
        <div className='morebut'><a  href='profile'> Settings </a></div>
        <a  href='profile'><div className='morebut'> accounts </div></a>
        <div className='morebut' onClick={Logout}> Logout </div>
    
    </div>
  )
}

export default More