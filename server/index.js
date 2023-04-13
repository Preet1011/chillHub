const express=require("express");
const app=express();
const mysql=require("mysql");
const conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"todo"
})
conn.connect((err)=>{
    if(err)throw err;
    else{
        console.log("db connected....");
    }
})
app.get('/',(req,res)=>{
    let q="select * from personals;"
    conn.query(q,(err,result)=>{
        if(err)throw err;
        else {
            console.log(result[0]);
             res.send(`<h1>${result[0].json()}</h1>`)
        }
    })
   
})


















app.listen(8000);