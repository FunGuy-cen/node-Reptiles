/*
 * @Descripttion: 
 * @version: 
 * @Author: lubaicen
 * @Date: 2020-11-10 10:05:47
 * @LastEditors: lubaicen
 * @LastEditTime: 2020-11-10 16:59:34
 */
// let axios = require('axios')
// console.log(axios);
let request = require('request')
let fs = require('fs')
let {fsWrite, fsRead, fsDir} = require('./lcfs')
let httpUrl = "https://www.1905.com/vod/list/n_1_t_1/o3p1.html";

//获取分类里的电影链接
//根据电影链接获取电影的详细信息

function req(url){
    return new Promise(function(resolve, reject){
        request.get(url,function(err , response, body){
            if(err){
                reject(err)
            }else{
                resolve({response,body})
            }
        })
    })
}

//获取起始页面的所有分类地址
async function getClassUrl(){
    let {response, body} = await req(httpUrl)
    // console.log(body);
    let reg = /<span class="search-index-L">类型(.*?)<div class="grid-12x">/igs
    //解析正文内容
    let result = reg.exec(body)[1]
    // console.log(result);
    let reg1 = /<a href="javascript\:void\(0\);" onclick="location\.href='(.*?)';return false;" >(.*?)<\/a>/igs
    let arrClass = []
    var res;
    while( res = reg1.exec(result) ){
        if(res[2] != "全部"){
            let obj = {
                className: res[2],
                url:res[1]
            }
            arrClass.push(obj)
            await fsDir('./Node/爬虫-axios/movies/' + res[2])
            getMovies(res[1],res[2]) 
        }
    }
    // console.log(arrClass);
}

//通过分类，获取页面中的电影链接
async function getMovies(url,moviesType){
    let {response,body} = await req(url)
    let reg = /<a class="pic-pack-outer" target="_blank" href="(.*?)".*?>/igs
    var res;
    var arrList = [];
    while( res = reg.exec(body)){
        arrList.push(res[1])
        parsePage(res[1],moviesType)
    }
    // console.log("分类:",moviesType);
    // console.log(arrList);
}

async function parsePage(url,moviesType){
    let {response, body} = await req(url)
    let reg = /<h1 class="playerBox-info-name playerBox-info-cnName">(.*?)<\/h1>.*?id="playerBoxIntroCon">(.*?)<a.*?导演.*?target="\_blank" title="(.*?)" data-hrefexp/igs;
    let res = reg.exec(body)
    // console.log(res[1]); 
    let movie = {
        name: res[1],
        brief:res[2],
        author:res[3],
        movieUrl:url,
        moviesType
    }
    let strMovie = JSON.stringify(movie)
    fsWrite('./Node/爬虫-axios/movies/' + moviesType + "/" + res[1] + ".json",strMovie)
} 

getClassUrl()