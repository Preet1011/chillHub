import React, { useState } from 'react'
import "./home.css";
import Navbar from '../layout/navbar';
import Stories from './stories';
import Notices from './Notice/Notices';
import Notification from '../notification/Notification';
export default function Home() {
    




      



  return (
    
    <div id="home" >
        {/* <Navbar/> */}
        
        <Stories/>
        <Notices/>
        
        <div id='extra_div'></div>
        <div id="post" >
            
            <div id="post_header">
              <div id="dp"><img src='https://i0.wp.com/hindimeinfo.com/wp-content/uploads/2023/03/shree-ram-dp-00013-91.png?resize=400%2C400&ssl=1'></img></div>
              <div id="name">Himanshu Sharma<img id="blue" src='https://images.herzindagi.info/image/2022/Dec/how-to-get-blue-tick-on-twitter-price-followers.jpg'></img><br/><span>Admin</span></div>
            </div>
            <div id="post_content">
                <img id="img" src='https://media.licdn.com/dms/image/D5635AQGPv1IfcEuspQ/profile-framedphoto-shrink_400_400/0/1669385190283?e=1681981200&v=beta&t=5_NwsZAFfk35ldZjLbmVVfLGCdPs_-kDDfAeKO5UqeU'></img>
            </div>
            <div id="post_footer">
                <span>like</span>
                <span>comments</span>
                <span> share</span>
            </div>
        </div>
        <div id="post" >
            
            <div id="post_header">
              <div id="dp"><img src='https://media.licdn.com/dms/image/D4D35AQHXZdmMGnJW6A/profile-framedphoto-shrink_400_400/0/1672579666115?e=1681981200&v=beta&t=OXblR5gIBfaHv8XL4h13anzRQh0DPaBnzThTJGmd1I8'></img></div>
              <div id="name">Paras ramola<img id="blue" src='https://images.herzindagi.info/image/2022/Dec/how-to-get-blue-tick-on-twitter-price-followers.jpg'></img><br/><span>Admin</span></div>
            </div>
            <div id="post_content">
                <img id="img" src='https://media.licdn.com/dms/image/C4D16AQEu1j-IVQ8KXg/profile-displaybackgroundimage-shrink_350_1400/0/1668577944699?e=1686787200&v=beta&t=dzZhFIO0EUHcsWsIQs-nBT1QAVE4X6a1I9r1So9Ofj4'></img>
            </div>
            <div id="post_footer">
                <span>like</span>
                <span>comments</span>
                <span> share</span>
            </div>
        </div>
        <div id="post" >
            
            <div id="post_header">
              <div id="dp"><img src='https://media.licdn.com/dms/image/D4D03AQHAk5ebHt7UGA/profile-displayphoto-shrink_100_100/0/1677352595179?e=1686787200&v=beta&t=leCdfJWhmsUGO0HJLeiyB4N9P5s6h_Ogn3ZWqLHn9bE'></img></div>
              <div id="name">Monru garg<img id="blue" src='https://images.herzindagi.info/image/2022/Dec/how-to-get-blue-tick-on-twitter-price-followers.jpg'></img><br/><span>Admin</span></div>
            </div>
            <div id="post_content">
                <img id="img" src='https://media.licdn.com/dms/image/D4D03AQHAk5ebHt7UGA/profile-displayphoto-shrink_800_800/0/1677352595179?e=2147483647&v=beta&t=0vblM4UkoUQePymhqF4wG4hGf6lf0zohS6iRLrKDqlg'></img>
            </div>
            <div id="post_footer">
                <span>like</span>
                <span>comments</span>
                <span> share</span>
            </div>
        </div>
        <div id="post" >
            
            <div id="post_header">
              <div id="dp"><img src='https://media.licdn.com/dms/image/D4D35AQFUAHmJj30cnQ/profile-framedphoto-shrink_400_400/0/1668580700462?e=1681984800&v=beta&t=l4ZVJ5AYxRsCnMf6a6i7sYmmoLL0ZJMPnzxP5j0leII'></img></div>
              <div id="name">Preet tyagi<img id="blue" src='https://images.herzindagi.info/image/2022/Dec/how-to-get-blue-tick-on-twitter-price-followers.jpg'></img><br/><span>Admin</span></div>
            </div>
            <div id="post_content">
                <img id="img" src='https://biharfeed.com/wp-content/uploads/2020/09/IMG_20200920_142602.jpg'></img>
            </div>
            <div id="post_footer">
                <span>like</span>
                <span>comments</span>
                <span> share</span>
            </div>
        </div>
        <div id="post" >
            
            <div id="post_header">
              <div id="dp"><img src='https://media.licdn.com/dms/image/D5635AQESaTNh4QbFiQ/profile-framedphoto-shrink_400_400/0/1681278466022?e=1681984800&v=beta&t=qLy7vomDMEetNvEINiFo9kMCR2cW80OXfrvlaBQZWkY'></img></div>
              <div id="name">Daler mehndi<img id="blue" src='https://images.herzindagi.info/image/2022/Dec/how-to-get-blue-tick-on-twitter-price-followers.jpg'></img><br/><span>Admin</span></div>
            </div>
            <div id="post_content">
                <img id="img" src='https://m.media-amazon.com/images/M/MV5BNzAzNjc5MmItMTEyMC00M2I2LWI2ZGEtODA2NjM1NzU2NWFkXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg'></img>
            </div>
            <div id="post_footer">
                <span>like</span>
                <span>comments</span>
                <span> share</span>
            </div>
        </div>
        <div id="post" >
            
            <div id="post_header">
              <div id="dp"><img src='https://i0.wp.com/hindimeinfo.com/wp-content/uploads/2023/03/shree-ram-dp-00013-91.png?resize=400%2C400&ssl=1'></img></div>
              <div id="name">Himanshu Sharma<img id="blue" src='https://images.herzindagi.info/image/2022/Dec/how-to-get-blue-tick-on-twitter-price-followers.jpg'></img><br/><span>Admin</span></div>
            </div>
            <div id="post_content">
                <img id="img" src='https://media.licdn.com/dms/image/D5635AQGPv1IfcEuspQ/profile-framedphoto-shrink_400_400/0/1669385190283?e=1681981200&v=beta&t=5_NwsZAFfk35ldZjLbmVVfLGCdPs_-kDDfAeKO5UqeU'></img>
            </div>
            <div id="post_footer">
                <span>like</span>
                <span>comments</span>
                <span> share</span>
            </div>
        </div>
        <div id="post" >
            
            <div id="post_header">
              <div id="dp"><img src='https://i0.wp.com/hindimeinfo.com/wp-content/uploads/2023/03/shree-ram-dp-00013-91.png?resize=400%2C400&ssl=1'></img></div>
              <div id="name">Himanshu Sharma<img id="blue" src='https://images.herzindagi.info/image/2022/Dec/how-to-get-blue-tick-on-twitter-price-followers.jpg'></img><br/><span>Admin</span></div>
            </div>
            <div id="post_content">
                <img id="img" src='https://media.licdn.com/dms/image/D5635AQGPv1IfcEuspQ/profile-framedphoto-shrink_400_400/0/1669385190283?e=1681981200&v=beta&t=5_NwsZAFfk35ldZjLbmVVfLGCdPs_-kDDfAeKO5UqeU'></img>
            </div>
            <div id="post_footer">
                <span>like</span>
                <span>comments</span>
                <span> share</span>
            </div>
        </div>
    </div>
  )

}

