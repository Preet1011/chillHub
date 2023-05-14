const express=require("express");
const app=express();
const mysql=require("mysql");
const bodyParser=require("body-parser");
const cors =require("cors");
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
const conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"chillHub"
})
conn.connect((err)=>{
    if(err)throw err;
    else{
        console.log("db connected....");
    }
})
function getId(username) {
    const timestamp = new Date().getTime();
    const randomString = Math.random().toString(36).substring(2, 15);
    const uniqueId = `${username}${timestamp}${randomString}`;
    return uniqueId;
  }
app.post('/register',(req,res)=>{
    let {username,name,email,password}=req.body;
    let userId=getId(username);
    let q="insert into users (user_id,username,name,email,password) values ('"+userId+"','"+username+"','"+name+"','"+email+"','"+password+"')";
    let qu="select * from users where username='"+username+"'";
    conn.query(qu,(err,result)=>{
        if(err)throw err;
        else{
            if(result.length===0){
                conn.query(q,(err,result)=>{
                    if(err)throw err;
                    else {
                        res.send({message:"registered"});
                    }
                })
            }
            else{
                res.send({message:"Already Registered"});
            }
        }
    })
    
   
})

app.post('/login',(req,res)=>{
    let {username,password}=req.body;
    let qu="select * from users where username='"+username+"'";
    conn.query(qu,(err,result)=>{
        if(err)throw err;
        else{
            if(result.length===0){
                res.send({message:"User is Not Registered"});
            }
            else if(result[0].password===password){
                res.send({message:"Login Successfully",user:result[0]});
            }
            else{
                res.send({message:"username or password in incorrect"});
            }
        }
    })
    
   
})
app.post('/AddPost',(req,res)=>{
    let {user_id,image,caption,type}=req.body;
    console.log(user_id);
    let postId=getId(user_id.substring(3,8));
    let q="insert into posts (post_id,user_id,image,caption,type) values ('"+postId+"','"+user_id+"','"+image+"','"+caption+"','"+type+"')";
    conn.query(q,(err,result)=>{
        if(err)throw err;
        else {
            res.send({message:"posted"});
        }
             
    })
    
   
})
app.post('/Addstory',(req,res)=>{
    let {user_id,story,caption,type}=req.body;
    let storyId=getId(caption.substring(1,6));
    let q="insert into stories (story_id,user_id,story,caption,active,type) values ('"+storyId+"','"+user_id+"','"+story+"','"+caption+"',1,'"+type+"')";
    conn.query(q,(err,result)=>{
        if(err)throw err;
        else {
            res.send({message:"posted"});
        }
             
    })
    
   
})
app.post('/like',(req,res)=>{
    let {user_id,post_id}=req.body;
    let q="select * from likes where user_id='"+user_id+"' and post_id='"+post_id+"'";
    let q1="insert into likes (user_id,post_id,active) values ('"+user_id+"','"+post_id+"',1)";
    console.log(user_id,post_id);
    let q2="UPDATE likes SET active = CASE active WHEN 0 THEN 1 ELSE 0 END WHERE id=?";
    let q3="update posts set likes = (select count(user_id) from likes where post_id='"+post_id+"'and active =1) where post_id='"+post_id+"'";
    conn.query(q,(err,result)=>{
        if(err)throw err;
        else {
            
            if(result.length===0){
                conn.query(q1,(err,resu)=>{
                    if(err)throw err;
                    else{
                        conn.query(q3,(err,resu)=>{
                            if(err)throw err;
                            else{
                                res.send({message:"liked"})
                            }
                        })
                    }
                })
            }
            else{console.log(result);
                conn.query(q2,result[0].id,(err,resu)=>{
                    if(err)throw err;
                    else{
                        conn.query(q3,(err,resu)=>{
                            if(err)throw err;
                            else{
                                res.send({message:"liked/unliked"})
                            }
                        })
                    }
                })
            }
        }
    })
})
app.get("/comments",(req,res)=>{
    let q="select post_id,comments.user_id,comment ,profilePic,name,type from comments inner join users on users.user_id=comments.user_id ";
    conn.query(q,(err,resu)=>{
        if(err)throw err;
        res.send({resu});
    })
})
app.post("/addComment",(req,res)=>{
    const {user_id,post_id,comment}=req.body;
    let q="insert into comments (user_id,post_id,comment) values ('"+user_id+"','"+post_id+"','"+comment+"')";

    conn.query(q,(err,resu)=>{
        if(err)throw err;
        res.send({message:"commented"});
    })
})
app.get("/getStories",(req,res)=>{
    let q="select profilePic,name,users.type,stories.user_id,story_id,story FROM stories inner join users on stories.user_id=users.user_id and stories.active=1";
    conn.query(q,(err,resu)=>{
        if(err)throw err;
        res.send({resu});
    })
})

app.get("/getPost",(req,res)=>{
   let q1="update stories set active= 0 where TIMESTAMPDIFF(HOUR,created_at,NOW())>=24"
    let q="select likes,profilePic,name,users.type,posts.user_id,post_id,image,comment FROM posts inner join users on posts.user_id=users.user_id ";
    conn.query(q,(err,resu)=>{
        if(err)throw err;
        else{
            conn.query(q1,(err,result)=>{
                if(err)throw err; 
                res.send({resu});
            })
        }
        
    })
})

app.post("/editUser",(req,res)=>{
    const {name,username,website,bio,email,phone,profilePic,user_id}=req.body;
    
    let q="update users set name='"+name+"',username='"+username+"',website='"+website+"',bio='"+bio+"',email='"+email+"',phone='"+phone+"',profilePic='"+profilePic+"' where user_id ='"+user_id+"'";
    conn.query(q,(err,resu)=>{
        if(err)throw err;
        let qu="select * from users where user_id='"+user_id+"'";
        conn.query(qu,(err,result)=>{
            if(err)throw err;
            
            else{console.log(result);
                res.send({result})
            }
    })
})
})
app.get("/getUsers",(req,res)=>{
    let q="select * from users";
    conn.query(q,(err,resu)=>{
        if(err)throw err;
        res.send({resu});
    })
})
app.get("/getFriend",(req,res)=>{
    let q="select * from friends";
    conn.query(q,(err,resu)=>{
        if(err)throw err;
        res.send({resu});
    })
})

app.post("/request",(req,res)=>{
    const {user_id1,user_id2}=req.body;
    let q="insert into friends (user_id1,user_id2,active,accept) values ('"+user_id1+"','"+user_id2+"',1,0)";
    let q2="update friends set active = 1 , accept=0  where  user_id1='"+user_id1+"'and user_id2='"+user_id2+"'";
    let q1="select * from friends where  user_id1='"+user_id1+"'and user_id2='"+user_id2+"'";
    conn.query(q1,(err,resu)=>{
        if(err) throw err;
        else if(resu.length===0){
            conn.query(q,(err,resu)=>{
                if(err) throw err;
                res.send({message:"request sent"});
            })
        }else{
            conn.query(q2,(err,resu)=>{
                if(err) throw err;
                res.send({message:"request sent"});
            })
        }
        
    })
})

app.post("/unrequest",(req,res)=>{
    const {user_id1,user_id2}=req.body;
    let q="update friends set active = 0  where  user_id1='"+user_id1+"'and user_id2='"+user_id2+"'";
    conn.query(q,(err,resu)=>{
        if(err) throw err;
        res.send({message:"request unsent"});
    })
})
app.post("/accept",(req,res)=>{
    const {user_id1,user_id2}=req.body;
    let q="update friends set accept = 1  where  user_id1='"+user_id1+"'and user_id2='"+user_id2+"'";
    conn.query(q,(err,resu)=>{
        if(err) throw err;
        res.send({message:"request accepted"});
    })
})
app.post("/cancel",(req,res)=>{
    const {user_id1,user_id2}=req.body;
    let q="update friends set accept = -1 ,active = 0  where  user_id1='"+user_id1+"'and user_id2='"+user_id2+"'";
    conn.query(q,(err,resu)=>{
        if(err) throw err;
        res.send({message:"request deleted"});
    })
})









app.listen(8000,()=>{
    console.log("Listening on 8000 .....");
});