function getunixtime() {
    var d = new Date;
    var unixtime_ms = d.getTime();
    var unixtime = parseInt(unixtime_ms / 1000);
    return unixtime;
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

var isView = {
    mobile: function(){
        var sw = getWindowWidth();
        if (sw < 768) {
            return true;
        };
        return false;
    },
    tablet: function(){
        var sw = getWindowWidth();
        if (sw < 992 && sw > 767) {
            return true;
        };
        return false;
    },
    desktop: function(){
        var sw = getWindowWidth();
        if (sw > 991) {
            return true;
        };
        return false;
    }
};

function activeAffix(){	
    var $mainAffix = $('#main-affix');
	var $navAffix = $('#nav-affix');

	var $activeAffix;

	var mainHeight = $mainAffix.load().height();
	var navHeight = $navAffix.load().height();

    if(mainHeight === navHeight){
    	return;
    }else if(mainHeight > navHeight){
    	$activeAffix = $navAffix;
    }else{
    	$activeAffix = $mainAffix;    	
    }

	$activeAffix.affix({
	  	offset: {
		    top: $('.main-content').offset().top,
		    bottom: function () {
		      	return (this.bottom = $('#contact').outerHeight(true) + $('.site-footer').outerHeight(true))
		    }
		}
	});
}

$(document).ready(function () {
	if(!isView.mobile()){
		activeAffix();		
	}

    if (isMobile.any()) {
        $('#detech-devices').addClass("detech-devices");
    } 
	
	$("#accordion-booking").on('show.bs.collapse', function(){
		setTimeout(function(){
			resetScroll();
		}, 300);
	}); 

});
