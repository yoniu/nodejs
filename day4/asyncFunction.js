const promisify = require('util').promisify; 

const fs = require('fs');

const readFile = promisify(fs.readFile);

async function run(){
    let a = await readFile('./1.txt', 'utf-8');
    console.log(a);
}

run();