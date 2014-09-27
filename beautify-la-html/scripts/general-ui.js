$(document).ready(function(){		
	
	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};	
	
	var getSolution = $(window).width(),
		heightHeader = $('.site-header').innerHeight() + $('#carousel-desktop').innerHeight(),
		footerHeight =  $('.site-contact').innerHeight() + $('.site-footer').innerHeight(),
		right = $('#nav-affix'),
		rightHeight= right.height(),
		rightBottom = rightHeight + heightHeader,
		left = $('#main-affix'),
		leftHeight = left.height(),
		leftBottom = leftHeight + heightHeader,
		offsetContact = $('.site-contact').offset().top;
		
	$(window).resize(function(){
		heightHeader = $('.site-header').innerHeight() + $('#carousel-desktop').innerHeight(),
		footerHeight =  $('.site-contact').innerHeight() + $('.site-footer').innerHeight();
		left.removeAttr("style");
		right.removeAttr("style");		
		if(getSolution > 767){
			sticky();
		}
	});
			
	function sticky(){			
		$(window).scroll(function () {
			var winTop = $(this).scrollTop(),
				winBottom = winTop + $(this).height();
			if(rightHeight == 0 || leftHeight == 0){
				return;
			}else{			
				if (rightBottom < leftBottom) {
					//when the user reached the bottom of '#nav-affix' set its position to fixed to prevent it from moving on scroll
					if (winBottom >= rightBottom) {
						if(winBottom <= offsetContact){
							right.css({
								'position': 'fixed',
								'bottom': 0
							});
						}else{
							right.css({
								'position': 'fixed',
								'bottom': footerHeight
							});
						}
					}else {
						//when the user scrolls back up revert its position to relative
						right.css({
							'position': 'relative',
							'bottom': 'auto'
						});
					}
				} else {
					//when the user reached the bottom of '#main-affix' set its position to fixed to prevent it from moving on scroll
					if (winBottom >= leftBottom) {
						if(winBottom <= offsetContact){
							left.css({
								'position': 'fixed',
								'bottom': 0
							});
						}else{
							left.css({
								'position': 'fixed',
								'bottom': footerHeight
							});
						}
					} else {
						//when the user scrolls back up revert its position to relative
						left.css({
							'position': 'relative',
							'bottom': 'auto'
						});
					}
				}
			}
	
		});
		//end scroll	
	}
	
	if( isMobile.any() ) {
		$('#detech-devices').addClass("detech-devices");
	}else{				
		if(getSolution > 979){
			sticky();
		}
	}
		
});