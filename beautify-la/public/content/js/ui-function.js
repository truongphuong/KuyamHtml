'use strict';

function getWindowWidth() {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

function monitorResize(callbackfnc) {
    callbackfnc.sw = getWindowWidth();
    var $window = $(window);
    $window.on('resize', function () {
        var nw = getWindowWidth();
        if (nw !== callbackfnc.sw) {
            callbackfnc.sw = nw;
            callbackfnc();
        }
    });
};

function settingsModal() {
    if (typeof window.verifyScrollbarWidth == "undefined") {
        window.verifyScrollbarWidth = window.innerWidth - $(window).width() + 'px';
        window.verifyScrollbarWidth = '<style type="text/css">.modal-open{padding-right:' + window.verifyScrollbarWidth + ' !important;}</style>';
        $(window.verifyScrollbarWidth).appendTo($('head'));
    }

    $(document).on('hidden.bs.modal', '.modal', function () {
        if ($('.modal:visible').length) {
            $(document.body).addClass('modal-open');
        } else {
            $(document.body).removeClass('modal-open');
            $(document.body).css({ 'padding-right': '' });
        }
    });
}

function centerModal() {
    $(this).css('display', 'block');
    var $dialog = $(this).find(".modal-dialog");
    var offset = ($(this).height() - $dialog.height()) / 2;
    offset = offset > 0 ? offset : 15;
    // Center modal vertically in window
    $dialog.css({ "margin-top": offset, "margin-bottom": offset });
}

function refreshNiceScroll(sectionID) {
    $(sectionID + " .wrap-dropdown-menu-inner").attr('style', '');
    $(sectionID + " .wrap-dropdown-menu-inner-content").attr('style', '');
    $(sectionID + " .wrap-dropdown-menu-inner").getNiceScroll().resize();
}

function iscrollSelect(sectionID, scrollName) {
    var $sectionID = $('#' + sectionID);
    if ($sectionID.length === 0) {
        return;
    }
    if ($sectionID.find('.bootstrap-select').length === 0) {
        $sectionID.find('select').selectpicker();

        $sectionID.find('select').on('hide.bs.select', function () {
            $sectionID.find('.form-control').trigger('blur');
        });

        if (!isMobile.Windows()) {
            $sectionID.find('.dropdown-menu.inner').wrap("<div class='wrap-dropdown-menu-inner'></div>").wrap("<div class='wrap-dropdown-menu-inner-content'></div>");
            //$('#' + sectionID + ' select').on('shown.bs.select', function (e) {
            var heightOfUL = $('#' + sectionID + ' ul.inner').height();
            $('#' + sectionID + ' .wrap-dropdown-menu-inner-content').height(heightOfUL);
            $('#' + sectionID + ' .wrap-dropdown-menu-inner').niceScroll('#' + sectionID + ' .wrap-dropdown-menu-inner-content', {
                bouncescroll: false,
                autohidemode: false,
                cursorcolor: "#f3472d",
                cursorborder: "1px solid transparent",
                cursorborderradius: "5px",
                cursorwidth: "7px",
                background: "#8B8B8B",
                mousescrollstep: 10
            });
            //});
        }
    }
}

function existSelect(sectionClass) {
    var $sectionClass = $('.' + sectionClass);
    if ($sectionClass.length !== 0) {
        $sectionClass.find('select').selectpicker();
    }
}

function iscrollContent(sectionID) {
    if (!isMobile.Windows()) {
        if ($(sectionID).find('.wrap-dropdown-menu-inner').length) {
            refreshNiceScroll(sectionID);
            return;
        }

        $(sectionID).find('.scroll-content').wrap("<div class='wrap-dropdown-menu-inner'></div>").wrap("<div class='wrap-dropdown-menu-inner-content'></div>");
        var heightOfDiv = $(sectionID + ' .scroll-content').height();
        $(sectionID + ' .wrap-dropdown-menu-inner-content').height(heightOfDiv);
        $(sectionID + ' .wrap-dropdown-menu-inner').niceScroll(sectionID + ' .wrap-dropdown-menu-inner-content', {
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

function getunixtime() {
    var d = new Date();
    var unixtime_ms = d.getTime();
    var unixtime = parseInt(unixtime_ms / 1000);
    return unixtime;
}

function activeAffix() {
    var $mainAffix = $('#main-affix');
    var $navAffix = $('#nav-affix');

    var $activeAffix;

    var mainHeight = $mainAffix.load().height();
    var navHeight = $navAffix.load().height();

    if (mainHeight === navHeight) {
        return;
    } else if (mainHeight > navHeight) {
        $activeAffix = $navAffix;
    } else {
        $activeAffix = $mainAffix;
    }

    $activeAffix.affix({
        offset: {
            top: $('.main-content').offset().top,
            bottom: function bottom() {
                return this.bottom = $('#contact').outerHeight(true) + $('.site-footer').outerHeight(true);
            }
        }
    });
}

function showNavAccount() {
    if (temp == 0) {
        $("#site-header").animate({ "height": "+=40px" }, 500);
        temp = 1;
    } else {
        $("#site-header").animate({ "height": "-=40px" }, 500);
        temp = 0;
    }
    $("#nav-account").css({ top: $("#site-header").height() });
    $("#nav-account").toggle('blind', 500);
}

function selectArea() {
    if ($('.area-section').length === 0) {
        return;
    }
    var areaLeft = $('.area-section').offset().left;
    if ($(window).width() < 768) {
        $('.area-section div.dropdown-menu').css({ 'margin-left': -areaLeft });
        $('.area-section ul.dropdown-menu').css({ 'width': $(window).width() });
    } else {
        $('.area-section div.dropdown-menu').css({ 'margin-left': '' });
        $('.area-section ul.dropdown-menu').css({ 'width': '' });
    }
}

function listFilter(header, list) {
    var $object = $('input.input-block-level');
    var filter = $object.val();
    $object.change(function (e) {
        e.preventDefault();
        filter = $(this).val();
        if (filter != null) {
            //highlighted letters in the list when it match key
            var match = RegExp(this.value, 'gi');
            $(list).find(".text").html(function () {
                if (!filter) return $(this).text();
                return $(this).text().replace(match, '<u>$&</u>');
            });
        }
        return false;
    }).keyup(function () {
        // fire the above change event after every letter
        $(this).change();

        setTimeout(function () {
            if (hasContentRegion == 1) {
                selectRegionScroll.refresh();
            }
        }, 100);
    });
}

function placeholderCustom() {
    var input = '.placeholder-custom .form-control';
    $(document).find(input).each(function () {
        var $this = $(this);
        placholderCheck($this);
    });

    $(document).on('keyup', input, function () {
        var $this = $(this);
        placholderCheck($this);
    }).on('focus', input, function () {
        var $this = $(this);
        var $parent = $this.closest('.placeholder-custom');
        $parent.removeClass('validate');
    });
}

function placholderCheck($obj) {
    var inputVal = $obj.val();
    if (inputVal !== '') {
        $obj.addClass('has-value');
    } else {
        $obj.removeClass('has-value');
    }
}

function inputCustom() {
    var input = '.input-custom input[type="text"]';
    $(document).find(input).each(function () {
        var $this = $(this);
        var $parent = $this.closest('.input-custom');
        var isUrl = $parent.data('url');
        if (isUrl) {
            inputCheck($this);
        }
    });

    $(document).on('focus', input, function () {
        var $this = $(this);
        var $parent = $this.closest('.input-custom');
        $parent.removeClass('validate');

        var $parent = $this.closest('.input-custom');
        var isUrl = $parent.data('url');
        if (isUrl) {
            inputCheck($this);
        }
    }).on('keyup', input, function () {
        var $this = $(this);
        var $parent = $this.closest('.input-custom');
        var isUrl = $parent.data('url');
        if (isUrl) {
            inputCheck($this);
        }
    });
}

function inputCheck($obj) {
    var inputVal = $obj.val();
    var $parent = $obj.closest('.input-custom');
    var tdFirstW = $parent.find('.table-css .td:first-child').innerWidth();
    var inputW = $obj.innerWidth() + tdFirstW;
    if (inputVal !== '') {
        $parent.find('.table-css').css({ 'margin-left': -tdFirstW });
        $obj.css({ 'width': inputW });
    } else {
        $parent.find('.table-css').css({ 'margin-left': '' });
        $obj.css({ 'width': '' });
    }
}