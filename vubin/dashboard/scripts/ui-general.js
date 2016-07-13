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
},
wScreen = window.innerWidth;

if (!isMobile.any()) {
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
}

function listFilter(inputSearch, list) {
    var $object = $(inputSearch);
    var filter = $object.val();
    $object.change(function (e) {
        e.preventDefault();
        filter = $(this).val();
        if (filter != null) {
            //highlighted letters in the list when it match key
            var match = new RegExp(this.value, 'gi');
            $(list).find(".text").html(function () {
                if (!filter) { return $(this).text(); }
                return $(this).text().replace(match, '<u>$&</u>');
            });
        }
        return false;
    }).keyup(function () {
        // fire the above change event after every letter									
        $(this).change();
    });
}

function iscrollSelectModal(sectionID, scrollName, modalName) {
    var $sectionID = $('#' + sectionID),
		$modalID = $('#' + modalName),
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

        $sectionID.find('.popover-title').click(function () {
            $modalID.modal('show');
        });
        
		if (!isMobile.Windows()) {
			$sectionID.find('.dropdown-menu.inner').wrap("<div class='wrap-dropdown-menu-inner'></div>").wrap("<div class='wrap-dropdown-menu-inner-content'></div>");
			$('#' + sectionID + ' select').on('shown.bs.select', function (e) {
				var heightOfUL = $('#' + sectionID + ' ul.inner').height();
				$('#' + sectionID + ' .wrap-dropdown-menu-inner-content').height(heightOfUL);
				$('#' + sectionID + ' .wrap-dropdown-menu-inner').niceScroll('#' + sectionID + ' .wrap-dropdown-menu-inner-content', 
					{
						bouncescroll: false
					});
			});
		}
    }
}

function iscrollSelectSearchModal(sectionID, scrollName, modalName) {
    var $sectionID = $('#' + sectionID),
		$modalID = $('#' + modalName),
		scrollID = '#' + scrollName;
    if ($sectionID.length === 0) {
        return;
    }
    if ($sectionID.find('.bootstrap-select').length === 0) {
        $sectionID.find('select').selectpicker({ liveSearch: true });
        $sectionID.find('select').on('loaded.bs.select', function () {
            listFilter('#' + sectionID + ' .bs-searchbox input', $('#' + sectionID + ' ul.dropdown-menu'));
        });

        $sectionID.find('select').on('hide.bs.select', function () {
            $sectionID.find('.form-control').trigger('blur');
        });

        $sectionID.find('.popover-title').click(function () {
            if ($('.tooltipster-personal').length !== 0) {
                $('.tooltipster-personal').remove();
            }
            $('#addCalendarModal').modal('hide');

            $('#addCalendarModal').on('hidden.bs.modal', function () {
                $modalID.modal('show');
            });

            $modalID.on('hidden.bs.modal', function () {
                $('#addCalendarModal').modal('show');
            });
        });

        $sectionID.find('.btn-personal').attr('onClick', 'showPesonalInfo(this)');        

		if (!isMobile.Windows()) {
			$sectionID.find('.dropdown-menu.inner').wrap("<div class='wrap-dropdown-menu-inner'></div>").wrap("<div class='wrap-dropdown-menu-inner-content'></div>");
			$('#' + sectionID + ' select').on('shown.bs.select', function (e) {
				var heightOfUL = $('#' + sectionID + ' ul.inner').height();
				$('#' + sectionID + ' .wrap-dropdown-menu-inner-content').height(heightOfUL);
				$('#' + sectionID + ' .wrap-dropdown-menu-inner').niceScroll('#' + sectionID + ' .wrap-dropdown-menu-inner-content', 
					{
						bouncescroll: false
					});
			});	
		}
    }
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
			$sectionID.find('.dropdown-menu.inner').wrap("<div class='wrap-dropdown-menu-inner'></div>").wrap("<div class='wrap-dropdown-menu-inner-content'></div>");
			$('#' + sectionID + ' select').on('shown.bs.select', function (e) {
				var heightOfUL = $('#' + sectionID + ' ul.inner').height();
				$('#' + sectionID + ' .wrap-dropdown-menu-inner-content').height(heightOfUL);
				$('#' + sectionID + ' .wrap-dropdown-menu-inner').niceScroll('#' + sectionID + ' .wrap-dropdown-menu-inner-content', 
					{
						bouncescroll: false
					});
			});
		}
    }
}

function iscrollContent(sectionID) {    
	if (!isMobile.Windows()) {
		$(sectionID).find('.scroll-content').wrap("<div class='wrap-dropdown-menu-inner'></div>").wrap("<div class='wrap-dropdown-menu-inner-content'></div>");
		var heightOfDiv = $(sectionID + ' .scroll-content').height();
		$(sectionID + ' .wrap-dropdown-menu-inner-content').height(heightOfDiv);
		$(sectionID + ' .wrap-dropdown-menu-inner').niceScroll(sectionID + ' .wrap-dropdown-menu-inner-content', 
		{
			bouncescroll: false
		}); 
	}
}

function existSelect(sectionClass) {
    var $sectionClass = $('.' + sectionClass);
    if ($sectionClass.length !== 0) {
        $sectionClass.find('select').selectpicker();
    }
}

function centerModals($element) {
    var $modals;
    if ($element.length) {
        $modals = $element;
    } else {
        $modals = $('.modal-vcenter:visible');
    }
    $modals.each(function () {
        var $clone = $(this).clone().css('display', 'block').appendTo('body');
        var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
        top = top > 0 ? top : 0;
        $clone.remove();
        $(this).find('.modal-dialog').css("margin-top", top);
    });
}

function minHeightBody() {
    $('.kuyam-section, #calendarDaysWrap').css({ 'min-height': '' });
    var hScreen = $(window).height(),
		hHeader = $('.kuyam-header').height(),
		hFooter = $('.kuyam-footer').height();
    $('.kuyam-section').css({ 'min-height': hScreen - hHeader - hFooter });
    if ($('.kuyam-page').length !== 0) {
        $('.kuyam-page').css({ 'min-height': hScreen - hHeader - hFooter });
    }
    if ($('#subnavList').length !== 0) {
        if ((hScreen - hHeader - hFooter) > $('.kuyam-content form').height()) {
            $('#subnavList').css({ 'max-height': hScreen - hHeader - hFooter - 65 });
        } else {
            $('#subnavList').css({ 'max-height': $('.kuyam-content form').innerHeight() });
        }
    }
    if ($('.calendar-page').length !== 0) {
        $('.calendar-page').css({ 'width': $(window).width() });
    }
    if ($('#calendarDaysWrap').length !== 0 && $(window).width() > 1023) {
        $('#calendarDaysWrap').css({ 'min-height': hScreen - hHeader - hFooter - 110 });
    }
}

function weekRepeat() {
    $('.week-list li').on('click', function () {
        var isActive = $(this).hasClass('active');
        if (isActive) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });
}

function customPickTime($id, date, increment) {
    var fromdate = moment(date);
    var todate = moment(date).add(increment, "m");

    $id.find('.txt-hour').val(fromdate.format("h:mm A") + ' - ' + todate.format("h:mm A"))
    return $id.find('tfoot .timepicker-hour').text(todate.format("h")),
        $id.find('tfoot .timepicker-minute').text(todate.format("mm")),
        $id.find('tfoot .timepicker-period').text(todate.format("A"));
}

function maxCol(section) {
    if ($(section).length === 0) {
        return;
    }
    var maxColW = 0;
    $(section).find('.col-title').css({ 'width': '' });
    $(section).find('.col-title').each(function () {
        if ($(this).width() > maxColW) {
            maxColW = $(this).innerWidth();
        }
    });
    $(section).find('.col-title').css({ 'width': maxColW });
    $(section).find('.col-info').css({ 'width': $(section).find('.table-css').width() - maxColW });
}

function fixHeight(section, item) {
    if ($(section).length === 0) {
        return;
    }
    var maxItemH = 0;
    $(section).find(item).css({ 'height': '' });
    $(section).find(item).each(function () {
        if ($(this).innerHeight() > maxItemH) {
            maxItemH = $(this).innerHeight();
        }
    });
    $(section).find(item).css({ 'height': maxItemH });
}

function showPesonalInfo($this) {
    var liTag = $this.parentElement.parentElement;
    var liData = liTag.attributes.getNamedItem('data-original-index').value;
    var liClass = liTag.className;

    if (wScreen < 1024) {
        $('#personalModal').modal('show');
    } else {
        var personalContent = $('#dataPersonal').html();

        $('.single-right .btn-personal').tooltipster({
            contentAsHTML: true,
            content: personalContent,
            trigger: 'custom',
            position: 'right',
            theme: 'tooltipster-default tooltipster-personal',
            offsetX: -5,
            interactive: true,
            debug: false,
            onlyOne: true
        });

        $('.single-left .btn-personal').tooltipster({
            contentAsHTML: true,
            content: personalContent,
            trigger: 'custom',
            position: 'left',
            theme: 'tooltipster-default tooltipster-personal',
            offsetX: -5,
            interactive: true,
            debug: false,
            onlyOne: true
        });

        $('.multi-right .btn-personal').tooltipster({
            contentAsHTML: true,
            content: personalContent,
            trigger: 'custom',
            position: 'right',
            theme: 'tooltipster-default tooltipster-personal',
            offsetX: -5,
            interactive: true,
            debug: false,
            onlyOne: true
        });

        if ($('.tooltipster-personal').length !== 0) {
            $('.tooltipster-personal').remove();
        }

        $($this).tooltipster('show');
    }
}

function siteHeader() {
	var w = window.innerWidth
			|| document.documentElement.clientWidth
			|| document.body.clientWidth;
    if (wScreen > 1023) {
        $('.kuyam-header .navbar-header, .kuyam-header .navbar-nav > li').css({ 'width': w / 7 });
    } else {
        $('.kuyam-header .navbar-header, .kuyam-header .navbar-nav > li').css({ 'width': '' });
    }
}

function iscrollSelectK(sectionID, scrollName) {
    if ($(sectionID).length !== 0) {
        $(sectionID).selectKustom();

        //if (!isMobile.any()) {
            /*if ($(scrollName).data('IScroll')) {
                return;
            }

            var selectScroll = new IScroll(scrollName, {
                //keyBindings: true, 
                mouseWheel: true,
                scrollbars: true,
                interactiveScrollbars: true,
                shrinkScrollbars: 'clip',
                fadeScrollbars: true,
				deceleration: 0,
				bounceTime: 0
            });

            $(scrollName).data('IScroll', selectScroll);*/
			$(scrollName).niceScroll({touchbehavior:true});
        //}
    }
}

$(document).ready(function () {

    $(document).on('hidden.bs.modal', '.modal', function () {
        $('.modal:visible').length && $(document.body).addClass('modal-open');
    });

    if (isMobile.any()) {
        $('html').addClass('on-device');
    } else {
        $('html').addClass('on-desktop');
    }
	
	if (!isMobile.Windows()) {
        $('html').addClass('on-nicescroll');
    }

    minHeightBody();

    siteHeader();

    $(document).on('show.bs.modal', '.modal', function () {
        centerModals($(this));
    });

    iscrollContent('#tabTerms');
    iscrollContent('#tabPrivacy');
    iscrollContent('#tabServices');

    var termActive;
    $('.link-terms').click(function (e) {
        e.preventDefault();
        termActive = $(this).attr('href');
        $('#termsModal').modal('show');
    });

    $('#termsModal').on('show.bs.modal', function (e) {
        $('.terms-tabs').tab('show');
        $('.terms-tabs a[href="' + termActive + '"]').tab('show');
    });

    $('#termsModal').on('shown.bs.modal', function (e) {
        $('#tabTerms').data('IScroll').refresh();
        $('#tabPrivacy').data('IScroll').refresh();
        $('#tabServices').data('IScroll').refresh();
    });

    $('.terms-tabs').on('shown.bs.tab', function (e) {
        $('#tabTerms').data('IScroll').refresh();
        $('#tabPrivacy').data('IScroll').refresh();
        $('#tabServices').data('IScroll').refresh();
    });

    $('.subnav-ul a').on('click', function (e) {
        e.preventDefault();
        var dataDropdown = $(this).closest('ul').data('dropdown');
        var ulClass = $(this).closest('ul').attr('class');
        if (ulClass === 'subnav-ul' && dataDropdown === true) {
            thisOpen = $(this).closest('li').hasClass('open');
            hasOpen = $(this).parents('.subnav-ul').find('.open');

            if (hasOpen.length !== 0) {
                if (thisOpen === true) {
                    $(this).siblings('ul').slideToggle(300);
                    $(this).closest('li').removeClass('open');
                } else {
                    $(this).closest('ul').find('.open ul').slideToggle(300);
                    $(this).closest('ul').find('li').removeClass('open');

                    $(this).closest('li').addClass('open');
                    $(this).siblings('ul').slideToggle(300);
                }
            } else {
                $(this).closest('li').addClass('open');
                $(this).siblings('ul').slideToggle(300);
            }

            setTimeout(function () {
                $('#subnavList').data('IScroll').refresh();
            }, 300);

        } else {
            $(this).closest('ul').find('li').removeClass('active');
            $(this).closest('li').addClass('active');
        }
    });
});

$(window).on('resize', function () {
    wScreen = window.innerWidth;

    minHeightBody();

    siteHeader();

    centerModals($(this));

    // prevent screen flashing when multiple modals shown
    $(document).on('hidden.bs.modal', '.modal', function () {
        if (isMobile.any()) {
            if ($('.modal:visible').length) {
                $(document.body).addClass('modal-open');
            }
        } else {
            if ($('.modal:not("#addCalendarModal"):visible').length) {
                $(document.body).addClass('modal-open');
            }
        }
    });

    // get padding right of body when a modal shown, only once. Reason: prevent screen flashing
    $(document).one('shown.bs.modal', '.modal', function () {
        if (typeof window.verifyScrollbarWidth == "undefined") {
            window.verifyScrollbarWidth = $('body').css("padding-right");
            window.verifyScrollbarWidth = '<style type="text/css">.modal-open{padding-right:' + window.verifyScrollbarWidth + ' !important;}</style>';
            $(window.verifyScrollbarWidth).appendTo($('head'));
        }
    });
});