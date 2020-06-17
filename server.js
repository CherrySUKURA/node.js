let http = require('http');//请求node.js自带的http模块
let url = require('url');

function start(route,handle){
    http.createServer( (request,response) => {
        let pathname = url.parse(request.url).pathname;
        let postData = "";
        request.setEncoding("utf8");
        request.addListener("data",function(postDataChunk){
            postData += postDataChunk;
        })
        request.addListener("end",function(){
            route(handle, pathname, response, postData);
        })
        console.log('Request for'+ pathname + "received")
    }).listen(8888);
}

exports.start = start;