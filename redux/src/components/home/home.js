import React from 'react'
import "./home.css";
export default function Home() {
  return (
    <div id="home">
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
    </div>
  )
}
