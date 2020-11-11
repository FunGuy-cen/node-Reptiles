/*
 * @Descripttion: 
 * @version: 
 * @Author: lubaicen
 * @Date: 2020-11-09 17:14:54
 * @LastEditors: lubaicen
 * @LastEditTime: 2020-11-09 17:53:47
 */
let path = require("path")
let fs = require('fs')

console.log(path);

let strPath = "http://henan.china.com.cn/news/2020-11/09/content_41353519.htm"
//获取路径信息的扩展名
let info = path.extname(strPath)
console.log(info);


let arr = ['/mubai','funguy','lbc']
// let info1 = path.resolve(...arr)
let info1 = path.resolve('/mubai','funguy','lbc')
console.log(info1);

//获取当前执行目录的完整目录
// console.log(__dirname);
let info2 = path.join(__dirname,'arr')  //同下一行相等
// let info2 = path.join(...[__dirname,'arr'])
// console.log(info2);

let str = "http://xxx.com/mb/mb.html"

//解析出请求目录
let arrParse = str.split('/')
console.log(arrParse);
let list = arrParse.slice(arrParse.length-2, arrParse.length)
console.log(list);

let filePath = path.join(__dirname,...list)
console.log(filePath);
fs.readFile(filePath,{encoding:'utf-8'},function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})