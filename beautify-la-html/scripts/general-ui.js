function getunixtime() {
    var d = new Date;
    var unixtime_ms = d.getTime();
    var unixtime = parseInt(unixtime_ms / 1000);
    return unixtime;
}

var getWidthSolution = $(window).width(),
	getHeightSolution = $(window).height(),
	isScroll,
	isResize = false,
	rightCol = $('#nav-affix'),
    leftCol = $('#main-affix'),
	heightHeader,

	leftHeight,
	leftBottom,

	rightHeight,
	rightBottom,

	offsetContact;

function stateScroll() {
    if (getWidthSolution > 767) {
        isScroll = true;
    } else {
        isScroll = false;
    }
}

function getValue() { 	
    offsetContact = $('.site-contact').offset().top,
	heightHeader = $('.main-content').offset().top,	

    rightCol.css("min-height", getHeightSolution),
    rightHeight = rightCol.load().height(),
    rightBottom = rightHeight + heightHeader,

    leftCol.css("min-height", getHeightSolution),	
    leftHeight = leftCol.load().height(),
    leftBottom = leftHeight + heightHeader; 
}

function sticky() {
    $(window).scroll(function () {

        if (isScroll == false) { return; }

        var winTop = $(this).scrollTop(),
            winBottom = winTop + getHeightSolution;
		console.log(rightHeight);

        if (rightHeight == 0 || leftHeight == 0) {
            return;
        } else {
            if (rightHeight < leftHeight) {
                //when the user reached the bottom of '#nav-affix' set its position to fixed to prevent it from moving on scroll
                if (winBottom > rightBottom) {
                    if (winBottom <= offsetContact) {
						if(rightHeight > getHeightSolution)
						{
							rightCol.css({
								'position': 'fixed',
								'bottom': 0,
								'padding-top': offsetContact - heightHeader - rightHeight,
								'z-index': 9
							});
						}else{
							rightCol.css({
								'position': 'fixed',
								'bottom': 0,
								'top':  heightHeader + rightHeight - offsetContact,
								'padding-top': offsetContact - heightHeader - rightHeight,
								'z-index': 9
							});
						}
                    } else {
						if(rightHeight > getHeightSolution)
						{
							rightCol.css({
								'position': 'relative'
							});
						}else{
							rightCol.css({
								'position': 'relative',
								'top': ''
							});
						}
                    }
                } else {
					//when the user scrolls back up revert its position to relative
					if(rightHeight > getHeightSolution)
					{
						rightCol.css({
							'position': 'relative',
							'padding-top':''
						});
					}else{
						rightCol.css({
							'position': 'relative',
							'padding-top':'',
							'top': ''
						});
					}
                }
            } else if (rightBottom > leftBottom) {
                //when the user reached the bottom of '#main-affix' set its position to fixed to prevent it from moving on scroll
                if (winBottom > leftBottom) {
                    if (winBottom <= offsetContact) {
						if(leftHeight > getHeightSolution)
						{
							leftCol.css({
								'position': 'fixed',
								'bottom': 0,
								'padding-top': offsetContact - heightHeader - leftHeight,
								'z-index': 9
							});
						}else{
							leftCol.css({
								'position': 'fixed',
								'bottom': 0,
								'top':  heightHeader + leftHeight - offsetContact,
								'padding-top': offsetContact - heightHeader - leftHeight,
								'z-index': 9
							});
						}
                    } else {
						if(leftHeight > getHeightSolution)
						{
							leftCol.css({
								'position': 'relative'
							});
						}else{
							leftCol.css({
								'position': 'relative',
								'top': ''
							});
						}
                    }
                } else {
					//when the user scrolls back up revert its position to relative
					if(leftHeight > getHeightSolution)
					{
						leftCol.css({
							'position': 'relative',
							'padding-top':''
						});
					}else{
						leftCol.css({
							'position': 'relative',
							'padding-top':'',
							'top': ''
						});
					}
                }
            }
        }

    });
}

var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

function resetScroll() {
    leftCol.removeAttr("style");
    rightCol.removeAttr("style");
    stateScroll();
    getValue();
    if (isScroll == true) {
        sticky();
    } else {
        leftCol.removeAttr("style");
        rightCol.removeAttr("style");
    }
}

$(document).ready(function () {

    $(window).resize(function () {
        getWidthSolution = $(window).width();
        getHeightSolution = $(window).height();
        isResize = true;
        resetScroll();
    });

    if (isMobile.any()) {
        $('#detech-devices').addClass("detech-devices");
    } else {
        resetScroll();
    }
	
	$("#accordion-booking").on('show.bs.collapse', function(){
		setTimeout(function(){
			resetScroll();
		}, 300);
	}); 

});
