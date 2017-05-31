//var ws = new WebSocket("ws://127.0.0.1:8080/");
var ws = new WebSocket("ws://123.207.83.243:8080/");
var momo = document.getElementById("momo");
var wait = document.getElementById("wait");
var pubMessage = document.getElementById("pubMessage");
var container = document.getElementById("container");
var publishTalk = document.getElementById("publishTalk");
var infoId = document.getElementById("infoId");
var talkArea = document.getElementById("talkArea");

var info = {
    name: name,
    userMes: message,
    log : 0    // 0 为尚未进入房间,1为进入房间,2为离开房间
};




ws.onopen = function() {  //在成功建立连接时触发
    alert("连接建立成功")
};


ws.onmessage = function (evt) { //服务端向客户端发送消息时触发
    var json = JSON.parse(evt.data); //解析json字符串
    talkArea.innerHTML =json.msg;
    var tmp = "<li>当前成员</li>";
    var mesTmp = "<li>对话如下</li>";
    json.list.forEach(function(item) {
        tmp += "<li>" + item + "</li>";
    });

    json.messageList.forEach(function(item) {
        mesTmp += "<li>" + item + "</li>";
    });

//            ul.append(json.msg);
    document.getElementById("user").innerHTML = tmp;
    talkArea.innerHTML = mesTmp;
};

ws.onclose = function() { //在关闭连接时触发
    alert("Closed");
};

ws.onerror = function(err) { //在发生错误时触发
    alert("Error: " + err);
};

//实际情况还要对刷新和关闭窗口进行验证
// 这里有event.preventDefault();
/*var warning="确认退出?";
 *return warning;
 * 两种写法
 * 前者不会弹出窗口,直接关闭
 *
 * 后者会弹出窗口，再关闭
 *
 * 但是无论如何，都已经发送了关闭的请求到达了服务端,有待解决
 *
 * 心跳检测
 *
 */
window.onbeforeunload = onbeforeunload_handler;
function onbeforeunload_handler(){
    info.log = 2;
    ws.send(JSON.stringify(info));
//        event.preventDefault();
    var warning="确认退出?";
    return warning;
}






momo.addEventListener("click",function(){
    info.name = document.getElementById("name").value;  //赋值name
    container.style.display = "none";   //登录部分
    publishTalk.style.display = "block";  //发布留言区域
    ws.send(JSON.stringify(info));
    info.log = 1;
    infoId.innerHTML = info.log;
});


pubMessage.addEventListener("click", function(event) {
    event.preventDefault();
    info.userMes = info.name + " : " + document.getElementById("message").value;
    alert("info.userMes " + info.userMes );
    document.getElementById("message").value="";
    ws.send(JSON.stringify(info));
});
