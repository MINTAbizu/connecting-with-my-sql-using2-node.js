const mysql=require("mysql")
const express=require("express")


const App=express()
App.listen(1212,(err)=>{
    if(err){
        console.log(err)
    }
    console.log("server is running on port 1212")
})


const mysqlconnection=mysql.createConnection({
    user:"exercise",
    database:"exercise",
    password:"exercise",
    host:"127.0.0.1"
})

mysqlconnection.connect((err)=>{
    if(err){
        console.log(err)
    }
    console.log("server is connected to data base ")
})