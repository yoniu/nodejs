function getReturn(callback){
    callback({
        msg: 'hello async!'
    });
}
getReturn((msg)=>{
    console.log(msg);
});