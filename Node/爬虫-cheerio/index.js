/* 
 * @Author: lubaicen 
 * @Date: 2020-12-18 14:41:28 
 * @Last Modified by: lubaicen 
 * @Last Modified time: 2020-12-18 14:41:28 
 */
const cheerio = require('cheerio')
const axios = require('axios')
const fs = require('fs')
// const url = require('url')
const path = require('path')
//获取HTML文档的内容，内容的获取跟jQuery一样

let httpUrl = "https://www.doutula.com/article/list/?page=1"
axios.get(httpUrl).then((res) => {
    // console.log(res.data);
    // cheerio解析html文档
    let $ = cheerio.load(res.data)
    // 获取当前页面的所有的表情页面的连接
    $('#home .col-sm-9>a').each((i,element) => {
        let pageUrl = ($(element).attr('href'));
        let title = $(element).find('.random_title').text()
        let reg = /(.*?)\d/igs;
        title = reg.exec(title)[1];
        fs.mkdir('./Node/爬虫-cheerio/img/' + title, function(err){
            if(err){
                // console.log(err);
            }else{
                console.log("成功创建目录：" + './Node/爬虫-cheerio/img/' + title);
            }
        })
        parsePage(pageUrl, title)
    })
})

async function parsePage(pageUrl, title){
    let res = await axios.get(pageUrl)
    let $ = cheerio.load(res.data)
    $('.pic-content img').each((i,element) => {
        let imgUrl = $(element).attr('src')
        // console.log(path.parse(imgUrl));
        extName = path.extname(imgUrl)
        // 图片写入的路径和名字
        let imgPath = `./Node/爬虫-cheerio/img/${title}/${title}-${i}${extName}`
        // 创建写入图片流
        let ws = fs.createWriteStream(imgPath)
        axios.get(imgUrl,{responseType:'stream'}).then(function(res){
            res.data.pipe(ws)
            console.log("图片加载完成：" + imgPath);
            res.data.on('close', function(){
                ws.close()
            })
        })
    })
}