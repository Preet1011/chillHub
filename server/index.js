const express=require("express");
const app=express();
const mysql=require("mysql");
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
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
    let un=req.body.username;
    let n=req.body.name;
    let em=req.body.email;
    let pass=req.body.password;
    console.log(un);
    let q="insert into users (username,name,email,password) values ('"+un+"','"+n+"','"+em+"','"+pass+"')";
    conn.query(q,(err,result)=>{
        if(err)throw err;
        else {
            res.send("registered");
        }
    })
   
})


















app.listen(8000);