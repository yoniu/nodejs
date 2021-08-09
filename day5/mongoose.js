// 有问题
const config = require('./config');
const mongoose = require('mongoose');

const db = mongoose.connect(config.mongo, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connect success!');
    })
    .catch(err => {
        console.log(err);
    });

const comment_schema = new mongoose.Schema({
    "uid": String,
    "nick": String,
    "mail": String,
    "mailMd5": String,
    "link": String,
    "ua": String,
    "ip": String,
    "master": Boolean,
    "url": String,
    "href": String,
    "comment": String,
    "pid": String,
    "rid": String,
    "isSpam": Boolean,
    "created": { type: Date, default: Date.now },
    "updated": { type: Date, default: Date.now },
    "avatar": String,
    "top": Boolean
});

const commentdb = mongoose.model('comment', comment_schema);
console.log(commentdb);

commentdb.find().then((result) => {
    console.log(result);
});