/*
 * @Descripttion: 
 * @version: 
 * @Author: lubaicen
 * @Date: 2020-11-09 11:32:12
 * @LastEditors: lubaicen
 * @LastEditTime: 2020-11-09 11:54:15
 */
let fs = require("fs")

// 创建读取流， 语法：fs.createReadStream(路径，[可选的配置项])
let rs = fs.createReadStream('hello.txt',{flags:'r',encoding:'utf-8'})
let ws = fs.createWriteStream('a.txt',{flags:'w',encoding:'utf-8'})
console.log(rs);

rs.on('open',function(){
    console.log("读取的文件已打开");
})

rs.on('close',function(){
    ws.end();
    console.log("读取流结束");
})
// 每一批数据流入完成
rs.on('data',function(msg){
    console.log("单批数据流入");
    console.log(msg);
    ws.write(msg,() => {console.log('单批输入流入完成');})
})