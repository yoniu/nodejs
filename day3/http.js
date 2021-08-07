const http = require("http");

const url = require("url");// 处理url

const app = http.createServer();

app.on("request", (req, res) => {
    console.log(req.method); // 请求类型
    console.log(req.url); // 请求地址
    console.log(req.headers); // 请求头部

    let params = url.parse(req.url, true).query; //获取get参数
    console.log(params);

    res.writeHead(200, {
        'content-type': 'text/plain'
    }); // 设置头部
    res.end("<h1>Hello World</h1>");
});

app.listen(3000);
console.log("create server success: localhost:3000");