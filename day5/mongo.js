const config = require('./config');
const { URL } = require('url')
const mongodb = require('mongodb').MongoClient;

async function connect(){
    const client = await mongodb.connect(config.mongo, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    let db = await client.db((new URL(config.mongo)).pathname.substr(1))
      // Cache the database connection and return the connection
    let comment = await db.collection('comment').find({'nick': '油油'}).toArray((err, result) => {
        if (err) throw err;
        console.log(result);
    });
}

connect();