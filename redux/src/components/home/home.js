import React, { useEffect, useState } from 'react'
import "./home.css";
import Stories from './stories';
import Notices from './Notice/Notices';
import axios from "axios";

export default function Home() {
    const [posts, setPosts] = useState([1,2]);
    const [comments,setComments]=useState([{post_id:"tu1681683906345851i7v6ikh1d8j"}]);
    const [loading, setLoading] = useState({
      a:true,
      b:true,
      c:true,
      d:true,
      e:true,
      f:true,
      g:true
    });
    useEffect(() => {
        loadUsers();
        loadStories();
        loadComments();
        loadUser();
        loadFriends()
    }, []);
    const loadUsers = async () => {
        try {
          const result = await axios.get("http://localhost:8000/getPost");
          setPosts(result.data.resu);
          localStorage.setItem("posts",JSON.stringify(result.data.resu));
          setLoading({...loading,"a":false});
        } catch (error) {
          console.error(error);
        }
        
      };
      const loadFriends = async () => {
        try {
          const result = await axios.get("http://localhost:8000/getFriend");
          
          localStorage.setItem("Friends",JSON.stringify(result.data.resu));
          setLoading({...loading,"e":false});
          console.log(result.data.resu);
        } catch (error) {
          console.error(error);
        }
        
      };
      const loadUser = async () => {
        try {
          const result = await axios.get("http://localhost:8000/getUsers");
          setPosts(result.data.resu);
          localStorage.setItem("users",JSON.stringify(result.data.resu));
          setLoading({...loading,"b":false});
        } catch (error) {
          console.error(error);
        }
        
      };
      const loadStories = async () => {
        try {
          const result = await axios.get("http://localhost:8000/getStories");
          // setStories(result.data.resu);
          localStorage.setItem("stories",JSON.stringify(result.data.resu));
          setLoading({...loading,"c":false});
          
        } catch (error) {
          console.error(error);
        }
        
      };
      const loadComments=async()=>{
        
         try {
            const result = await axios.get("http://localhost:8000/comments");
            setComments(result.data.resu);
          setLoading({...loading,"d":false});

          } catch (error) {
            console.error(error);
          }
      }
      let data=JSON.parse(localStorage.getItem("loginUser"));
    const like=(id)=>{
        let a={
            post_id:id,
            user_id:data.user_id
        };
        axios.post("http://localhost:8000/like",a).then(res=>console.log(res.data));
        setLoading({...loading,"g":false});
        loadUsers();
    }
    const comment=async(id)=>{ 
      let a=document.getElementById(id).style.display;
      if(a==="none"){
        document.getElementById(id).style.display="inline-block";
      }else{
        document.getElementById(id).style.display="none";
      }
  }
      

      const addComment=(id)=>{
        let co=document.getElementById(`comment${id}`).value;
        let a={
            post_id:id,
            user_id:data.user_id,
            comment:co
        };
        axios.post("http://localhost:8000/addComment",a).then(res=>console.log(res.data));
        setLoading({...loading,"f":false});
        loadUsers();
        loadComments();
    }      

      if (loading.a && loading.b && loading.c && loading.d && loading.e && loading.f && loading.g) {
        return <div>Loading...</div>;
      }
      else{
    return (

        <div id="home" >
            <Stories />
            <Notices />

            <div id='extra_div'></div>

            
            {posts.map(post => (
                <div id="post"key={post.id} >
                    <div id="post_header">
                        <div id="dp"><img src={post.profilePic}></img></div>
                        <div id="name">{post.name}{post.type?<span><img id="blue" src='https://images.herzindagi.info/image/2022/Dec/how-to-get-blue-tick-on-twitter-price-followers.jpg'></img><br /><span>Admin</span></span>:null}</div>
                    </div>
                    <div id="post_content">
                        <img id="img" src={post.image}></img>
                    </div>
                    <div id="post_footer">
                        <span onClick={()=>like(post.post_id)} style={{cursor:"pointer"}}>{post.likes} Like</span>
                        <span onClick={()=>comment(post.post_id)} style={{cursor:"pointer"}}>comments</span>
                    </div>


                    <div id={post.post_id} className='comments'>
                    <div id="comment_box"><input type="text" id={`comment${post.post_id}` }className="comment_input"></input> <button id="comment_btn" onClick={()=>addComment(post.post_id)}><img className='messages_img' src='https://png.pngtree.com/png-vector/20190329/ourmid/pngtree-vector-paper-plane-icon-png-image_889384.jpg' width={"18px"}></img></button></div>
                    {comments.map(comment=>{
                      if(comment.post_id===post.post_id){
                        return (
                          <div id="comment_header" >
                            <div id="dp"><img src={comment.profilePic}></img></div>
                            <div id="name">{comment.name}{comment.type?<span><img id="blue" src='https://images.herzindagi.info/image/2022/Dec/how-to-get-blue-tick-on-twitter-price-followers.jpg'></img><br /></span>:<br></br>}<span>{comment.comment}</span></div>
                          </div>
                        );
                      }
                    })}
                    
                    </div> 
                </div>
              ))}
              <div id='extra_div'></div>
        </div>
    )

}}

