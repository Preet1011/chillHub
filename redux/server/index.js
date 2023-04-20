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
app.post('/register',(req,res)=>{
    let {username,name,email,password}=req.body;
    let q="insert into users (username,name,email,password) values ('"+username+"','"+name+"','"+email+"','"+password+"')";
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

















app.listen(8000,()=>{
    console.log("Listening on 8000 .....");
});