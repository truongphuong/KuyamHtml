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

function modalOpen(){
    if (typeof window.verifyScrollbarWidth == "undefined") {
        window.verifyScrollbarWidth = (window.innerWidth - $(window).width()) + 'px';
        var $siteHeader = $('.site-header');
        if($siteHeader.length && $siteHeader.css('position') === 'fixed'){
            window.verifyScrollbarWidth = '<style type="text/css">.modal-open{padding-right:' + window.verifyScrollbarWidth + ' !important;}.modal-open .site-header{padding-right:' + window.verifyScrollbarWidth + ';}</style>';
        }else{
            window.verifyScrollbarWidth = '<style type="text/css">.modal-open{padding-right:' + window.verifyScrollbarWidth + ' !important;}</style>';
        }
        $(window.verifyScrollbarWidth).appendTo($('head'));
    }
}

function centerModals() {
    $(this).css('display', 'block');
    var $dialog = $(this).find(".modal-dialog");
    var offset = ($(this).height() - $dialog.height()) / 2;
    offset = offset > 0 ? offset : 0;
    // Center modal vertically in window
    $dialog.css("margin-top", offset);
}

$(function () {
    modalOpen();

    $(document).on('show.bs.modal', '.modal', centerModals);

	if (isMobile.any()) {
		$('#detech-devices').addClass("detech-devices");
	}

	//mobile side menu



	$('div.navbar-toggle').click(function () {
		$('.menu__wrap').addClass('menu-slide-right');
		$('.bg-fading').addClass('show-bg-fading');
		$('.icon_mobile_close_menu').show();
		//$(this).hide();

		$('.menu__level3, .menu__level2 li').hide();
		$('.menu__level2').show();

		$($('.menu__level2 li').get()).each(function (i) {
			var $li = $(this);
			setTimeout(function () {
				$li.addClass('fadeInLeft').show();
			}, i * 50); // delay 100 ms
		});


	});

	$('.bg-fading, .icon_mobile_close_menu').click(function () {
		$('.menu__wrap').removeClass('menu-slide-right');
		$('.bg-fading').removeClass('show-bg-fading');
		$('.icon_mobile_close_menu').hide();
		//$('.navbar-toggle').show();
	});


	/* begin responsive select box custom */


	var _selectBox = $('.select-custom-box .book-me-session-select');

	_selectBox.change(function () {

		resizeSelectBox();

	});

	$(window).resize(function () {

		resizeSelectBox();
	});


	function resizeSelectBox() {

		var _defaultWidthSelect = 14;
		var _mobilePort = 480;
		var _maxWidthSelectBox = 145;
		var _minWidthSelectBox = 70;
		var _maxWidthSelectBoxSmall = 180;
		var _minWidthSelectBoxSmall = 120;

		var _widthSelect = _selectBox.val().length * _defaultWidthSelect;
		if ($('body').width() < _mobilePort) {
			if (_widthSelect > _maxWidthSelectBox) {
				_widthSelect = _maxWidthSelectBox;
			}
			if (_widthSelect < _minWidthSelectBox) {
				_widthSelect = _minWidthSelectBox;
			}
		} else {
			if (_widthSelect > _maxWidthSelectBoxSmall) {
				_widthSelect = _maxWidthSelectBoxSmall;
			}
			if (_widthSelect < _minWidthSelectBoxSmall) {
				_widthSelect = _minWidthSelectBoxSmall;
			}
		}
		_selectBox.css("width", _widthSelect);

	}

	/* end responsive select box custom */



	$('.btn_sub_item').addClass('sub_menu_icon_down');

	$('.btn_sub_item').click(function () {
		//$('.dropmenu-item-content').slideUp();
		$(this).parent().find('.dropmenu-item-content').slideToggle();
		$(this).toggleClass('sub_menu_icon_up', 'sub_menu_icon_down');
	});



	$('.menu__level2, .menu__level3').hide();

	$('.menu__level2').show();

	$('.btn_menu_dashboard').click(function () {

		$('.menu__level2, .menu__level3 li').hide();
		$('.menu__level3').show();


		$($('.menu__level3 li').get()).each(function (i) {
			var $li = $(this);
			setTimeout(function () {

				$li.addClass('fadeInRight').show();
			}, i * 50); // delay 100 ms
		});


	});

	$('.btn_menu_back').click(function () {

		$('.menu__level3, .menu__level2 li').hide();
		$('.menu__level2').show();


		$($('.menu__level2 li').get()).each(function (i) {
			var $li = $(this);
			setTimeout(function () {
				$li.addClass('fadeInLeft').show();
			}, i * 50); // delay 100 ms
		});


	});

});