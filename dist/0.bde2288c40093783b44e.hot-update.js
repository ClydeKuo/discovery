exports.id = 0;
exports.modules = {

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _cookieParser = __webpack_require__(1);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// var express = require('express');
var app = (0, _express2.default)();
app.use(function (req, res, next) {
    res.status(404).send('Sorry cant find that   !');
});
app.use((0, _cookieParser2.default)());
app.get('/', function (req, res) {
    console.log("主页 GET 请求");
    console.log("Cookies: ", req.cookies);
    res.send('Hello GET');
}

//post请求
);app.post('/', function (req, res) {
    console.log("主页POST请求");
    res.send('Hello POST');
}

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
);var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('demo,访问地址为http://%s:%s', host, port);
});

/***/ })

};