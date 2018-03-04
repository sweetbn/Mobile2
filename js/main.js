$(function(){
	var $banner=$('.banner');
	var width=$banner.width();
	var $imglist=$banner.find('ul:first');
	var $dotul=$banner.find('ul:eq(1)');
	var $dotlis=$dotul.find('li');

	var index=1;

	var animateFun=function(){
		$imglist.animate({'transform':'translateX('+(-index*width)+'px)'},200,'linear',function(){
			if (index>=6) {
				index=1;
				$imglist.css({'transform':'translateX('+(-index*width)+'px)'});
			}
			if (index<=0) {
				index=5;
				$imglist.css({'transform':'translateX('+(-index*width)+'px)'});
			}
			$dotlis.removeClass('now').eq(index-1).addClass('now');

		});
	}

	var timer=setInterval(function(){
		index++;
		animateFun();
	},5000);

	$imglist.on('swipeLeft',function(){
		index++;
		animateFun();
	});
	$imglist.on('swipeRight',function(){
		index--;
		animateFun();
	});

});