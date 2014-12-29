
$(function() {
    setImgAttr('post_description');
    imgLazyLoad();
    backtotop('backtotop');
});

$(window).load(function() {
	$('#loading_wrap').fadeOut().children('.loading').hide();
});

// 设置图片属性(markdown无法添加data-echo属性)
function setImgAttr(id) {
	$('#' + id).find('img').each(function() {
    	var src = $(this).attr('src');
    	$(this).attr('src', '{{ site.img_placehoder_url }}').attr('data-echo', src);
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

// console.log
(function(){
	var console = window.console || {
			log : function(){}
		},
		n = '\n' ,
		words = [
			n +'            ┏┓．°． ┏┓            【恭喜您！得到节操：50克 ！】     '+ n
				+'            ┃┗━━━┛┃'+ n
				+'            ┃ ⌒   ⌒ ┃'+ n
				+'            ┃  ●   ●  ┃                   少年不知愁滋味'+ n
				+'            ┃  ” ω ”  ┃               By chmyun QQ：729555742'+ n
				+'            ┗○━━━━○┛'+ n
			,
			n +'   ┏┓       ┏┓'+ n
				+' ┏┛┻━━━━┛┻┓'+ n
				+' ┃              ┃                              【神兽在此守护】'+ n
				+' ┃      ━      ┃'+ n
				+' ┃  ┳┛  ┗┳   ┃'+ n
				+' ┃              ┃'+ n
				+' ┃      ┻      ┃'+ n
				+' ┃              ┃'+ n
				+' ┗━━┓   ┏━━┛'+ n
				+'      ┃   ┃'+ n
				+'      ┃   ┃'+ n
				+'      ┃   ┗━━━━-━┓'+ n
				+'      ┃              ┣┓                   少年不知愁滋味'+ n
				+'      ┃              ┏┛'+ n
				+'      ┗┓┓┏━┳┓┏━┛'+ n
				+'        ┃┫┫  ┃┫┫                      By chmyun chmyun2367@gmail.com'+ n
				+'        ┗┻┛  ┗┻┛'
		];
	console.log(words[rand(0, words.length - 1 )]);

	// 去区间随机整数
	function rand(mi, ma){
		var range = ma - mi;
		var out = mi + Math.round(Math.random() * range) ;
		return parseInt(out);
	}
})();