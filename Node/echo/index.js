const axios = require('axios')
const fs = require('fs');
const { extname } = require('path');

//  目标：下载音乐
//  1.获取音乐相关信息，通过音乐相关的信息获取MP3地址
//  2.如何获取大量音乐信息，通过获取音乐列表
//  3.通过音乐分类页，获取音乐列表

async function getPage(num){
    let httpUrl = "http://www.app-echo.com/api/recommend/sound-day?page="+num;
    let res = await axios.get(httpUrl);
    res.data.list.forEach(function(item,i){
        let title = item.sound.name
        let mp3Url = item.sound.source
        download(mp3Url, title)
    })
}

async function download(mp3Url, title){
    let res = axios.get(mp3Url, {responseType: "stream"})
    let ws = fs.createWriteStream('./Node/echo/mp3/' + title + ".mp3")
    res.data.pipe(ws)
    res.data.on('close',function(){
        ws.close()
    })
}

getPage(1)