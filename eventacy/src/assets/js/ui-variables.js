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
	xxs: function(){
        var sw = getWindowWidth();
        if (sw < 359) {
            return true;
        };
        return false;
    },
	xs: function(){
        var sw = getWindowWidth();
        if (sw < 3767 && sw > 359) {
            return true;
        };
        return false;
    },
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

var nowTemp = new Date();
var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
