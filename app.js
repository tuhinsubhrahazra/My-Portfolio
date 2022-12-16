const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const MONGO_URI = 'mongodb+srv://tuhin1010:Pf2EzKF0rGBNZjJ3@cluster0.qii1s.mongodb.net/MessageDB';
const app = express();
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect(MONGO_URI, () => {
    console.log("MongoDB successfully connected.");
});

let MessageSchema = mongoose.Schema({
    name:String,
    email:String,
    message:String,
    ip:String,
    ua:String
});

let userSchema = mongoose.Schema({
    ip : String,
    ua : String
});

let messageModel = mongoose.model("Massage",MessageSchema);

let userModel = mongoose.model("User",userSchema);

let port = process.env.PORT;
if(port == null || port == ""){
    port = 5000;
}

app.listen(port,function(req,res){
    console.log("Server is running at port "+port);
});

app.get("/",function(req,res){
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    let ua = req.headers['user-agent'].toLowerCase();
    console.log("IP : "+ip);
    console.log("User agent : "+ua);

    userModel.findOne({ip:ip},function(err,data){
        if(!err){
            if(data==null){
                let doc = new userModel({
                    ip : ip,
                    ua : ua
                });

                doc.save(function(err){
                    if(!err) console.log("New user saved");
                })
            }
        }
    });
    
    res.render("home");
});

app.get("/resume",function(req,res){
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    let ua = req.headers['user-agent'].toLowerCase();
    console.log("IP : "+ip);
    console.log("User agent : "+ua);

    res.sendFile(__dirname+"/public/pdfs/Tuhin Subhra Hazra_Resume.pdf");
});

app.get("/dfd-medicine",function(req,res){
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    let ua = req.headers['user-agent'].toLowerCase();
    console.log("IP : "+ip);
    console.log("User agent : "+ua);

    res.sendFile(__dirname+"/public/pdfs/Medecine Shop Management System Project.pdf");
});

app.get("/msg1010",function(req,res){
    messageModel.find(function(err,data){
        if(!err){
            res.send(data);
        }
        else{
            console.log(err);
        }
    })
});

app.get("/users1010",function(req,res){
    userModel.find(function(err,data){
        if(!err){
            res.send(data);
        }
        else{
            console.log(err);
        }
    });
});

app.post("/send-msg",function(req,res){
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    let ua = req.headers['user-agent'].toLowerCase();
    let name = req.body.name;
    let email = req.body.email;
    let msg = req.body.msg;

    let usrMsg = new messageModel({
        name : name,
        email : email,
        message : msg,
        ip : ip,
        ua : ua
    }).save();

    res.redirect("/");
});


app.get("/:urlName",function(req,res){
    res.render("pagenotfound");
});