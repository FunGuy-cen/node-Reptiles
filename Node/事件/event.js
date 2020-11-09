/*
 * @Descripttion: 
 * @version: 
 * @Author: lubaicen
 * @Date: 2020-11-09 15:54:06
 * @LastEditors: lubaicen
 * @LastEditTime: 2020-11-09 16:29:57
 */
let events = require('events');
let fs = require('fs');
let ee = new events.EventEmitter();

ee.on('helloSuccess', function(eventMsg){
    console.log('1.吃饭');
    console.log(eventMsg);
})
ee.on('helloSuccess', function(){
    console.log('2.睡觉');
})
ee.on('helloSuccess', function(){
    console.log('3.打豆豆');
})
// 同步
// fs.readFile('hello.txt',{encoding:"utf-8"},function(err,data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//         ee.emit("helloSuccess", data)
//     }
// })

// 异步
function lcReadFile(path){
    return new Promise(function(resolve,reject){
        fs.readFile('hello.txt',{encoding:"utf-8"},function(err,data){
            if(err){
                //console.log(err);
                reject(err)
            }else{
                //console.log(data);
                resolve(data)
                //ee.emit("helloSuccess", data)
            }
        })
    })
}

lcReadFile('hello.txt').then(function(data){
    ee.emit("helloSuccess",data)
})

async function test(){
    let data = await lcReadFile('hello.txt')
    ee.emit('helloSuccess',data)
}
test()