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
	footerHeight,

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
    heightHeader = $('.site-header').height() + $('#carousel-desktop').height(),
    footerHeight = $('.site-contact').height() + $('.site-footer').innerHeight(),

    leftHeight = leftCol.load().height(),

    rightHeight = rightCol.load().height(),

    offsetContact = $('.site-contact').offset().top;

    if (rightHeight < getHeightSolution) {
        rightCol.css("min-height", getHeightSolution);
        rightHeight = getHeightSolution;
    }
    rightBottom = rightHeight + heightHeader;

    if (leftHeight < getHeightSolution) {
        leftCol.css("min-height", getHeightSolution);
        leftHeight = getHeightSolution;
    }
    leftBottom = leftHeight + heightHeader;

    //console.log(leftHeight);
    //console.log(rightHeight);   
}

function sticky() {
    $(window).scroll(function () {

        if (isScroll == false) { return; }

        var winTop = $(this).scrollTop(),
            winBottom = winTop + $(this).height();

        if (rightHeight == 0 || leftHeight == 0) {
            return;
        } else {
            if (rightBottom < leftBottom) {
                //when the user reached the bottom of '#nav-affix' set its position to fixed to prevent it from moving on scroll
                if (winBottom > rightBottom) {
                    if (winBottom <= offsetContact) {
                        rightCol.css({
                            'position': 'fixed',
                            'bottom': 0,
                            'padding-top': 0,
                            'z-index': 9
                        });
                    } else {
                        rightCol.css({
                            'position': 'relative',
                            'padding-top': leftHeight - rightHeight,
                            'z-index': 'inherit'
                        });
                    }
                } else {
                    //when the user scrolls back up revert its position to relative
                    rightCol.css({
                        'position': 'relative',
                        'padding-top': 0,
                        'z-index': 'inherit'
                    });
                }
            } else if (rightBottom > leftBottom) {
                //when the user reached the bottom of '#main-affix' set its position to fixed to prevent it from moving on scroll
                if (winBottom > leftBottom) {
                    if (winBottom <= offsetContact) {
                        leftCol.css({
                            'position': 'fixed',
                            'bottom': 0,
                            'padding-top': 0,
                            'z-index': 9
                        });
                    } else {
                        leftCol.css({
                            'position': 'relative',
                            'padding-top': rightHeight - leftHeight,
                            'z-index': 'inherit'
                        });
                    }
                } else {
                    //when the user scrolls back up revert its position to relative
                    leftCol.css({
                        'position': 'relative',
                        'padding-top': 0,
                        'z-index': 'inherit'
                    });
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

});