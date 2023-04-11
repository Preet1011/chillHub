import React, { useState } from 'react'
import "./home.css";
import Navbar from '../layout/navbar';
import Stories from './stories';
import Notices from './Notice/Notices';
import Notification from '../notification/Notification';
export default function Home() {
    




      



  return (
    
    <div id="home">
        <Navbar/>
        <Stories/>
        <Notices/>
        <div id='extra_div'></div>
        <div id="post">
            
            <div id="post_header">
              <div id="dp"></div>
              <div id="name">Preet Tyagi<img id="blue" src='https://images.herzindagi.info/image/2022/Dec/how-to-get-blue-tick-on-twitter-price-followers.jpg'></img><br/><span>Admin</span></div>
            </div>
            <div id="post_content">
                <img id="img" src='https://media.licdn.com/dms/image/D4D35AQFUAHmJj30cnQ/profile-framedphoto-shrink_400_400/0/1668580700462?e=1681232400&v=beta&t=loF3y-bV0ce54ok4vkFCg27X6Xa2MkumUixUmES_6CY'></img>
            </div>
            <div id="post_footer">
                <span>like</span>
                <span>comments</span>
                <span> share</span>
            </div>
        </div>
        <div id="post">
            <div id="post_header">
              <div id="dp"></div>
              <div id="name">Montu Garg<img id="blue" src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Eo_circle_light-blue_checkmark.svg/640px-Eo_circle_light-blue_checkmark.svg.png'></img><br/><span>Admin</span></div>
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
        
        <div id="post">
            <div id="post_header">
              <div id="dp"></div>
              <div id="name">Himanshu Sharma<img id="blue" src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Eo_circle_light-blue_checkmark.svg/640px-Eo_circle_light-blue_checkmark.svg.png'></img><br/><span>Admin</span></div>
            </div>
            <div id="post_content">
                <img id="img" src='https://media.licdn.com/dms/image/D5635AQGPv1IfcEuspQ/profile-framedphoto-shrink_400_400/0/1669385190283?e=1681232400&v=beta&t=jSuk85pwB0JTXCIdIYRU9aGFfBh1MwIVyXFqFPeq5rc'></img>
            </div>
            <div id="post_footer">
                <span>like</span>
                <span>comments</span>
                <span> share</span>
            </div>
        </div>
        
        <div id="post">
            <div id="post_header">
              <div id="dp"></div>
              <div id="name">Paras Ramola<img id="blue" src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Eo_circle_light-blue_checkmark.svg/640px-Eo_circle_light-blue_checkmark.svg.png'></img><br/><span>Admin</span></div>
            </div>
            <div id="post_content">
                <img id="img" src='https://media.licdn.com/dms/image/C4D16AQEu1j-IVQ8KXg/profile-displaybackgroundimage-shrink_350_1400/0/1668577944699?e=1686182400&v=beta&t=3KnNIa-GjhKMQ_iOz9YhXo__z-R_pUjNi8KAyxLab6w'></img>
            </div>
            <div id="post_footer">
                <span>like</span>
                <span>comments</span>
                <span> share</span>
            </div>
        </div>
        <div id="post">
            <div id="post_header">
              <div id="dp"></div>
              <div id="name">Hrithik Roshan<img id="blue" src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Eo_circle_light-blue_checkmark.svg/640px-Eo_circle_light-blue_checkmark.svg.png'></img><br/><span>Admin</span></div>
            </div>
            <div id="post_content">
                <img id="img" src='https://www.pinkvilla.com/english/images/2023/02/2112593490_hrithik-roshan-fighter-ready_1280*720.jpg'></img>
            </div>
            <div id="post_footer">
                <span>like</span>
                <span>comments</span>
                <span> share</span>
            </div>
        </div>
        <div id="post">
            <div id="post_header">
              <div id="dp"></div>
              <div id="name">Avneet Kaur<img id="blue" src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Eo_circle_light-blue_checkmark.svg/640px-Eo_circle_light-blue_checkmark.svg.png'></img><br/><span>Admin</span></div>
            </div>
            <div id="post_content">
                <img id="img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwwy4mFJ1pMxZFdLKgDGho9SX1HZBberXZOA&usqp=CAU'></img>
            </div>
            <div id="post_footer">
                <span>like</span>
                <span>comments</span>
                <span> share</span>
            </div>
        </div>
        <div id="post">
            <div id="post_header">
              <div id="dp"></div>
              <div id="name">Snam Bajwa<img id="blue" src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Eo_circle_light-blue_checkmark.svg/640px-Eo_circle_light-blue_checkmark.svg.png'></img><br/><span>Admin</span></div>
            </div>
            <div id="post_content">
                <img id="img" src='https://i.pinimg.com/736x/be/f5/25/bef525c075090214acdb73312d08ba01.jpg'></img>
            </div>
            <div id="post_footer">
                <span>like</span>
                <span>comments</span>
                <span> share</span>
            </div>
        </div>
        <div id="post">
            <div id="post_header">
              <div id="dp"></div>
              <div id="name">Kiara Advani<img id="blue" src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Eo_circle_light-blue_checkmark.svg/640px-Eo_circle_light-blue_checkmark.svg.png'></img><br/><p>Admin</p></div>
            </div>
            <div id="post_content">
                <img id="img" src='https://images.herzindagi.info/image/2022/Dec/how-to-get-blue-tick-on-twitter-price-followers.jpg'></img>
            </div>
            <div id="post_footer">
                <span>like</span>
                <span>comments</span>
                <span> share</span>
            </div>
        </div>
        
        <div id="extra_div"></div>
        
    </div>
  )

}

