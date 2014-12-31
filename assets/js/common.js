/**
 * @usage common func
 * @author chmyun
 * @date: 2014-12-28
 */

// 动态加载js
function loadScript(src) {
	var oContainer = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]),
    	oScript = document.createElement('script'),
    	oScript.type = 'text/javascript',
    	oScript.charset = 'UTF-8',
    	oScript.async = true;
    	oScript.src = src;
    oContainer.appendChild(oScript);
    // $.getScript(src, function(){});
}

// 移动设备判断
function isPcBrowser() {
    var sUserAgent = navigator.userAgent.toLowerCase(),
    	bIsIpad = sUserAgent.match(/ipad/i) == 'ipad',
    	bIsIphoneOs = sUserAgent.match(/iphone os/i) == 'iphone os',
    	bIsMidp = sUserAgent.match(/midp/i) == 'midp',
    	bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4',
    	bIsUc = sUserAgent.match(/ucweb/i) == 'ucweb',
    	bIsAndroid = sUserAgent.match(/android/i) == 'android',
    	bIsCE = sUserAgent.match(/windows ce/i) == 'windows ce',
    	bIsWM = sUserAgent.match(/windows mobile/i) == 'windows mobile',
    	bIsPc = true;
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        bIsPc = false;
    }
    return bIsPc;
}

// fork me
function forkMe() {
	$('body').append('<a href="https://github.com/hcy2367" title="Fork me on GitHub" target="_blank" style="
    position:fixed;top:0;right:0;z-index:999;"><img src="/assets/images/forkme.png" alt="Fork me on GitHub"></a>');
}

// 下雪效果
function snow() {
	$(document).snowfall({
		// image: 'images/huaban.png',
		flakeCount: 100,
		round: true,
		shadow: true,
		maxSpeed: 4,
		minSize: 3,
		maxSize: 6
	});
}

// 设置图片属性(markdown无法添加data-echo属性)
function setImgAttr(id) {
	$('#' + id).find('img').each(function() {
    	var src = $(this).attr('src');
    	$(this).attr('src', '/assets/images/img-placeholder.png').attr('data-echo', src);
    	if (!$(this).hasClass('pure-img')) {
    		$(this).addClass('pure-img');
    	}
    });
}

// 图片延迟加载
function imgLazyLoad() {
	echo.init({
	    offset: 100,
	    throttle: 250,
	    unload: false,
	    callback: function (element, op) {
	        // console.log(element, 'has been', op + 'ed');
	    }
    });
    // $("img.lazy").lazyload({threshold: 300, event: 'fadeIn'});
}

// 返回顶部
function backtotop(id) {
	$(window).scroll(function() {
	    if ($(this).scrollTop() > 200) {
	        $('#' + id).addClass('show');
	    } else {
	        $('#' + id).removeClass('show');
	    }
    });
    $('#' + id).bind('click', function() {
      	var _this = $(this);
      	$('html, body').animate({'scrollTop': '0px'}, 800, function() {
          	_this.removeClass('show');
      	});
    });
}