const express = require('express');
const path = require('path')
const multer = require('multer');
const ejs = require('ejs');
const app = express();
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs')
var imgname="";
const storage = multer.diskStorage({
    destination: function(req,file,callback){
        callback(null,'./uploads')
    },
    filename:function(req,file,callback){
        callback(null,file.originalname)
     imgname=file.originalname;
    }
});
let upload = multer({storage:storage}).single('myfile');
app.get('/',(req,res)=>{
    res.render('index')
});

app.post('/uploads',(req,res)=>{
    upload(req,res,function(err){
if(err){
    return res.send('<h1>Error in Uploading File</h1>')
}  
res.send("<h1>File is Uploaded Successfully!</h1>")
    })
    console.log(imgname)
});

app.listen(1234,function(){
    console.log("Server is running on port 1234")
})