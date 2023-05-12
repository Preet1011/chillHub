import React, { useEffect, useState } from 'react'
import "./home.css";
import Navbar from '../layout/navbar';
import Stories from './stories';
import Notices from './Notice/Notices';
import axios from "axios";
import Notification from '../notification/Notification';

export default function Home() {
    const [posts, setPosts] = useState();
    
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        loadUsers();
    }, []);
    const loadUsers = async () => {
        try {
          const result = await axios.get("http://localhost:8000/getPost");
          setPosts(result.data.resu);
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
      let data=JSON.parse(localStorage.getItem("loginUser"));
    const like=(id)=>{
        let a={
            post_id:id,
            user_id:data.user_id
        };
        axios.post("http://localhost:8000/like",a).then(res=>console.log(res.data));
        loadUsers();
    }
      if (loading) {
        return <div>Loading...</div>;
      }
    return (

        <div id="home" >
            <Stories />
            <Notices />

            <div id='extra_div'></div>

            
            {posts.map(post => (
                <div id="post"key={post.id} >
                    <div id="post_header">
                        <div id="dp"><img src={post.profilePic}></img></div>
                        <div id="name">{post.name}<img id="blue" src='https://images.herzindagi.info/image/2022/Dec/how-to-get-blue-tick-on-twitter-price-followers.jpg'></img><br /><span>Admin</span></div>
                    </div>
                    <div id="post_content">
                        <img id="img" src={post.image}></img>
                    </div>
                    <div id="post_footer">
                        <span onClick={()=>like(post.post_id)} style={{cursor:"pointer"}}>{post.likes} Like</span>
                        <span>comments</span>
                        <span> share</span>
                    </div>
                </div>
              ))}
        </div>
    )

}

