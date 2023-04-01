import React from 'react'
import "./home.css";
export default function Home() {
  return (
    <div id="home">
        <div id="post">
            <div id="post_header">
              <div id="dp"></div>
              <div id="name">Himanshu Sharma<img id="blue" src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Eo_circle_light-blue_checkmark.svg/640px-Eo_circle_light-blue_checkmark.svg.png'></img><br/><span>Admin</span></div>
            </div>
            <div id="post_content">
                <img id="img" src='https://media.licdn.com/dms/image/D4D03AQFSXt5X9BfN5Q/profile-displayphoto-shrink_800_800/0/1678370042568?e=1685577600&v=beta&t=7iEg1J__sU_i1fmUTywSzA7Na7EJwo6exT-urjidKV0'></img>
            </div>
            <div id="post_footer">
                <span>like</span>
                <span>comments</span>
                <span> share</span>
            </div>
        </div>
        <div id = "Notice_board">notice</div>
        
    </div>
  )
}
