$(window).resize(function(){location.reload();});

$(document).ready(function(){	
	
	//begin selectmenu (customize style for select)
	$('#select-city').selectmenu();
	
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
			
	if( !isMobile.any() ) {
		
	};
	
	var getSolution = $(window).width();	
	if(getSolution > 980){
		sticky();
	}
	
	function sticky(){
		//begin scroll
		var footerHeight =  $('.site-footer').height();
		$(window).scroll(function () {
			var winTop = $(this).scrollTop(),
				winBottom = winTop + $(this).height(),
				heightHeader = $('.site-header').height() + $('#carousel-desktop').height(),
				right = $('#nav-affix'),
				rightBottom = right.height() + heightHeader,
				left = $('#main-affix'),
				leftBottom = left.height() + heightHeader;
				heightContact = $('.site-contact').innerHeight();
				offsetContact = $('.site-contact').offset().top;
				console.log(heightContact);
				
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
							'bottom': footerHeight + heightContact
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
							'bottom': footerHeight + heightContact
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
	
		});
		//end scroll	
	}
		
});