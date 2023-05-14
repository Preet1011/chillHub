import React, { useState } from 'react'
import './Search.css'

const Search = () => {
    const [search,setSearch]=useState([]);
      let data=JSON.parse(localStorage.getItem("users"));
      
      function filterUserNames(searchTerm) {
        const regex = new RegExp(searchTerm, "i");
        return data.filter((name) => regex.test(name.username+name.name));
      }  
      
  const onValChange=()=>{
    let a=document.getElementById("inputbutton").value;
    const filteredUserNames = filterUserNames(a);
    setSearch(filteredUserNames);
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
                    <button id='search_follow' ><a href='messages'>follow</a></button>
                </div>
            ))
            
            }
            
            
        </div>

    </div>
    </div>
  )
}

export default Search   