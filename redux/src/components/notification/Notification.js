import React, { useEffect, useState } from 'react'
import Navbar from '../layout/navbar'
import './Notification.css'
import Home from '../home/home'
import axios from 'axios'

const Notification = () => {
  const [request,setRequest]=useState([]);
  let data=JSON.parse(localStorage.getItem("loginUser"));
  let data2=JSON.parse(localStorage.getItem("Friends"));
  let data3=JSON.parse(localStorage.getItem("users"));
  const getRequests=()=>{
      let a=[];
      data2.map(i=>{
        if(i.user_id2===data.user_id && i.active===1 && i.accept===0){
          a.push(i);
        }
      })
      return a;
  }
  const getusers=(a)=>{
    let b=[];
    a.map(i=>{
      data3.map(j=>{
        if(i.user_id1===j.user_id){
          b.push(j);
        } 
      })
    })
    return b;
}
  const accept=(id)=>{
    let a={
        "user_id1":id,
        "user_id2":data.user_id
    }
    axios.post("http://localhost:8000/accept",a).then(res=>console.log(res.data.message));
    window.location.reload()

  }
  const cancel=(id)=>{
    let a={
        "user_id1":id,
        "user_id2":data.user_id
    }
    axios.post("http://localhost:8000/cancel",a).then(res=>console.log(res.data.message));
    window.location.reload()
  }
  useEffect(()=>{
      let a=getRequests();
      let b=getusers(a);
      setRequest(b);
  },[])
  return (
    <div id="whole" >
        <div id="notifybody" >
            <h1>NOTIFICATIONS</h1>
            <div id='search_container'>
              { request.map(s=>(
              <div id="ids">
                  <img id="searc_img" src={s.profilePic}></img>
                  <h4>{s.name} send request </h4>
                  <button id='search_follow' onClick={()=>accept(s.user_id)}>Accept</button><button id='search_follow' onClick={()=>cancel(s.user_id)}>Delete</button>
              </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Notification