
$(function() {
	// backtotop
    $(window).scroll(function() {
	    if ($(this).scrollTop() > 200) {
	        $('#backtotop').addClass('show');
	    } else {
	        $('#backtotop').removeClass('show');
	    }
    });
    $('#backtotop').bind('click', function() {
      	var _this = $(this);
      	$('html, body').animate({'scrollTop': '0px'}, 800, function() {
          	_this.removeClass('show');
      	});
    });
});

$(window).load(function() {
	// loading
	$('#loading_wrap').fadeOut().children('.loading').hide();
});

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