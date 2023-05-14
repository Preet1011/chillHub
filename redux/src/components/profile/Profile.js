import React, { useEffect, useState } from 'react'
import "./Profile.css"
import Edit from '../Edit/Edit';
import axios from 'axios';

function Profile() {
    let data=JSON.parse(localStorage.getItem("loginUser"));
    let data1=JSON.parse(localStorage.getItem("posts"));
    console.log(data1); 
    const [count,setCount]=useState(0);
    const [follower,setFollower]=useState(0);
    const [following,setFollowing]=useState(0);
    const [posts,setpost]=useState([]);
    const [comments,setComments]=useState([{post_id:"tu1681683906345851i7v6ikh1d8j"}]);

    const like=(id)=>{
        let a={
            post_id:id,
            user_id:data.user_id
        };
        axios.post("http://localhost:8000/like",a).then(res=>console.log(res.data));
        
    }
    const loadComments=async()=>{
        
        try {
           const result = await axios.get("http://localhost:8000/comments");
           setComments(result.data.resu);
         } catch (error) {
           console.error(error);
         }
     }
    const comment=async(id)=>{ 
      let a=document.getElementById(id).style.display;
      if(a==="none"){
        document.getElementById(id).style.display="inline-block";
      }else{
        document.getElementById(id).style.display="none";
      }
  }
  let data2=JSON.parse(localStorage.getItem("Friends"));
    function countPost(){
        let a=0;
        loadComments();
        data1.map(post=>{
            if(post.user_id===data.user_id){
                a=a+1;
            }
         })
         let b=0;
         let c=0;
         data2.map(post=>{
            if(post.user_id1===data.user_id && post.active===1 && post.accept>=0){
                b=b+1;
            }
            else if(post.user_id2===data.user_id && post.active===1 && post.accept>=0){
                c=c+1;
            }
         })
         setFollowing(b);
         setFollower(c);
         let res=data1.filter((d)=>d.user_id===data.user_id);
         setpost(res);
         console.log(res,data.user_id);
         setCount(a);

    }
    
    function editpro(){
   
        let a=document.getElementById("edit_whole").style.display;
        if(a==="none"){
          document.getElementById("edit_whole").style.display="inline-block";
          
        }
        else{
          document.getElementById("edit_whole").style.display="none";
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
        
        loadComments();
    }    
    const showPost=(id)=>{
        let a=document.getElementById(id+1).style.display;
        if(a==="none"){
            document.getElementById(id+1).style.display="inline-block";
            posts.map(i=>{
                if(i.post_id+1!=id+1){
                    document.getElementById(i.post_id+1).style.display="none";
                }
            })
        }
        else{
            document.getElementById(id+1).style.display="none"
        };
    }
    return (
        <div onLoad={countPost} >
            {/* <Navbar/> */}
            <Edit/>
            <div id='profile_container'>
                <div id="profile_card">
                   <span style={{width:"11vw",height:"22vh"}}> <img id="profile_pic" src={data.profilePic} alt='upload.ls'></img></span>
                    <h2 className='text' id='username' style={{marginLeft:"36vw"}}>{data.username}</h2><br></br>
                </div>
                <div id="profile_follow">
                    <div className='follow'><h3>{count}</h3><h4>posts</h4></div>
                    <div className='follow'><h3>{follower}</h3><h4>followers</h4></div>
                    <div className='follow'><h3>{following}</h3><h4>following</h4></div>
                </div>
                <div id="profile_btn">
                    <button onClick={editpro} id='edit_profile'>Edit</button>
                    <button id='edit_profile' ><a href='messages'>Message</a></button>
                </div>
            </div>
            <div id="post_line">
                {
                    posts.map(post=>(
                        <div style={{display:"flex"}}>
                        <div id={post.post_id+1} className='posts'  >
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
                        <div id="posts_div">
                            <img id="posts_img" src={post.image} onClick={()=>showPost(post.post_id)}></img>
                        </div>
                    </div>
                    ))
                }
                
                

            </div>
            </div>

            

        
        
    )   
}

export default Profile