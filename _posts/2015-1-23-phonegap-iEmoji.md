---
layout: post
title: '基于phonegap，html5，ratchet，handlebars等技术的微表情APP'
# categories: ['phonegap', 'html5']
description: '该app是由很多有意思的微表情构成的，支持40种表情，并且每种表情都有不同的状态，主要有搜索表情，分享表情，摇一摇换表情等功能。目前只支持安卓版。由前期构思，到技术选型，到界面设计，到编码测试，再到发布，过程还是花了不少心思...'
avatarimg: '/assets/images/sheep.png'
showimg: '/assets/images/iEmoji-show.png'
tags: ['phonegap', 'html5']
---

## app截图

![截图1](/assets/images/iEmoji-screenshot-1.png)
![截图2](/assets/images/iEmoji-screenshot-2.png)
![截图3](/assets/images/iEmoji-screenshot-3.png)
![截图4](/assets/images/iEmoji-screenshot-4.png)
![截图5](/assets/images/iEmoji-screenshot-5.png)
![截图6](/assets/images/iEmoji-screenshot-6.png)
![截图7](/assets/images/iEmoji-screenshot-7.png)
![截图8](/assets/images/iEmoji-screenshot-8.png)
![截图9](/assets/images/iEmoji-screenshot-9.png)
![截图10](/assets/images/iEmoji-screenshot-10.png)
![截图11](/assets/images/iEmoji-screenshot-11.png)
![截图12](/assets/images/iEmoji-screenshot-12.png)
![截图13](/assets/images/iEmoji-screenshot-13.png)
![截图14](/assets/images/iEmoji-screenshot-14.png)
![截图15](/assets/images/iEmoji-screenshot-15.png)


## 前期构思

目的：做一个关于表情方面的有意思的app；锻炼和提升自己的各方面能力，从构思到设计到编码到测试，使自己更清晰整个开发流程。于是寻找市面上的一些表情app，例如脸萌啥的，对比了下一些功能点和差异化....IEmoji也就因此诞生了，由于本人技术和经验有限，所以设计的功能点比较简单，主要有一套表情，描述不同状态的表情，如下列英文表情所示：'blink', 'chill', 'chuckle', 'confused', 'cry', 'drooling', 'drowsy', 'embarrassed', 'flushed', 'grimace', 'grin', 'hellooo', 'hotkiss', 'hypnotized', 'inthedark', 'laugh', 'like', 'onfire', 'panic', 'pig', 'pleased', 'pucker', 'puke', 'scold', 'scowl', 'scream', 'sick', 'silence', 'skull', 'sleep', 'smile', 'smug', 'sneer', 'sniffle', 'sob', 'sobeye', 'strive', 'surprised', 'sweating', 'wantmoney', 'wink'，提供表情搜索，本地下载，社会化分享，摇一摇随机换表情（这个是比较有意思的）等功能，服务器端用户如何交互的功能没有做，这个花费的时间和精力比较大，并且像脸萌等一些拼脸软件也没有做。关于素材的准备，这个是比较蛋疼的，由于自己没有设计功底和细胞，主要是用自己搞的一个php微表情生成系统，能根据定义的一些规则，根据脸部不同部位的组合，生成一套表情，这个是比较有意思的哈。图片主要采取svg图，体积小，缩放不失真，图片外部链接下载主要托管到github服务器上，要想搭建自己的图片服务器，no money no talk。说了这么多，感觉还没有说到重点，哎，自己的语言表达能力越来越差了。。。


## 技术选型

PhoneGap主要依赖于webkit浏览器的内核解析，所以它的运行效率不及于原生。但是为了提高APP性能，选择一个小而灵活的框架就显得尤为重要。其实phonegap可以和很多移动框架搭配，但是前期不考虑合适的框架，后期维护的成本就高，坑就越多，来看下以下的一些框架情况：

**jQuery Mobile**：资源载入慢，流量损耗大

**Sencha Touch**：比较旧，学习成本相对较高，也比较笨重

**jqmobi**：Intel的app框架，比jQuery Mobile体积小，兼容性也不错

**ratchet ui**：轻量级ui，上手比较快

**handlebarsjs**：前端模板引擎，是Mustache的升级版，推荐

**ionic**：体积小，基于html5的hybird app框架，没用过


## 功能点和解决方案

在开发过程中遇到的问题和解决方案主要有以下点，代码就不贴了：

* 数据初始化和下拉加载：iscroll5.js，也用于局部内容滚动
* 切换页面闪烁：定义不同页面模板，根据定义的路由规则渲染模板
* 汉字转拼音：表情搜索和中英文识别，这个还没做
* 表情资源准备：svg矢量图，体积小，缩放不失真，本地化和托管到github服务器上
* 社会化分享：umeng phonegap平台，微信不支持，svg转为png图
* 地理位置获取：html5 geolocation，百度地图api
* 图片上传/下载：phonegap FileTransfer插件，图片资源是外部链接
* 安卓手机sd卡位置获取：生成图片保存的目录
* 摇一摇：html5 devicemotion，phonegap accelerometer插件
* 本地存储：localStorage？web sql？ajax json？、index db？
* 前端依赖包管理：bower
* 前端自动化构建工具：gulp

## 总结

其实还有很多的功能点可以做，但时间有限，苹果版就不搞了，先来个安卓版v1.0.0吧，app下载地址：[http://pan.baidu.com/s/1i3HyRrf](http://pan.baidu.com/s/1i3HyRrf)


> 岁月安好！
