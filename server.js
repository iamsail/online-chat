//var WebSocketServer = require('ws').Server
//    , wss = new WebSocketServer({port: 8080});

//**********************肖神***********************


var port = 4444;
var http = require("http");
var url  = require("url");
var fs   = require("fs");

var server = http.createServer(function(request,response){
    var pathname = url.parse(request.url).pathname;
    if(pathname === '/index.html' || pathname === '/style.css' || pathname === '/index.js'){
        //fs.readFile('/index.html');
        //fs.readFile('index.html');
        fs.readFile(__dirname + pathname,'binary',function(err,file){
            if(err){
                response.write("404");
                response.end();
            }else{
                response.writeHead(200,{
                   'Content-Type': pathname === '/index.html' ? 'text/html' : pathname === '/style.css' ? 'text/css' :  'text/js'
                });
                response.write(file,"binary");
                response.end();
            }
        });
    }else{
        response.write("404");
        response.end();
    }
});

server.listen(port,'127.0.0.1');

//**********************肖神***********************




var WebSocket = require('ws');
var wss = new WebSocket.Server({ port: 8080 });
var info = { //list存放昵称,messageList存放聊天信息,msg用来实时广播当前谁进入聊天室
    list: [],
    messageList: [],
    msg: null
};


// Broadcast to all.
wss.broadcast = function broadcast(data) {
    wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(data);
        }
    });
};

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {

        var json = JSON.parse(message);
        console.log(json);//打印客户端传来的信息

        if(json.log == 0){
            info.list.push(json.name);
            info.msg = json.name + "同学进入聊天室"; //这个msg是用来实时广播谁进入了聊天室
            wss.broadcast(JSON.stringify(info));
            //console.log("===================666666666");
        }else if(json.log == 1){
            //info.messageList.push(json.userMes)
            //wss.broadcast(JSON.stringify(info));
            info.msg = json.name + "：" + json.msg;
            info.messageList.push(json.userMes);//聊天内容存入数组
            wss.broadcast(JSON.stringify(info));
            //console.log("===================反弹消息");
        }else if(json.log == 2){
            console.log(info.list);
            console.log(json.name);
            info.msg = json.name + "同学离开了聊天室";
            // bug 无论如何出数组的都是最后一个元素，json.name的取值是对的
            var index = info.list.findIndex(function(e, i, a) {
                console.log("e 和  json.name 分别是  " +  e +  "   " + json.name);
                //if (e == json.name) {
                //    console.log("相等  " +  "i为  " + i);
                //    return i;
                //    break;
                return e == json.name;

            });
            console.log("========返回的index值是====  " + index);
            info.list.splice(index,1);
            wss.broadcast(JSON.stringify(info));
            console.log("===================00000000000" + info.msg);
        }
    });

    //ws.send('something');  //服务端向客户端发送的数据
});
