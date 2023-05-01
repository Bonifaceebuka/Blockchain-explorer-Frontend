(function() {
	// The random number is a js implementation of the Xorshift PRNG
	var randseed = new Array(4); // Xorshift: [x, y, z, w] 32 bit values

	function seedrand(seed) {
		for (var i = 0; i < randseed.length; i++) {
			randseed[i] = 0;
		}
		for (var i = 0; i < seed.length; i++) {
			randseed[i%4] = ((randseed[i%4] << 5) - randseed[i%4]) + seed.charCodeAt(i);
		}
	}

	function rand() {
		// based on Java's String.hashCode(), expanded to 4 32bit values
		var t = randseed[0] ^ (randseed[0] << 11);

		randseed[0] = randseed[1];
		randseed[1] = randseed[2];
		randseed[2] = randseed[3];
		randseed[3] = (randseed[3] ^ (randseed[3] >> 19) ^ t ^ (t >> 8));

		return (randseed[3]>>>0) / ((1 << 31)>>>0);
	}

	function createColor() {
		//saturation is the whole color spectrum
		var h = Math.floor(rand() * 360);
		//saturation goes from 40 to 100, it avoids greyish colors
		var s = ((rand() * 60) + 40) + '%';
		//lightness can be anything from 0 to 100, but probabilities are a bell curve around 50%
		var l = ((rand()+rand()+rand()+rand()) * 25) + '%';

		var color = 'hsl(' + h + ',' + s + ',' + l + ')';
		return color;
	}

	function createImageData(size) {
		var width = size; // Only support square icons for now
		var height = size;

		var dataWidth = Math.ceil(width / 2);
		var mirrorWidth = width - dataWidth;

		var data = [];
		for(var y = 0; y < height; y++) {
			var row = [];
			for(var x = 0; x < dataWidth; x++) {
				// this makes foreground and background color to have a 43% (1/2.3) probability
				// spot color has 13% chance
				row[x] = Math.floor(rand()*2.3);
			}
			var r = row.slice(0, mirrorWidth);
			r.reverse();
			row = row.concat(r);

			for(var i = 0; i < row.length; i++) {
				data.push(row[i]);
			}
		}

		return data;
	}

	function createCanvas(imageData, color, scale, bgcolor, spotcolor) {
		var c = document.createElement('canvas');
		var width = Math.sqrt(imageData.length);
		c.width = c.height = width * scale;

		var cc = c.getContext('2d');
		cc.fillStyle = bgcolor;
		cc.fillRect(0, 0, c.width, c.height);
		cc.fillStyle = color;

		for(var i = 0; i < imageData.length; i++) {
			var row = Math.floor(i / width);
			var col = i % width;
			// if data is 2, choose spot color, if 1 choose foreground
			cc.fillStyle = (imageData[i] == 1) ? color : spotcolor;

			// if data is 0, leave the background
			if(imageData[i]) {
				cc.fillRect(col * scale, row * scale, scale, scale);
			}
		}

		return c;
	}

	function createIcon(opts) {
		opts = opts || {};
		var size = opts.size || 8;
		var scale = opts.scale || 4;
		var seed = opts.seed || Math.floor((Math.random()*Math.pow(10,16))).toString(16);

		seedrand(seed);

		var color = opts.color || createColor();
		var bgcolor = opts.bgcolor || createColor();
		var spotcolor = opts.spotcolor || createColor();
		var imageData = createImageData(size);
		var canvas = createCanvas(imageData, color, scale, bgcolor, spotcolor);

		return canvas;
	}

	window.blockies = {create: createIcon};
})();

/*!
* Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
* Copyright 2011-2022 The Bootstrap Authors
* Licensed under the Creative Commons Attribution 3.0 Unported License.
*/const storedTheme=localStorage.getItem('theme')
const getPreferredTheme=(isOnload=false)=>{if(storedTheme){return storedTheme}
if(isOnload){return 'light';}
return window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}
const setTheme=function(theme,isChangeFavicon=false){if(isChangeFavicon){let favicon=document.querySelector('link[rel="shortcut icon"]');if(window.matchMedia('(prefers-color-scheme: dark)').matches&&!favicon.href.includes('light')){favicon.href=favicon.href.replace('favicon3','favicon3-light');}else{favicon.href=favicon.href.replace('favicon3-light','favicon3');}}
document.documentElement.setAttribute('data-bs-theme',theme)
handleThemeBtn(theme);}
setTheme(getPreferredTheme(true),true)
const showActiveTheme=theme=>{const activeThemeIcon=document.querySelector('.theme-icon-active')
const btnToActive=document.querySelector(`[data-bs-theme-value="${theme}"]`)
if(btnToActive){const svgOfActiveBtn=btnToActive.querySelector('i').getAttribute('data-href')
document.querySelectorAll('[data-bs-theme-value]').forEach(element=>{element.classList.remove('active')})
btnToActive.classList.add('active')
activeThemeIcon.classList.remove(activeThemeIcon.getAttribute('data-href').slice(1))
activeThemeIcon.classList.add(svgOfActiveBtn.slice(1))
activeThemeIcon.setAttribute('data-href',svgOfActiveBtn)}
handleThemeBtn(theme);}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',()=>{if(storedTheme!=='light'||storedTheme!=='dark'){setTheme(getPreferredTheme(),true)}})
window.addEventListener('DOMContentLoaded',()=>{showActiveTheme(getPreferredTheme(true))
document.querySelectorAll('[data-bs-theme-value]').forEach(toggle=>{toggle.addEventListener('click',()=>{const theme=toggle.getAttribute('data-bs-theme-value')
localStorage.setItem('theme',theme)
setTheme(theme)
showActiveTheme(theme)})})})
function handleThemeBtn(theme){$('.theme-btn-main').text("");if(theme==='light'){$('.theme-btn-main').append("<i class='fa fa-sun theme-icon-active' data-href='#fa-sun-bright'></i>");}else if(theme==='dim'){$('.theme-btn-main').append("<i class='far fa-moon theme-icon-active' data-href='#fa-moon-stars'></i>");}else if(theme==='dark'){$('.theme-btn-main').append("<i class='far fa-moon theme-icon-active' data-href='#fa-moon'></i>");}}