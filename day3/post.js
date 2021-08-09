const http = require("http");

const querystring = require("querystring");// 处理请求参数模块

const app = http.createServer();

app.on("request", (req, res) => {
    
    let postParams = '';

    req.on("data", params => {
        postParams += params;
    });

    req.on("end", () => {
        let postParam = querystring.parse(postParams);
        console.log(postParam);
    });

    res.end("<h1>Hello World</h1>");
});

app.listen(3000);
console.log("create server success: localhost:3000");