import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import Navbar from './components/layout/navbar';
import Login from './components/Login/Login';
import Register from './components/register/Register';
import Messages from './components/messages/messages';
import Profile from './components/profile/Profile';
import Notification from './components/notification/Notification';
import Search from './components/search/Search';
import Post from './components/Post/Post';
import Edit from './components/Edit/Edit.js';
import Upload from './components/upload/Upload';
import More from './components/More/More';
import { useEffect, useState } from 'react';
function App() {
  function Body(){
    document.getElementById("morecont").style.display="none";
        document.getElementById("whole").style.display="none";
        document.getElementById("searchwhole").style.display="none";
        document.getElementById("post_cointainer").style.display="none";
}

  const [isLogin,setLogin]=useState(true);
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    const loadData =()=>{
      setLoading(false);
    }
    setTimeout(loadData,500);
      
    
    let use=localStorage.getItem("loginUser");
    console.log(use);
    if(use){
      if(!loading)
      document.getElementById("navbar").style.display="inline-block";
    }
    else{
      setLogin(false);
      if(!loading)
      document.getElementById("navbar").style.display="none";
    }
  })
  if(loading)
    return (
      <div id="loading">
        <div id='hub1'>
          <span ><span id="chill">Chill</span><span id="hu1">Hub</span></span>
        </div>
        <div id="loading1">
          <h3>from <br></br> <span id="head">Montu</span></h3>
        </div>
      </div>
    )
  else
  return (
    <div className="App" >
    <Navbar/>
    <div onClick={Body}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={isLogin?<Home/>:<Login setLogin={setLogin}/>} ></Route>
            <Route path="/login" element={<Login setLogin={setLogin}/>} ></Route>
            <Route path="/messages" element={isLogin?<Messages/>:<Login setLogin={setLogin}/>} ></Route>
            <Route path="/register" element={<Register/>} ></Route>
            <Route path="/profile" element={isLogin?<Profile/>:<Login setLogin={setLogin}/>}> </Route>
            <Route path="/notification" element={<Notification/>}> </Route>
            <Route path="/search" element={<Search/>}> </Route>
            <Route path="/logo" element={<Home/>} ></Route>
            <Route path="/post" element={<Post/>} ></Route>
            <Route path="/edit" element={<Edit/>} ></Route>
            <Route path="/upload" element={<Upload/>} ></Route>
            <Route path="/more" element={<More/>} ></Route>
          </Routes>
        </BrowserRouter>
        </div>
    </div>
  );
}
    
export default App;
