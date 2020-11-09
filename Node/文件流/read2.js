/*
 * @Descripttion: 
 * @version: 
 * @Author: lubaicen
 * @Date: 2020-11-09 11:32:12
 * @LastEditors: lubaicen
 * @LastEditTime: 2020-11-09 15:35:07
 */
let fs = require("fs")

// 创建读取流， 语法：fs.createReadStream(路径，[可选的配置项])
let rs = fs.createReadStream('hello.txt',{flags:'r',encoding:'utf-8'})
let ws = fs.createWriteStream('b.txt',{flags:'w',encoding:'utf-8'})

rs.on('open',function(){
    console.log("读取的文件已打开");
})

rs.on('close',function(){
    console.log("读取流结束");
})

rs.pipe(ws)