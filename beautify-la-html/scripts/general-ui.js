$(document).ready(function(){	
	$(window).resize(function(){
		window.parent.location = window.parent.location.href;		
	});	
	
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
		getHeightSolution = $(window).height(),
		heightHeader = $('.site-header').height() + $('#carousel-desktop').height(),
		footerHeight =  $('.site-contact').height() + $('.site-footer').innerHeight(),
		rightCol = $('#nav-affix'),
		rightHeight= rightCol.height(),
		rightBottom,
		leftCol = $('#main-affix'),
		leftHeight = leftCol.height(),
		leftBottom,
		offsetContact = $('.site-contact').offset().top;
	if(rightHeight < getHeightSolution){
		rightCol.css("height", getHeightSolution);
		rightHeight = getHeightSolution;
		rightBottom = rightHeight + heightHeader;
	}else{		
		rightBottom = rightHeight + heightHeader;
	}
	if(leftHeight < getHeightSolution){
		leftCol.css("height", getHeightSolution);
		leftHeight = getHeightSolution;
		leftBottom = leftHeight + heightHeader;
	}
	else{		
		leftBottom = leftHeight + heightHeader;
	}
			
	function sticky(){			
		$(window).scroll(function () {
			var winTop = $(this).scrollTop(),
				winBottom = winTop + $(this).height();
				console.log(winTop);
			if(rightHeight == 0 || leftHeight == 0){
				return;
			}else{			
				if (rightBottom < leftBottom) {
					//when the user reached the bottom of '#nav-affix' set its position to fixed to prevent it from moving on scroll
					if (winBottom > rightBottom) {
						if(winBottom <= offsetContact){
							rightCol.css({
								'position': 'fixed',
								'bottom': 0,
								'padding-top': 0
							});
						}else{
							rightCol.css({
								'position': 'relative',
								'padding-top': leftHeight - rightHeight - 325
							});
						}
					}else {
						//when the user scrolls back up revert its position to relative
						rightCol.css({
							'position': 'relative',
							'padding-top': 0
						});
					}
				} else if (rightBottom > leftBottom){
					//when the user reached the bottom of '#main-affix' set its position to fixed to prevent it from moving on scroll
					if (winBottom > leftBottom) {
						if(winBottom <= offsetContact + 325){
							leftCol.css({
								'position': 'fixed',
								'bottom': 0,
								'padding-top': 0
							});
						}else{
							leftCol.css({
								'position': 'relative',
								'padding-top': rightHeight - leftHeight + 325
							});
						}
					}else {
						//when the user scrolls back up revert its position to relative
						leftCol.css({
							'position': 'relative',
							'padding-top': 0
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
		if(getSolution > 767){
			sticky();
		}
	}
		
});