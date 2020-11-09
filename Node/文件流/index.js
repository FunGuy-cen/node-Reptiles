/*
 * @Descripttion: 
 * @version: 
 * @Author: lubaicen
 * @Date: 2020-11-09 11:10:59
 * @LastEditors: lubaicen
 * @LastEditTime: 2020-11-09 11:28:42
 */
let fs = require("fs");

// 1 创建写入流
// 语法： fs.createWriteStream(文件路径，{可选的配置操作])}
let ws = fs.createWriteStream("hello.txt",{flags:"w",encoding:"utf-8"})
console.log(ws);
// 监听文件打开
ws.on('open', function() {
    console.log("文件打开");
})
// 监听准备事件
ws.on('ready', function() {
    console.log("文件写入已准备状态");
})
// 监听文件关闭
ws.on('close', function() {
    console.log("文件关闭");
})
// 文件流式写入
ws.write("啦啦啦啦啦!", function(err){
    if(err){
        console.log(err);
    }else{
        console.log("内容写入完成");
    }
})
// 文件流式写入
ws.write("中国!", function(err){
    if(err){
        console.log(err);
    }else{
        console.log("内容1写入完成");
    }
})
// 文件流式写入
ws.write("重庆!", function(err){
    if(err){
        console.log(err);
    }else{
        console.log("内容2写入完成");
    }
})
// 文件流式写入
ws.write("南山!", function(err){
    if(err){
        console.log(err);
    }else{
        console.log("内容3写入完成");
    }
})
// 文件流式写入
ws.write("重邮!", function(err){
    if(err){
        console.log(err);
    }else{
        console.log("内容4写入完成");
    }
})
// 文件写入完成 
ws.end(function(){      // 写入完成
    console.log("文件写入关闭");
})    