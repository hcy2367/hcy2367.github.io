var Snowflake = function() {
	this.initialize.apply(this, arguments)
};
Snowflake.staticPropertySet = function() {
	Snowflake.sid = 0;
	Snowflake.maxWidth = document.documentElement.clientWidth;
	Snowflake.maxHeight = Math.max(document.documentElement.offsetHeight, document.documentElement.clientHeight);
	Snowflake.minWidth = 0;
	Snowflake.minHeight = 0;
	Snowflake.maxSize = 35;
	Snowflake.minSize = 6;
	Snowflake.color = '#fff';
	Snowflake.maxSpeed = 1;
	Snowflake.minSpeed = 4;
	Snowflake.rotateClass = 'rotate';
	Snowflake.rand = function(a, b) {
		return Math.round((b - a) * Math.random()) + a
	};
	Snowflake.setStyle = function(a, b) {
		for (var i in b) {
			a.style[i] = b[i]
		}
	}
};
Snowflake.staticPropertySet();
Snowflake.prototype = {
	initialize: function() {
		this.sid = Snowflake.sid++;
		this.size = Snowflake.rand(Snowflake.minSize, Snowflake.maxSize);
		this.opacity = this.setOpacity();
		this.left = Snowflake.rand(Snowflake.minWidth, Snowflake.maxWidth - this.size - 20);
		this.top = 0;
		this.isRotate = false;
		this.dir = Snowflake.rand(-1, 1);
		this.speed = Snowflake.rand(Snowflake.minSpeed, Snowflake.maxSpeed);
		this.snow = this.createSnow();
		this.wave();
		this.rotate()
	},
	setOpacity: function() {
		var a = (this.size - Snowflake.minSize) / (Snowflake.maxSize - Snowflake.minSize);
		var b = ((0.9 - 0.1) * a + 0.1).toFixed(2);
		return b
	},
	createSnow: function() {
		var a = document.createElement('i');
		a.innerHTML = '❅';
		a.className = 'snow';
		var b = {
			display: 'block',
			position: 'fixed',
			left: this.left + 'px',
			top: this.top + 'px',
			fontSize: this.size + 'px',
			opacity: this.opacity,
			color: Snowflake.color,
			filter: 'alpha(opacity=' + this.opacity * 100 + ')',
			zIndex: 9999
		};
		Snowflake.setStyle(a, b);
		document.body.appendChild(a);
		return a
	},
	wave: function() {
		var b = this;
		var c = window.setInterval(function() {
			b.top += b.speed;
			b.opacity -= 0.01 * Math.random();
			if (b.left < Snowflake.maxWidth - b.size - 60 && b.left > 0) {
				b.left += b.dir
			}
			var a = {
				left: b.left + 'px',
				top: b.top + 'px',
				opacity: b.opacity,
				filter: 'alpha(opacity=' + b.opacity * 100 + ')'
			};
			Snowflake.setStyle(b.snow, a);
			if (b.top > Snowflake.maxHeight - b.size - 50 || b.opacity <= 0) {
				clearInterval(c);
				b.destroy()
			}
		}, 24)
	},
	rotate: function() {
		var a = this;
		var b = setInterval(function() {
			if (!a.snow) {
				clearInterval(b)
			} else {
				if (!a.isRotate) {
					a.snow.className = a.snow.className + ' ' + Snowflake.rotateClass
				} else {
					a.snow.className = a.snow.className.replace(Snowflake.rotateClass, '')
				}
				a.isRotate = !a.isRotate
			}
		}, Snowflake.rand(100, 1300))
	},
	destroy: function() {
		this.snow.parentNode.removeChild(this.snow);
		this.snow = null
	}
};
var snowflake = function(a, b) {
	window.setInterval(function() {
		for (var i = 0; i < b; i++) {
			new Snowflake()
		}
	}, a)
};
snowflake(500, 4);