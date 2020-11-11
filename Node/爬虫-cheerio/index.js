/*
 * @Descripttion: 
 * @version: 
 * @Author: lubaicen
 * @Date: 2020-11-11 10:21:55
 * @LastEditors: lubaicen
 * @LastEditTime: 2020-11-11 11:08:02
 */
const cheerio = require('cheerio')
const axios = require('axios')
//获取HTML文档的内容，内容的获取跟jQuery一样

let httpUrl = "https://qq.yh31.com/zjbq/List_55.html"
axios.get(httpUrl).then((res) => {
    // console.log(res.data);
    // cheerio解析html文档
    let $ = cheerio.load(res.data)
    $('#zt_left .zj_tp a').each((i,element) => {
        // console.log(element);
        console.log($(element).attr('href'));
    })
})

async function parsePage(url){
    let res = await axios.get(url)
    let $ = cheerio.load(res.data)
}