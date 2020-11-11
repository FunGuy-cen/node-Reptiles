/*
 * @Descripttion: 
 * @version: 
 * @Author: lubaicen
 * @Date: 2020-11-10 09:46:06
 * @LastEditors: lubaicen
 * @LastEditTime: 2020-11-10 10:02:09
 */
let url = require('url')

let httpUrl = "https://baijiahao.baidu.com/s?id=1670164253536549491&wfr=spider&for=pc"

// 解析url
let urlObj = url.parse(httpUrl)
console.log(urlObj);

// 合成url
let targetUrl = "http://www.baidu.com/"
httpUrl = "./mb/funguy/lbc.html"

let newUrl = url.resolve(targetUrl,httpUrl)
console.log(newUrl);