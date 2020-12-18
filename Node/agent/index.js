const axios = require("axios")

let httpUrl = "https://www.doutula.com/article/detail/9002522"
let options = {
    proxy: {
        host: '175.43.34.31',
        port: 9999,
    },
}
axios.get(httpUrl, options).then(function(res){
    console.log(res.data);
})