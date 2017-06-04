import express from 'express'
import cookieParser from 'cookie-parser'
 // var express = require('express');
var app =express()
app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that !');
});
app.use(cookieParser())
app.get('/',function(req,res){
    console.log("主页 GET 请求");
    console.log("Cookies: ", req.cookies)
    res.send('Hello GET');
})

//post请求
app.post('/',function(req,res){
    console.log("主页POST请求")
    res.send('Hello POST')
})

// del_user页面响应
// app.get('/del_user',(req,res)=>{
//     console.log("/del_user 响应 DELETE 请求");
//     res.send('删除页面');
// })

// //  /list_user 页面 GET 请求
// app.get('/list_user', (req, res)=> {
//    console.log("/list_user GET 请求");
//    res.send('用户列表页面');
// })

// // 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
// app.get('/ab*cd', (req, res)=> {   
//    console.log("/ab*cd GET 请求");
//    res.send('正则匹配');
// })
var server =app.listen(8081,function(){
    let host=server.address().address
    let port=server.address().port
    console.log('demo,访问地址为http://%s:%s',host,port)
})