function getWindowWidth(){
    return window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
}

function getWindowHeight(){
    return window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
}

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
    if(isMobile.any()) {
        $('.wrapper, #detech-devices').addClass('detech-devices');
    }

    if (typeof window.verifyScrollbarWidth == "undefined") {
        window.verifyScrollbarWidth = (window.innerWidth - $(window).width()) + 'px';
        window.verifyScrollbarWidth = '<style type="text/css">.modal-open, .modal-open .wrapper{padding-right:' + window.verifyScrollbarWidth + ' !important;}</style>';
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

function setOffsetY(){
    if(isMobile.any()) {
        var offsetY = window.pageYOffset || document.documentElement.scrollTop;
        $('.wrapper, #detech-devices').css({'top': - offsetY});
        if(!isView.mobile()) {
            if($('.wrapper').hasClass('company-event-page')){
                if ($('.wrapper').find('.affix').length){
                    $('.coming-section').css({'margin-top': 0});
                }
                $('.wrapper .affix').css({'top': 20, 'position': 'fixed'});
            } else {
                $('.wrapper .affix').css({'top': 15, 'position': 'fixed'});
            }
        }
    }
}

function removeOffsetY() {
    if(isMobile.any()) {
        var offsetY = - parseInt($('#detech-devices').css('top'));
        document.body.scrollTop = offsetY;
        $('.wrapper, #detech-devices').css({'top': ''});
        if(!isView.mobile()) {
            $('.company-event-page .coming-section').css({'margin-top': ''});

            $('.wrapper .affix-top, .wrapper .affix').css({'top': '', 'position': ''});
        }
    }
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

function iscrollSelect(sectionID) {
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
                       cursorcolor: "#f3472d ",
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

function iscrollContent(sectionID) {
    if (!isMobile.Windows()) {
        if($(sectionID).find('.wrap-dropdown-menu-inner').length){
            refreshNiceScroll(sectionID);
            return;
        }

        $(sectionID).find('.scroll-content').wrap("<div class='wrap-dropdown-menu-inner'></div>").wrap("<div class='wrap-dropdown-menu-inner-content'></div>");
        var heightOfDiv = $(sectionID + ' .scroll-content').height();
        $(sectionID + ' .wrap-dropdown-menu-inner-content').height(heightOfDiv);
        $(sectionID + ' .wrap-dropdown-menu-inner').niceScroll(sectionID + ' .wrap-dropdown-menu-inner-content', {
            bouncescroll: false,
            autohidemode: false,
            cursorcolor: "#f3472d",
            cursorborder: "1px solid transparent",
            cursorborderradius: "5px",
            cursorwidth: "7px",
            background: "#8B8B8B",
            preservenativescrolling: false
        });
    }
}

function getunixtime() {
    var d = new Date;
    var unixtime_ms = d.getTime();
    var unixtime = parseInt(unixtime_ms / 1000);
    return unixtime;
}

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

function showNavAccount(){
    if(temp == 0){
        $( "#site-header" ).animate({ "height": "+=40px" }, 500 );
        temp = 1;
    }else{
        $( "#site-header" ).animate({ "height": "-=40px" }, 500 );
        temp = 0;
    }
    $( "#nav-account" ).css({top: $( "#site-header" ).height()});
    $( "#nav-account" ).toggle('blind', 500);
}

function selectArea(){
    if($('.area-section').length === 0){
        return;
    }
    var areaLeft = $('.area-section').offset().left;
    if($(window).width() < 768){
        $('.area-section div.dropdown-menu').css({'margin-left': - areaLeft});
        $('.area-section ul.dropdown-menu').css({'width': $(window).width()});
    }else{
        $('.area-section div.dropdown-menu').css({'margin-left': ''});
        $('.area-section ul.dropdown-menu').css({'width': ''});
    }
}

function listFilter(header, list) {
    var $object = $('input.input-block-level');
    var filter = $object.val();
    $object.change( function (e) {
        e.preventDefault();
        filter = $(this).val();
        if(filter != null) {
            //highlighted letters in the list when it match key
            var match = RegExp(this.value, 'gi');
            $(list).find(".text").html(function(){
                if (!filter) return $(this).text();
                return $(this).text().replace(match, '<u>$&</u>');
            });
        }
        return false;
    }).keyup( function () {
        // fire the above change event after every letter
        $(this).change();

        setTimeout(function(){
            if(hasContentRegion == 1){
                selectRegionScroll.refresh();
            }
        }, 100);
    });
}

function placeholderCustom(){
    var input = '.placeholder-custom .form-control';
    $(document).find(input).each(function(){
        var $this = $(this);
        placholderCheck($this);
    });

    $(document).on('keydown', input, function(e){
        console.log(e.keyCode);
        // Allow: backspace, tab, enter, shift, ctrl, alt, pause, caps lock, escape, print screen, insert, delete, window, context menu, num lock,
        if ($.inArray(e.keyCode, [8, 9, 13, 16, 17, 18, 19, 20, 27, 33, 34, 44, 45, 46, 91, 93, 144 ]) !== -1 ||
            // Allow: Ctrl+A, Command+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: Ctrl+C, Command+C
            (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: Ctrl+X, Command+X
            (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow:  pg up, pg down, home, end, left, right, down, up
            (e.keyCode >= 33 && e.keyCode <= 40) ||
            // Allow: F1 - F24
            (e.keyCode >= 111 && e.keyCode <= 135)) {
                // let it happen, don't do anything
                return;
        }
        var $this = $(this);
        var value = $this.val() + String.fromCharCode(e.keyCode);
        if(value !== ''){
            $this.addClass('has-value');
        }
    }).on('keyup', input, function(){
        var $this = $(this);
        placholderCheck($this);
    }).on('focus', input, function(){
        var $this = $(this);
        var $parent = $this.closest('.placeholder-custom');
        $parent.removeClass('validate');
    });
}

function placholderCheck($obj){
    var inputVal = $obj.val();
    if(inputVal !== ''){
        $obj.addClass('has-value');
    }else{
        $obj.removeClass('has-value');
    }
}

function inputCustom(input){
	$(document).find(input).each(function(){
        var $this = $(this);
		inputCheck($this);
    });

    $(document).on('focus', input, function(){
        var $this = $(this);

        var $parent = $this.closest('.input-custom');
        $parent.removeClass('validate');
        if($parent.hasClass('input-url')) {
            $parent.addClass('focus');
        }
    }).on('keyup', input, function(){
        var $this = $(this);
		inputCheck($this);
	}).on('keydown', input, function(e){
        var $this = $(this);
        var $parent = $this.closest('.input-custom');
        if($parent.hasClass('input-url') && e.keyCode === 13){
            return false;
        }
    }).on('blur', input, function(){
        var $this = $(this);

        var $parent = $this.closest('.input-custom');
        if($parent.hasClass('input-url')) {
            $parent.removeClass('focus');
        }
    });
}

function inputCheck($obj){
	var $parent = $obj.closest('.input-custom');
	if($parent.hasClass('input-url') || $parent.hasClass('input-price')){
        var inputVal = $parent.hasClass('input-url') ? $obj.text() : $obj.val();
        var $parent = $obj.closest('.input-custom');

        if($parent.find('.placeholder').length) {
            if(inputVal.length === 0){
                $parent.addClass('has-placeholder');
            } else {
                $parent.removeClass('has-placeholder');
            }
        }
    }
}

function datetimepickerDate($txtDate, $section){
    $txtDate.datetimepicker({
        format: 'DD/MM/YYYY',
        sideBySide: true,
        minDate: now,
        useCurrent: false,
        focusOnShow: false,
        ignoreReadonly: true,
        locale: moment.locale('en-gb')
    }).on('dp.change', function() {
    }).on('dp.show', function() {
        var $this = $(this);
        var $parent = $this.closest('.date-custom');
        var $datetimepicker = $parent.find('.bootstrap-datetimepicker-widget');
        if($datetimepicker.hasClass('top')){
            $section.addClass('open top');
        }else if($datetimepicker.hasClass('bottom')){
            $section.addClass('open bottom');
        }
        $('.bootstrap-datetimepicker-widget').clone().appendTo('#sectionDateEnd');
    }).on('dp.hide', function() {
        $section.removeClass('open top bottom');
    });
}

function readFile(input, $croppieID) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var result = e.target.result;
            var arrTarget = result.split(';');
            var tipo = arrTarget[0];
            if (tipo == 'data:image/jpeg' || tipo == 'data:image/png') {
                var objImage = $croppieID.croppie('bind', {
                    url: e.target.result,
                    enableExif: true
                });
            } else {
                alert('Accept only .jpg o .png image types');
            }
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function crop(section, file, modal, croppie, type){
    // Begin crop general
    var $croppieSlider = $('<a class="croppie-zoom croppie-zoom-in">-</a><a class="croppie-zoom croppie-zoom-out">+</a>');
    var $croppieCaption = $('<div id="croppie-caption" class="croppie-caption"><span><span class="icon icon-move"></span>Drag to crop</span></div>');
    // End crop general

    // Begin Banner
    var $file = $(file);
    var $modal = $(modal);
    var $file2 = $modal.find('input[type="file"]');
    var $change = $modal.find('.change');
    var $btn = $modal.find('.btn-positive');
    var $section = $(section);
    var $croppie = $(croppie);
    var croppieID = '#' + $croppie.attr('id');
    var zoomOut = croppieID + ' .croppie-zoom-out';
    var zoomIn = croppieID + ' .croppie-zoom-in';

    var isUpload = false;
    $file.on('change',function(e){
        var size = $file[0].files[0].size;
        var type = $file[0].files[0].type;
        if (type == 'image/jpeg' || type == 'image/png') {
            if (size <= 1048576 * 3) {
                isUpload = true;
                $modal.modal('show');
            } else {
                alert('File size is larger than 3Mb.');
            }
        } else {
            alert('Please upload .jpg, .jpeg or .png image format!');
        }
    });

    $modal.on('shown.bs.modal', function (){
        var viewportW = 0;
        var viewportH = 0;
        var boundaryH = 0;
        var boundaryW = 0;
        // type = 1 --> scrop banner
        if(type === 1){
            viewportW = '100%';
            if (!isView.mobile()) {
                viewportH = 218;
                boundaryH = 297;
                boundaryW = 624;
            } else {
                viewportH = 121;
                boundaryH = 176;
                boundaryW = $croppie.width();
            }
        }

        // type = 2 --> scrop event's photo
        if(type === 2){
            if (!isView.mobile()) {
                viewportW = 269;
                viewportH = 346;
                boundaryW = 624;
                boundaryH = 430;
            } else {
                viewportW = 200;
                viewportH = 257;
                boundaryW = $croppie.width();
                boundaryH = 341;
            }
        }

        $croppie.html('');

        $croppie.croppie({
            viewport: {
                width: viewportW,
                height: viewportH,
                type: 'square' //default 'square'
            },
            boundary: {
                width: boundaryW,
                height: boundaryH
            },
            customClass: ''
            //enableExif: true
        });

        $croppie.find('.cr-slider-wrap').append($croppieSlider);
    }).on('shown.bs.modal', function(){
        if(isUpload) {
            readFile($file[0], $croppie);
            $croppie.find('.cr-viewport').append($croppieCaption);
            isUpload = false;
        } else {
            var orginalImage = $section.data('image');
            if (typeof (orginalImage) !== 'undefined' && orginalImage.length) {
                var objImage = $croppie.croppie('bind', {
                    url: orginalImage
                },function(){
                    $croppie.find('.cr-viewport').append($croppieCaption);
                });
            }
        }

        $file2.on('change',function(e){
            var size = $file[0].files[0].size;
            var type = $file[0].files[0].type;
            if (type == 'image/jpeg' || type == 'image/png') {
                if (size <= 1048576 * 3) {
                    readFile(this, $croppie);
                } else {
                    alert('File size is larger than 3Mb.');
                }
            } else {
                alert('Please upload .jpg, .jpeg or .png image format!');
            }
        });
    }).on('hide.bs.modal', function (){
        $croppie.croppie('bind',{url:""});
    });

    $change.on('click', function(e){
        e.preventDefault();
        $file2.click();
    });

    $btn.on('click', function () {
        $('.header-banner').removeClass('default');
        $croppie.croppie('result', 'canvas', 'viewport').then(function (result) {

        });
    });

    $(document).on('click', zoomIn, function(e){
        var objCurrent = $croppie.croppie('get');
        var step = $croppie.find('.cr-slider').attr('step');
        step = step * 10;
        var zoom_in = 0;
        if(objCurrent.zoom - step > 0){
            zoom_in = objCurrent.zoom-step;
        }
        $croppie.croppie('setZoom', zoom_in);
        $croppie.croppie('refresh');
    });

    $(document).on('click', zoomOut, function(e){
        var objCurrent = $croppie.croppie('get');
        var step = $croppie.find('.cr-slider').attr('step');
        step = step * 10;
        var max = $croppie.find('.cr-slider').attr('max');
        var zoom_out = max;
        if(objCurrent.zoom + step < max){
            zoom_out = objCurrent.zoom + step;
        }
        $croppie.croppie('setZoom', zoom_out);
        $croppie.croppie('refresh');
    });
    //End Banner
}


function tooltipResize($section, contentTooltip, classTooltip){
    var offsetYTooltip = -14;
    if(isView.mobile()){
        offsetYTooltip = -24;
    }

    $section.tooltipster({
        contentAsHTML: true,
        content: contentTooltip,
        trigger: 'click',
        position: 'bottom',
        theme:  classTooltip,
        offsetY: offsetYTooltip
    });
}

function placeCaretAtEnd(el) {
    el.focus();
    if (typeof window.getSelection != "undefined"
            && typeof document.createRange != "undefined") {
        var range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (typeof document.body.createTextRange != "undefined") {
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.collapse(false);
        textRange.select();
    }
}
