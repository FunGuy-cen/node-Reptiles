let http = require("http")
// http为内置模块，无需安装
// 创建server服务器对象
let server = http.createServer()
// 监听对当前服务器对象的请求
server.on('request', function(req,res){
    // 当服务器被请求时，会触发请求事件，并传入请求对象和相应对象
    console.log(req);
    res.end('helloworld')
})

// 服务器监听端口号
server.listen(80,function(){
    // 启动监听端口号成功时触发
    console.log("服务器启动成功！");
})