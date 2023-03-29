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
                <img id="img" src='https://media.licdn.com/dms/image/D4D03AQFXQYX23QGp-A/profile-displayphoto-shrink_200_200/0/1668580690175?e=1683158400&v=beta&t=skZJLrmzl1TQo7XoN8Hdabu5wBouWKKz3F7h90IzNzI'></img>
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
