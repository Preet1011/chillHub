import React, { useEffect, useState } from 'react'
import Navbar from '../layout/navbar'
import './messages.css'
import axios from 'axios';
export default function Messages() {
    const [chat,setChat]=useState({});
    const [msg,setMsg]=useState([]);
    const [mess,setmess]=useState([]);
    let data=JSON.parse(localStorage.getItem("loginUser"));
  let data2=JSON.parse(localStorage.getItem("Friends"));
  let data3=JSON.parse(localStorage.getItem("users"));
  let a=JSON.parse(localStorage.getItem("chatP"));
  useEffect(()=>{
    
    if(a){
        setChat(a);
    }
    loadChat();

  },[])
  const loadChat=()=>{
    axios.get("http://localhost:8000/getMsg").then(res=>setMsg(res.data.resu));

    console.log("chats",msg);
  }
  const [person,setPerson]=useState({
    user_id1:"",
    user_id2:"",
    chats:""
  });
  const {chats}=person;
  const onValChange=(e)=>{
    setPerson({...person,[e.target.name]:e.target.value,"user_id1":data.user_id,"user_id2":chat.user_id});
  }
  const submit=()=>{
    setMsg(msg.push(person));
    axios.post("http://localhost:8000/addMsg",person).then(res=>setMsg(res.data.resu));
    
    loadChat();
    // selectChat(a);
    // window.location.reload();
  }
  const filChat=()=>{
        let a=[];
        msg.map(i=>{
            if((i.user_id1===data.user_id && i.user_id2===chat.user_id)||(i.user_id2===data.user_id && i.user_id1===chat.user_id)){
                a.push(i);
            }
        })
        return a;
  }

  const selectChat=(i)=>{
        setChat(i);
        localStorage.setItem("chatP",JSON.stringify(i));
        let a=filChat();
        setmess(a);
  }
  return (
    
    <div style={{background:"#f2f2f2",height:"100vh"}}>
       <div id="extra_div"></div>
       <div id="messages">
        <table id="table">
            <tr >
                <td className="message_user">
                 <h3>Chats</h3>
                </td>
                <td className="message_person">
                    {   a?
                        <div id="person">
                            <div id="story"><img className='messages_img' src={chat.profilePic}></img></div>
                        <h3>{chat.name}</h3>
                        </div>:
                        null
                    }
                </td>
            </tr>
            <tr >
                <td className="message_list">
                        {
                            data3.map(i=>(
                                <div id="person" onClick={()=>selectChat(i)}>
                                    <div id="story">
                                        <img className='messages_img' src={i.profilePic}></img>
                                    </div>
                                    <h3>{i.name}</h3>
                                </div>
                            ))
                        }
                </td>
                <td className='message_name'>
                    {
                        !a?<h1 id="mes"><img className='messages_img' src='https://thumbs.dreamstime.com/b/send-web-icon-isolated-white-background-message-symbol-website-app-etc-184030033.jpg' width={"150px"}></img><br></br>Messages</h1>:
                        <div>
                            {
                                mess.map(i=>(
                                    <div id="msg">
                                        <span id="msg_name">{i.name}</span><br></br>
                                        {i.chat}
                                    </div>
                                ))
                            }
                            <div id="ext_div"></div>
                            <div id="chat_box">
                                <input type="text" name="chats" value={chats} onChange={onValChange}></input><button onClick={submit}>send</button>
                            </div>
                        </div>
                    }
                    
                </td>
            </tr>
        </table>

       </div>
    </div>
  )
}
