import React from 'react'
import Navbar from '../layout/navbar'
import './messages.css'
export default function Messages() {
  return (
    
    <div style={{background:"#f2f2f2",height:"100vh"}}>
       <Navbar/> 
       <div id="extra_div"></div>
       <div id="messages">
        <table id="table">
            <tr >
                <td className="message_list">
                <div id="person">
                <div id="story"><img className='messages_img' src='https://media.licdn.com/dms/image/D4D03AQHAk5ebHt7UGA/profile-displayphoto-shrink_800_800/0/1677352595179?e=2147483647&v=beta&t=0vblM4UkoUQePymhqF4wG4hGf6lf0zohS6iRLrKDqlg'></img></div>
                <h3>montu_garg007<h6 style={{marginTop:"vh"}}>admin</h6></h3>
                
                </div>
                </td>
                <td className="message_name">
                <div id="person">
                    <div id="story"><img className='messages_img' src='https://media.licdn.com/dms/image/D4D03AQE7bYYSihOjEA/profile-displayphoto-shrink_800_800/0/1672579664217?e=2147483647&v=beta&t=MwtDMrSpfZz4hJLWAcFsOgiESHx0C70oYIkWGDbLBYs'></img></div>
                <h3>paras_ramolaaa</h3>
                </div>

                 
                </td>
            </tr>
            <tr >
                <td className="message_list">
                   <div style={{overflowY:"scroll"}}>
                    <div id="person">
                    <div id="story"><img className='messages_img' src='https://media.licdn.com/dms/image/D4D03AQE7bYYSihOjEA/profile-displayphoto-shrink_800_800/0/1672579664217?e=2147483647&v=beta&t=MwtDMrSpfZz4hJLWAcFsOgiESHx0C70oYIkWGDbLBYs'></img></div>
                <h3>paras_ramolaaa</h3>
                    </div>
                    <div id="person"></div>
                    <div id="person"></div>
                    <div id="person"></div>
                    <div id="person"></div>
                    <div id="person"></div>
                    <div id="person"></div>
                    <div id="person"></div>
                    <div id="person"></div>
                    
                    </div>

                </td>
                <td className='message_name'>
                    <h1 id="mes"><img className='messages_img' src='https://thumbs.dreamstime.com/b/send-web-icon-isolated-white-background-message-symbol-website-app-etc-184030033.jpg' width={"150px"}></img><br></br>Messages</h1>
                </td>
            </tr>
        </table>

       </div>
    </div>
  )
}
