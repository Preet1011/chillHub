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


app.get("/getPost",(req,res)=>{
    let q="select likes,profilePic,name,posts.type,posts.user_id,post_id,image,comment FROM posts inner join users on posts.user_id=users.user_id ";
    conn.query(q,(err,resu)=>{
        if(err)throw err;
        res.send({resu});
    })
})














app.listen(8000,()=>{
    console.log("Listening on 8000 .....");
});