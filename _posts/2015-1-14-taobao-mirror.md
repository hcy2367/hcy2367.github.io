---
layout: post
title: '淘宝RubyGems和NPM镜像'
# categories: ['npm', 'rubygem']
description: '前不久在windows下配置jekyll环境时，需要用到gem，一个ruby的管理包，类似于管理nodejs包的npm。安装ruby环境后，使用gem安装包时请求国外的[https://rubygems.org/]镜像一直连不上或间歇性连接失败，之后换成淘宝的RubyGems镜像后，啪啦啪啦地就完事了...'
avatarimg: '/assets/images/sunbird.png'
showimg: '/assets/images/cnpm-process.png'
tags: ['nodejs', 'jekyll']
---

## Section One

上面说到，使用gem请求rubygems.org资源时会遇到长时间无法响应的问题，解决办法就是使用淘宝的RubyGems镜像，它是一个完整rubygems.org镜像，并且每隔大概10分钟会同步一次官方的镜像，保证同步成功和服务。镜像地址请访问：**[RubyGems](http://ruby.taobao.org/)**，里面有使用的步骤。

## jekyll安装

网上的教程大多比较旧或是不太完善，出现了问题又没有相关解决方案，下面来说说我的安装步骤：

### window下安装

1.从**[rubyinstaller](http://rubyinstaller.org/downloads/)**地址下载RubyInstaller和DevKit，注意它们对应的版本，如下图所示：

![rubyinstaller](/assets/images/rubyinstaller.png)

2.安装Ruby，推荐安装在系统盘，添加到用户环境变量，如下图所示：

![rubyinstaller](/assets/images/rubyinstaller-path.png)

3.解压DevKit包到系统盘C:\DevKit，打开命令行，进入该目录，然后执行以下命令：

	$ ruby dk.rb init
	$ ruby dk.rb install

4.修改下载镜像，删除rubygems.org源，添加淘宝RubyGems镜像，查看source和更新source cache：

	$ gem sources --remove https://rubygems.org/
	$ gem sources -a http://ruby.taobao.org/
	$ gem sources -l
	$ gem sources -u

5.安装jekyll包：

	$ gem install jekyll

6.安装Python并配置用户环境变量和scripts下的easy_install Path，推荐下载Python2.7版本，如下图所示：

![rubyinstaller](/assets/images/python-path.png)

7.安装pygments语法高亮包，不要安装到最新版：

	$ gem install pygments.rb --version "=0.5.0"

7.如果你不想使用jekyll原生pygments语法高亮，你可以安装rouge包，推荐使用pygments，生成jekyll项目后的_config.yml配置文件加入`highlighter: pygments`，旧版本是`pygments: true`：

	$ gem install rouge

8.安装解析markdown的包：

	$ gem install rdiscount

9.安装wdm（Windows Directory Monitor）：

	$ gem install wdm

10.查看已安装的gem：

	$ gem list

11.卸载gem包：
	$ gem uninstall gem-name

我的gem包安装目录：`C:\Ruby193\lib\ruby\gems\1.9.1\gems`，在这个目录下，你可以看到通过上面命令安装的一些包，一些是jekyll的依赖包。另外可能出现的错误：`C:/Ruby193/lib/ruby/gems/1.9.1/gems/posix-spawn-0.3.9/lib/posix/spawn.rb:164: warning: cannot close fd before spawn 'which' 不是内部或外部命令，也不是可运行的程序或批处理文件。`解决办法（安装pygments前注意版本，安装后再重装会导致依赖包出错）：
`$ gem install pygments.rb --version "=0.5.0" gem uninstall pygments.rb --version "=0.5.2"`

### ubuntu下安装

ubuntu下安装就简单多了，不用考虑很多啥Python，C++，Ruby等的安装配置问题，执行以下命令即可：

	$ sudo apt-get install ruby
	$ sudo apt-get install rubygems
	$ sudo gem install jekyll
	$ sudo gem install rdiscount

## Section Two

同理，在使用npm管理一些包时，也会发生一些长时间无法获取源的情况。如果使用淘宝的镜像cnpmjs.org，速度马上提升n倍，模块同步频率大概也是10分钟一次，以保证尽量与官方npmjs.org镜像同步。使用起来也非常方便，并且通过alias方式安装后也可以使用原来的npm方式管理包，使用教程地址：**[cnpm](http://www.cnpmjs.org/)**，利用cnpm也可以搭建个人私有仓库。

## Last

很喜欢用markdown写博客，像写代码一样，附上jekyll的教程：**[jekyll](http://jekyllrb.com/docs/home/)**，淘宝的镜像服务真的挺好的，技术也很牛逼，文笔比较差，不知道说什么了，不知不觉夜深了，该睡觉了，=_=~

> 念念不忘，必有回响！
