import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import Stories from './components/home/stories';
import Navbar from './components/layout/navbar';
import Notices from './components/home/Notice/Notices'
import Login from './components/Login/Login';
import Register from './components/register/Register';
import Messages from './components/messages/messages';
import Profile from './components/profile/Profile';
import Notification from './components/notification/Notification';
import Search from './components/search/Search';
import Logo from './components/home/logo';
import Post from './components/Post/Post';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} ></Route>
            <Route path="/login" element={<Login/>} ></Route>
            <Route path="/messages" element={<Messages/>} ></Route>
            <Route path="/register" element={<Register/>} ></Route>
            <Route path="/profile" element={<Profile/>}> </Route>
            <Route path="/notification" element={<Notification/>}> </Route>
            <Route path="/search" element={<Search/>}> </Route>
            <Route path="/logo" element={<Home/>} ></Route>
            <Route path="/post" element={<Post/>} ></Route>


          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
