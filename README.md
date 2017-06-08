# online-chat
基于websocket的在线聊天室
使用了[ws](https://github.com/websockets/ws)

已经完成大致功能

## bugs

- 用户离开时,刷新页面与关闭页面的区分
- 发现在ipv6的网络下，不能能够成功建立websocket原因,[参考](https://stackoverflow.com/questions/31984934/calling-ipv6-ip-using-websocket-interface)
- server.js中上线时,server.listen多写了参数,导致不能访问
  最初的解决方案是将前台文件放在PHP，html文件夹下新建立了文件夹
  最后删掉多出的参数就好了
- 上线后,要注意端口冲突,是否和PHP之类的冲突
- 关于端口的开发,在腾讯云的安全组中进行配置

## 尚未完成

- 尚未美化界面,还没写样式

## 进度

- 该项目尚且处于第一阶段
- 后期会进行重构,并用VUE重写

## 其他

- 在dev分支进行开发
- 于2017年6月1日(CUMT建校108年)发布v1.0.0,正式上线.更多见v1.x分支
- 项目演示地址:[戳这儿(作者不承诺一直开启服务)](http://chat.sail.name/index.html)