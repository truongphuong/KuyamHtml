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

function getWindowWidth(){
    return window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
}

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

// Begin - For browsers that support history.scrollRestoration, the auto scroll behavior can be turned off
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
// End - For browsers that support history.scrollRestoration, the auto scroll behavior can be turned off

function monitorResize (callbackfnc){
    callbackfnc.sw = getWindowWidth();
    var $window = $(window);
    $window.on('resize', function(){
        var nw = getWindowWidth();
        if(nw !== callbackfnc.sw){
            callbackfnc.sw = nw;
            callbackfnc();
        }
    });
};

function settingsModal(){
    if (typeof window.verifyScrollbarWidth == "undefined") {
        window.verifyScrollbarWidth = (window.innerWidth - $(window).width()) + 'px';
        window.verifyScrollbarWidth = '<style type="text/css">.modal-open{padding-right:' + window.verifyScrollbarWidth + ' !important;}.modal-open .site-header, .modal-open .nav-account{padding-right:' + window.verifyScrollbarWidth + '}</style>';
        $(window.verifyScrollbarWidth).appendTo($('head'));
    }

    $(document).on('hidden.bs.modal', '.modal', function (){
        if($('.modal:visible').length){
            $(document.body).addClass('modal-open');
        }else{
            $(document.body).removeClass('modal-open');
            $(document.body).css({'padding-right': ''});
        }
    });
}

function centerModal() {
    $(this).css('display', 'block');
    var $dialog = $(this).find(".modal-dialog");
    var offset = ($(this).height() - $dialog.height()) / 2;
    offset = offset > 0 ? offset : 15;
    // Center modal vertically in window
    $dialog.css({"margin-top": offset, "margin-bottom": offset});
}

function refreshNiceScroll(sectionID){
    $(sectionID + " .wrap-dropdown-menu-inner").attr('style', '');
    $(sectionID + " .wrap-dropdown-menu-inner-content").attr('style', '');
    $(sectionID + " .wrap-dropdown-menu-inner").getNiceScroll().resize();
}

function iscrollSelect(sectionID, scrollName) {
    var $sectionID = $('#' + sectionID),
        scrollID = '#' + scrollName;
    if ($sectionID.length === 0) {
        return;
    }
    if ($sectionID.find('.bootstrap-select').length === 0) {
        if (!isMobile.any()) {
            $sectionID.find('select').selectpicker({ liveSearch: true });
            $sectionID.find('.form-control').attr('readonly', 'true');
        } else {
            $sectionID.find('select').selectpicker();
        }

        $sectionID.find('select').on('hide.bs.select', function () {
            $sectionID.find('.form-control').trigger('blur');
        });

        if (!isMobile.Windows()) {
            $sectionID.find('.dropdown-menu.inner').wrap("<div class='wrap-dropdown-menu-inner iscroll-vertical'></div>").wrap("<div class='wrap-dropdown-menu-inner-content'></div>");
            $('#' + sectionID + ' select').on('shown.bs.select', function (e) {
                var heightOfUL = $('#' + sectionID + ' ul.inner').height();
                $('#' + sectionID + ' .wrap-dropdown-menu-inner-content').height(heightOfUL);
                $('#' + sectionID + ' .wrap-dropdown-menu-inner').niceScroll('#' + sectionID + ' .wrap-dropdown-menu-inner-content',
                    {
                        bouncescroll: false,
                        autohidemode: false,
                        cursorcolor: "#278CFE",
                        cursorborder: "1px solid transparent",
                        cursorborderradius: "5px",
                        cursorwidth: "7px",
                        background: "#8B8B8B",
                        mousescrollstep: 10
                    });
            });
        }
    }
}

function nicescrollSelect(sectionID) {
    var $sectionID = $('#' + sectionID);

    if ($sectionID.find('.bootstrap-select').length) {
        $sectionID.find('select').selectpicker('destroy');
    }

    if ($sectionID.find('.bootstrap-select').length === 0) {

        $sectionID.find('select').selectpicker();

        if (!isMobile.Windows()) {

            if ($(sectionID + ' .wrap-dropdown-menu-inner').getNiceScroll().length > 0) {
                refreshNiceScroll(sectionID);
                return;
            }

            $sectionID.find('.dropdown-menu.inner').wrap("<div class='wrap-dropdown-menu-inner'></div>").wrap("<div class='wrap-dropdown-menu-inner-content'></div>");
            $('#' + sectionID + ' select').one('shown.bs.select', function (e) {
                var heightOfUL = $('#' + sectionID + ' ul.inner').height();
                $('#' + sectionID + ' .wrap-dropdown-menu-inner-content').height(heightOfUL);

                $('#' + sectionID + ' .wrap-dropdown-menu-inner').niceScroll('#' + sectionID + ' .wrap-dropdown-menu-inner-content',
                    {
                       bouncescroll: false,
                       autohidemode: false,
                       cursorcolor: "#278CFE ",
                       cursorborder: "1px solid transparent",
                       cursorborderradius: "5px",
                       cursorwidth: "7px",
                       background: "#8B8B8B ",
                       mousescrollstep: 10
                       //preservenativescrolling: false
                    });
            });
        }
    }
}

function existSelect(sectionClass) {
    var $sectionClass = $('.' + sectionClass);
    if ($sectionClass.length !== 0) {
        $sectionClass.find('select').selectpicker();
    }
}

function iscrollHorizontalContent(sectionID) {
    if (!isMobile.Windows()) {
        if($(sectionID).find('.wrap-dropdown-menu-inner').length){
            refreshNiceScroll(sectionID);
            return;
        }

        $(sectionID).find('.scroll-content').wrap("<div class='wrap-dropdown-menu-inner iscroll-horizontal'></div>").wrap("<div class='wrap-dropdown-menu-inner-content'></div>");
        var widthOfDiv = $(sectionID + ' .scroll-content').width();
        $(sectionID + ' .wrap-dropdown-menu-inner-content').width(widthOfDiv);
        $(sectionID + ' .wrap-dropdown-menu-inner').niceScroll(sectionID + ' .wrap-dropdown-menu-inner-content',
        {
            bouncescroll: false,
            autohidemode: false,
            cursorcolor: "#99bd25",
            cursorborder: "1px solid transparent",
            cursorborderradius: "5px",
            cursorwidth: "7px",
            background: "#8B8B8B",
            preservenativescrolling: false
        });
    }
}

function iscrollContent(sectionID) {
    if (!isMobile.Windows()) {
        if($(sectionID).find('.wrap-dropdown-menu-inner').length){
            refreshNiceScroll(sectionID);
            return;
        }

        $(sectionID).find('.scroll-content').wrap("<div class='wrap-dropdown-menu-inner iscroll-vertical'></div>").wrap("<div class='wrap-dropdown-menu-inner-content'></div>");
        var heightOfDiv = $(sectionID + ' .scroll-content').height();
        $(sectionID + ' .wrap-dropdown-menu-inner-content').height(heightOfDiv);
        $(sectionID + ' .wrap-dropdown-menu-inner').niceScroll(sectionID + ' .wrap-dropdown-menu-inner-content',
        {
            bouncescroll: false,
            autohidemode: false,
            cursorcolor: "#99bd25",
            cursorborder: "1px solid transparent",
            cursorborderradius: "5px",
            cursorwidth: "7px",
            background: "#8B8B8B",
            preservenativescrolling: false
        });
    }
}

$(document).ready(function(){

    settingsModal();

    $('.modal').on('shown.bs.modal', centerModal);

    monitorResize(function(){
        //alert('asassss');
    });

    setTimeout(function(){
        monitorResize(function(){
            //alert('111');
        });
    }, 2000);
});

$(window).resize(function(){
    $('.modal:visible').each(centerModal);
});
