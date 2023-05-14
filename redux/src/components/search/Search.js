import React, { useState } from 'react'
import './Search.css'
import axios from 'axios';

const Search = () => {
  let data3=JSON.parse(localStorage.getItem("Friends"));
 
    const [search,setSearch]=useState([]);
      let data=JSON.parse(localStorage.getItem("users"));
      let data1=JSON.parse(localStorage.getItem("loginUser"));
      function filterUserNames(searchTerm) {
        const regex = new RegExp(searchTerm, "i");
        return data.filter((name) => regex.test(name.username+name.name));
      }  
      
  const onValChange=()=>{
    let a=document.getElementById("inputbutton").value;
    const filteredUserNames = filterUserNames(a);
    setSearch(filteredUserNames);
  }
  const follow=(id)=>{
    let a={"user_id1":data1.user_id,"user_id2":id}
    axios.post("http://localhost:8000/request",a).then(res=>console.log(res.data.message));
    window.location.reload("/");
  }
  const unfollow=(id)=>{
    let a={"user_id1":data1.user_id,"user_id2":id};
    axios.post("http://localhost:8000/unrequest",a).then(res=>console.log(res.data.message));
    window.location.reload();

  }
  const isRequest=(id)=>{
    let a=0;
    data3.map(i=>{
      if(id===i.user_id2 && i.active===1 && data1.user_id===i.user_id1){
        a=1;
      }
      
    })
    if(a===0){
      return true;
    }
    else{
      return false;
    }
  }
  return (
    <div id='searchwhole'>
    
    <div id="searchbody">
        <h1 className="search_h1">Search</h1>
        <input type='text'  placeholder='Search'onChange={onValChange} id='inputbutton'></input>

        <div id='search_container'>
            { search.map(s=>(
                <div id="ids">
                    <img id="searc_img" src={s.profilePic}></img>
                    <h4>{s.username}</h4>
                    {isRequest(s.user_id)?<button id='search_follow' onClick={()=>follow(s.user_id)} >follow</button>:<button id='search_follow' onClick={()=>unfollow(s.user_id)} >Unfollow</button>}
                </div>
            ))
            
            }
            
            
        </div>

    </div>
    </div>
  )
}

export default Search   