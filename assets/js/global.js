/**
 * @usage global script
 * @author chmyun
 * @date: 2014-12-28
 */

// duoshuo comment
loadScript((document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js');

$(function() {
	if (browserRedirect()) {
		snow();
		// forkMe();
	}
    setImgAttr('post_description');
    imgLazyLoad();
    backtotop('backtotop');
});


$(window).load(function() {
	$('#loading_wrap').fadeOut().children('.loading').hide();
});

// 动态加载脚本
function loadScript(src) {
	var oContainer = document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0],
		oScript = document.createElement('script');
    oScript.type = 'text/javascript',
    oScript.async = true,
    oScript.src = src,
    oScript.charset = 'UTF-8';
	oContainer.appendChild(oScript);
}

// 移动设备判断
function browserRedirect() {
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

// fork me
function forkMe() {
	$('body').append('<a href="https://github.com/hcy2367" title="Fork me on GitHub" target="_blank" style="position:fixed;top:0;right:0;z-index:999;"><img src="/assets/images/forkme.png" alt="Fork me on GitHub"></a>');
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
				+'        ┃┫┫  ┃┫┫                      By chmyun hcy2367@163.com'+ n
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


// 音乐播放
(function($) {
	if (location.href.indexOf('/music') > -1) {
		// Settings
		var repeat = localStorage.repeat || 0,
			shuffle = localStorage.shuffle || 'false',
			continous = true,
			autoplay = true,
			playlist = [{
				title: 'Until You',
				artist: 'Shayne Ward',
				album: 'Breathless，a nice song',
				cover: '/assets/images/music01.jpg',
				mp3: '/assets/music/untilyou.mp3',
				ogg: ''
			}, {
				title: '花无雪',
				artist: '泳儿',
				album: 'Vincy，2007年第一支主打作品“花无雪”',
				cover: '/assets/images/music02.jpg',
				mp3: '/assets/music/huawuxue.mp3',
				ogg: ''
			}, {
				title: '无赖',
				artist: '郑中基',
				album: '情歌王子，能唱能演',
				cover: '/assets/images/music03.jpg',
				mp3: '/assets/music/wulai.mp3',
				ogg: ''
			}, {
				title: '海阔天空',
				artist: 'Beyond',
				album: '家驹的歌，从小听到大，不能赞更多',
				cover: '/assets/images/music04.jpg',
				mp3: '/assets/music/haikuotiankong.mp3',
				ogg: ''
			}, {
				title: '泡沬',
				artist: '邓紫棋',
				album: 'GEM的一首泡沫，深有感触',
				cover: '/assets/images/music05.jpg',
				mp3: '/assets/music/paomo.mp3',
				ogg: ''
			}, {
				title: '不再联系',
				artist: '夏天Alex',
				album: '值得单曲循环的一首歌',
				cover: '/assets/images/music06.jpg',
				mp3: '/assets/music/buzailianxi.mp3',
				ogg: ''
			}];

		// Load playlist
		for (var i = 0; i < playlist.length; i++) {
			var item = playlist[i];
			$('#playlist').append('<li>' + item.artist + ' - ' + item.title + '</li>');
		}

		var time = new Date(),
			currentTrack = shuffle === 'true' ? time.getTime() % playlist.length : 0,
			trigger = false,
			audio, timeout, isPlaying, playCounts;

		var play = function() {
			audio.play();
			$('#player .play').addClass('playing');
			timeout = setInterval(updateProgress, 500);
			isPlaying = true;
		};

		var pause = function() {
			audio.pause();
			$('#player .play').removeClass('playing');
			clearInterval(updateProgress);
			isPlaying = false;
		};

		// Update progress
		var setProgress = function(value) {
			var currentSec = parseInt(value % 60) < 10 ? '0' + parseInt(value % 60) : parseInt(value % 60),
				ratio = value / audio.duration * 100;

			$('#player .timer').html(parseInt(value / 60) + ':' + currentSec);
			$('#player .progress .pace').css('width', ratio + '%');
			$('#player .progress .slider a').css('left', ratio + '%');
		};

		var updateProgress = function() {
			setProgress(audio.currentTime);
		};

		// Progress slider
		$('#player .progress .slider').slider({
			step: 0.1,
			slide: function(event, ui) {
				$(this).addClass('enable');
				setProgress(audio.duration * ui.value / 100);
				clearInterval(timeout);
			},
			stop: function(event, ui) {
				audio.currentTime = audio.duration * ui.value / 100;
				$(this).removeClass('enable');
				timeout = setInterval(updateProgress, 500);
			}
		});

		// Volume slider
		var setVolume = function(value) {
			audio.volume = localStorage.volume = value;
			$('#player .volume .pace').css('width', value * 100 + '%');
			$('#player .volume .slider a').css('left', value * 100 + '%');
		}

		var volume = localStorage.volume || 0.5;
		$('#player .volume .slider').slider({
			max: 1,
			min: 0,
			step: 0.01,
			value: volume,
			slide: function(event, ui) {
				setVolume(ui.value);
				$(this).addClass('enable');
				$('.mute').removeClass('enable');
			},
			stop: function(event, ui) {
				$(this).removeClass('enable');
			}
		}).children('.pace').css('width', volume * 100 + '%');

		$('#player .mute').click(function() {
			if ($(this).hasClass('enable')) {
				setVolume($(this).data('volume'));
				$(this).removeClass('enable');
			} else {
				$(this).data('volume', audio.volume).addClass('enable');
				setVolume(0);
			}
		});

		// Switch track
		var switchTrack = function(i) {
			if (i < 0) {
				track = currentTrack = playlist.length - 1;
			} else if (i >= playlist.length) {
				track = currentTrack = 0;
			} else {
				track = i;
			}

			$('#player audio').remove();
			loadMusic(track);
			if (isPlaying == true) {
				play();
			}
		};

		// Shuffle
		var shufflePlay = function() {
			var time = new Date(),
				lastTrack = currentTrack;
			currentTrack = time.getTime() % playlist.length;
			if (lastTrack == currentTrack) {
				++currentTrack;
			}
			switchTrack(currentTrack);
		};

		// Fire when track ended
		var ended = function() {
			pause();
			audio.currentTime = 0;
			playCounts++;
			if (continous == true) {
				isPlaying = true;
			}
			if (repeat == 1) {
				play();
			} else {
				if (shuffle === 'true') {
					shufflePlay();
				} else {
					if (currentTrack < playlist.length) {
						switchTrack(++currentTrack);
					}
				}
			}
		};

		var beforeLoad = function() {
			var endVal = this.seekable && this.seekable.length ? this.seekable.end(0) : 0;
			$('#player .progress .loaded').css('width', (100 / (this.duration || 1) * endVal) + '%');
		};

		// Fire when track loaded completely
		var afterLoad = function() {
			if (autoplay == true) {
				play();
			}
		};

		// Load track
		var loadMusic = function(i) {
			var item = playlist[i],
				newaudio = $('<audio preload="auto">').html('<source src="' + item.mp3 + '" type="audio/mpeg"><source src="' + item.ogg + '" type="audio/mp3">').appendTo('#player');

			$('#player .cover').html('<img src="' + item.cover + '" alt="' + item.album + '">');
			$('#player .tag').html('<strong class="title">' + item.title + '</strong><span class="artist">' + item.artist + '</span><span class="album">' + item.album + '</span>');
			$('#playlist li').removeClass('playing').eq(i).addClass('playing');
			audio = newaudio[0];
			audio.volume = $('#player .mute').hasClass('enable') ? 0 : volume;
			audio.addEventListener('progress', beforeLoad, false);
			audio.addEventListener('durationchange', beforeLoad, false);
			audio.addEventListener('canplay', afterLoad, false);
			audio.addEventListener('ended', ended, false);
		};

		loadMusic(currentTrack);
		$('#player .play').on('click', function() {
			if ($(this).hasClass('playing')) {
				pause();
			} else {
				play();
			}
		});

		$('#player .rewind').on('click', function() {
			if (shuffle === 'true') {
				shufflePlay();
			} else {
				switchTrack(--currentTrack);
			}
		});

		$('#player .forward').on('click', function() {
			if (shuffle === 'true') {
				shufflePlay();
			} else {
				switchTrack(++currentTrack);
			}
		});

		$('#playlist li').each(function(i) {
			var _i = i;
			$(this).on('click', function() {
				switchTrack(_i);
			});
		});

		if (shuffle === 'true') {
			$('#player .shuffle').addClass('enable');
		}
		if (repeat == 1) {
			$('#player .repeat').addClass('once');
		}

		$('#player .repeat').on('click', function() {
			if ($(this).hasClass('once')) {
				repeat = localStorage.repeat = 0;
				$(this).removeClass('once');
			} else {
				repeat = localStorage.repeat = 1;
				$(this).addClass('once');
			}
		});

		$('#player .shuffle').on('click', function() {
			if ($(this).hasClass('enable')) {
				shuffle = localStorage.shuffle = 'false';
				$(this).removeClass('enable');
			} else {
				shuffle = localStorage.shuffle = 'true';
				$(this).addClass('enable');
			}
		});
	}
})(jQuery);