const fs = require("fs");
const path = require("path");

const filename = path.join(__dirname, "file.path.txt");

fs.writeFile(filename, "test", err => {
    if(err){
        console.log(err);
    }else{
        console.log("write done!");
    }
});

fs.readFile(filename, "utf-8", (err, content) => {
    if(err == null){
        console.log(content);
    }else{
        console.log("read wrong!");
    }
});