import React from 'react'
import Navbar from '../layout/navbar'
import './Notification.css'
import Home from '../home/home'

const Notification = () => {
  return (
    <div id="whole" >
        <Navbar/>
        <div id="notifybody" >
            <h1>NOTIFICATIONS</h1>
            <h3 className='notify_head'>Follow requests</h3>
            <ul id=" follow_request">
                <li>Preet tyagi follow you</li>
                <li>Montu just follow you</li>
                <li>Montu just follow you</li>
                <li>Montu just follow you</li>
                <li>Montu just follow you</li>
                <li>Montu just follow you</li>

            
            </ul>
            <h3 className='notify_head'> All Notifications </h3>
            <ul id="all">
               
                <li>parsa like your post</li>
                <li>montu commented on you post</li>
                <li>parsa like your post</li>
                <li>montu commented on you post</li>
                <li>parsa like your post</li>
                <li>montu commented on you post</li>
                <li>parsa like your post</li>
                
                

            </ul>

    
         
        
        </div>


        <Home/>
        <div id="notifybody" >
            <h1>NOTIFICATIONS</h1>
            <h3 className='notify_head'>Follow requests</h3>
            <ul id=" follow_request">
                <li>Preet tyagi follow you</li>
                <li>Montu just follow you</li>
                <li>Montu just follow you</li>
                <li>Montu just follow you</li>
                <li>Montu just follow you</li>
                <li>Montu just follow you</li>

            
            </ul>
            <h3 className='notify_head'> All Notifications </h3>
            <ul id="all">
               
                <li>parsa like your post</li>
                <li>montu commented on you post</li>
                <li>parsa like your post</li>
                <li>montu commented on you post</li>
                <li>parsa like your post</li>
                <li>montu commented on you post</li>
                <li>parsa like your post</li>
                
                

            </ul>

    
         
        
        </div>

    </div>
  )
}

export default Notification