---
layout: post
title: '博客园自定义主题样式'
# categories: ['cnblog', 'theme']
description: '对于有强迫症的童鞋来说，一个长得不美观或者不能满足我们日常的审美需求的页面，总会有想要改造它的冲动，好吧，让我们来调试下博客园提供的默认主题样式，让页面更加清爽宜人，简洁大气。'
avatarimg: '/assets/images/pidgin.png'
showimg: '/assets/images/cnblog-theme.png'
tags: ['cnblog', 'css', 'js']
---

## Section One

打开后台设置界面，进入你的博客首页，打开调试器（**chrome**自带调试器或**firebug**），看到哪里不爽的，定位到页面dom结构的相关元素，开始调试，例如我想改变下body的背景：

![修改body背景](/assets/images/cnblog01.png)

其中**http://files.cnblogs.com/cyStyle**路径是在后台文件上传时的根路径，你可以上传样式，脚本，压缩文件等，不过是有大小限制的，并且更新文件时需要注意CDN的缓存。调试完毕后进入设置页面，在页面定制CSS代码框里输入你想要的代码即可，保存即可。返回博客首页发现body背景已经改变。对于权重不够的属性，可以在属性值后面加上**!important**，一招制敌~~~

## Section Two

根据以上步骤一步步调试，直至达到你的审美观。当你调试完毕后，你可以把这些css打包成一个文件然后上传，在设置页面的页首html代码处引入，如：`<link type="text/css" rel="stylesheet" href="(http://files.cnblogs.com/cyStyle/custom.cs" />` 如果你觉得你的样式足够可以替换原来主题提供的样式了，则可以在设置页面里禁用模板默认CSS。接下来你可以在设置页面的博客侧边栏公告处定义一些个人公共信息，例如：

	<div class="pageview">欢迎第 <img border="0" src="http://cc.amazingcounters.com/counter.php?i=3182973&c=9549232" width="60" alt="访客统计" > 个访客</div>

	<p class="para">关于我：<strong>热衷和关注前端开发的屌丝青年一枚~</strong></p>

	<p class="para">博客：<a href="http://hcy2367.github.io/" title="chmyun's blog" target="_blank">http://hcy2367.github.io/</a></p>

	<p class="para">联系我：<a href="mailto:hcy2367@163.com" title="email">hcy2367@163.com</a></p>

	<a href="https://github.com/hcy2367"><img style="position: fixed; top: 0; right: 0; border: 0;" src="https://github-camo.global.ssl.fastly.net/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"></a>

## Section Three

如果你想引入js，则需要发邮件到**contact@cnblogs.com**申请权限，为什么要引入js？比如我要改变页面加载后的dom结构，我要加载一些类库和插件（如代码高亮插件**prettify.js**、**bootstrap**），我要引入社会化分享(**百度分享**、**jiathis**)，我要做一些特效（最近特么流行的雪花漫天飞）等等，值得注意的是，最好不要直接在设置页面的页脚html代码加入内嵌脚本，否则会出现一些奇怪的现象，比如alert会被过滤掉，而外部文件不会，因为博客园后台会对html代码进行一些过滤的处理。完成这些后就可以定制属于我们自己想要的博客主题了。

**值得注意的是**：如果你想隐藏某些不想看到的模块，如日历模块，当你在dom就绪时尝试隐藏时你会发现该元素并没有隐藏，需要在window onload触发时再执行相关操作，原因估计是这些模块本来就被设计好在页面加载完毕后再加载的，或者是ajax异步加载引起的，具体原因需要探讨下。

## Last

时间不早了，2014的最后一天还在这写博客，真苦逼，不管怎样，都希望大家在新的一年有新的突破，[加油]！
附上博客园地址：[chmyun's博客园](http://www.cnblogs.com/cyStyle/)

> 对酒当歌，人生几何，2015，你好！
