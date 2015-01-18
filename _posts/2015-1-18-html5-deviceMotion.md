---
layout: post
title: 'html5实现web app摇一摇换歌'
# categories: ['html5', 'web app']
description: '微信可以摇歌曲，根据声音识别出歌曲，然后返回歌曲信息，利用html5的deviceOrientation特性和deviceMotion事件也可以在web app上实现类似于微信摇一摇的功能，原生的app实现也有相关接口，这里只考虑web app的情况......'
avatarimg: '/assets/images/thunderbird.png'
showimg: '/assets/images/hand-shake.png'
tags: ['html5', 'web app']
---

## Section One

先来看下demo效果图：

![摇一摇换歌](/assets/images/shake-music.png)

测试地址：[http://hcy2367.github.io/music/](http://hcy2367.github.io/music/)，**请在手机浏览器中打开该链接，建议WiFi下操作，否则一首歌几M的流量挺坑的，然后摇一摇换歌，操作可能会有点慢。**

来看下html5的这几个特性：

* 1.deviceOrientation：方向传感器数据的事件，通过监听该事件可以获取手机静态状态下的方向数据；
* 2.deviceMotion: 运动传感器数据事件，通过监听该事件可以获取手机运动状态下的运动加速度数据；
* 3.DeviceMotionEvent: 判断浏览器是否支持该事件属性，如果支持则监听deviceMotion事件，返回设备有关于加速度和旋转的事件对象，该对象包含两个属性，accelerationIncludingGravity（含重力的加速度）和acceleration（加速度），后者排除了重力的影响。其中加速度的数据包含三个轴：x，y和z。

## Section Two

如何判断用户摇晃了手机？考虑的要点如下：
1、用户大多时候都是以一个方向为主晃动手机来进行摇动；
2、在晃动时三个方向的加速度数据必定都会变化；
3、我们不能误判手机正常的运动行为，例如我们在走路时，放在裤兜里的手机也会有加速度数据变化。
综上，我们应该针对三个方向的加速度进行计算，间隔测量它们，考察它们在固定时间段里的变化率，而且需要为它确定一个阈值来触发动作。

代码如下：

	var shakeThreshold = 1000; // 定义一个摇动的阈值
        var lastUpdate = 0; // 记录上一次摇动的时间
        var x, y, z, lastX, lastY, lastZ; // 定义x、y、z记录三个轴的数据以及上一次触发的数据

	// 监听传感器运动事件
	if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', deviceMotionHandler, false);
    } else {
        alert('本设备不支持devicemotion事件');
    }

    // 运动传感器处理
    function deviceMotionHandler(eventData) {
        var acceleration = eventData.accelerationIncludingGravity; // 获取含重力的加速度
        var curTime = new Date().getTime();

        // 100毫秒进行一次位置判断
        if ((curTime - lastUpdate) > 100) {

            var diffTime = curTime - lastUpdate;
            lastUpdate = curTime;

            x = acceleration.x;
            y = acceleration.y;
            z = acceleration.z;

            var speed = Math.abs(x + y + z - lastX - lastY - lastZ) / diffTime * 10000;
			// 前后x, y, z间的差值的绝对值和时间比率超过了预设的阈值，则判断设备进行了摇晃操作
            if (speed > shakeThreshold) {
                doSomething();
            }

            lastX = x;
            lastY = y;
            lastZ = z;
        }
    }

## Last

其实web app的单页应用已经很广泛了，开发成本低，phonegap也可以在webview层通过这种方式实现摇一摇功能，然后打包成平台的app。另外也可以利用navigator.accelerometer加速器插件实现摇一摇的功能，实际上是通过js去实现本地的接口，实现跨平台，但这种方式没原生提供的api强大，html5 will play a important role in the future！


> 你若安好，便是晴天！
