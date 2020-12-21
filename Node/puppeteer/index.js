let puppeteer = require('puppeteer')

async function test(){
    // puppeteer.launch实例开启浏览器
    // 可以传入一个options对象，可以配置为无界面浏览器，也可以配置为有界面浏览器
    // 无界面浏览器性能更高更快，有界面一般用于调试开发
    let options = {
        defaultViewport:{
            width: 1400,
            height: 800
        },
        headless:false
    }
    let browser = await puppeteer.launch(options)
    
    // 打开页面
    let page = await browser.newPage()

    // 访问页面
    await page.goto('https://www.dytt8.net/index.htm')

    // 截屏
    // await page.screenshot({path: 'screenshot.png'})
    // 获取页面内容
    page.$$eval("#menu li a",(elements) => {
        // console.log(elements);
        elements.forEach(function(item, i){
            console.log(item.innerHTML);
        })
    })
}

test()