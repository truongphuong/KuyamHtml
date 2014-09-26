$(document).ready(function(){	
	
	//begin selectmenu (customize style for select)
	$('#select-city').selectmenu();
	
	//begin scroll
	var footerHeight = $('.footer').height();
	$(window).scroll(function () {
		var winTop = $(this).scrollTop(),
			winBottom = winTop + $(this).height(),
			right = $('#nav-affix'),
			rightBottom = right.height(),
			left = $('#main-affix'),
			leftBottom = left.height();
		if (rightBottom < leftBottom) {
			//when the user reached the bottom of '#nav-affix' set its position to fixed to prevent it from moving on scroll
			if (winBottom >= rightBottom) {
				right.css({
					'position': 'fixed',
					'bottom': footerHeight
				});
			} else {
				//when the user scrolls back up revert its position to relative
				right.css({
					'position': 'relative',
					'bottom': 'auto'
				});
			}
		} else {
			//when the user reached the bottom of '#main-affix' set its position to fixed to prevent it from moving on scroll
			if (winBottom >= leftBottom) {
				left.css({
					'position': 'fixed',
					'bottom': footerHeight
				});
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
			
});