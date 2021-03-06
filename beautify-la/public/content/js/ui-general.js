'use strict';

var selectScroll, selectAreaScroll, selectRegionScroll, hasContentArea, hasContentRegion;

var temp = 0;
$(document).ready(function () {
    $('#select-area').selectpicker();
    $('#select-region').selectpicker({
        liveSearch: true
    });
    selectArea();

    hasContentArea = $('.area-section').find('.dropdown-menu.open').length;
    if (hasContentArea == 1) {
        $('.area-section .dropdown-menu.open').attr("id", "selectArea");
        selectAreaScroll = new IScroll('#selectArea', {
            scrollbars: true,
            mouseWheel: true,
            interactiveScrollbars: true,
            shrinkScrollbars: 'scale',
            fadeScrollbars: true,
            click: true
        });
    }

    hasContentRegion = $('.region-section').find('.dropdown-menu.open').length;
    if (hasContentRegion == 1) {
        $('<div id="selectRegion" class="section-scroll"></div>').insertAfter(".region-section .bs-searchbox");
        $('.region-section .dropdown-menu.inner').appendTo('.region-section .section-scroll');
        selectRegionScroll = new IScroll('#selectRegion', {
            scrollbars: true,
            mouseWheel: true,
            interactiveScrollbars: true,
            shrinkScrollbars: 'scale',
            fadeScrollbars: true,
            click: true
        });
    }

    // custom css expression for a case-insensitive contains()
    jQuery.expr[':'].Contains = function (a, i, m) {
        return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
    };
    listFilter($(".select-region .bs-searchbox"), $(".select-region ul.dropdown-menu"));

    // hide nav menu when click on select
    $('.region-section, .area-section').click(function (e) {
        if ($(window).width() < 768) {
            if (temp = 1) {
                $('#bs-navbar-collapse').removeClass("in").css({ 'height': 1 });
                $("#site-header").css({ "height": "" });
                temp = 0;
            }
        }
    });

    $('.region-section').click(function (e) {
        $('#select-region').selectpicker('refresh');
    });

    $(window).resize(function () {
        $("#site-header").css({ "height": "" });
        $("#nav-account").hide();
        temp = 0;
    });

    $(".link-account").click(function () {
        showNavAccount();
    });

    if (isMobile.any()) {
        $('#detech-devices').addClass("detech-devices");
        $('html').addClass("on-devices");
    }

    if (!isMobile.Windows()) {
        $('html').addClass("on-nicescroll");
    }

    if (!isView.mobile()) {
        activeAffix();
    }

    settingsModal();

    //$('.modal').on('show.bs.modal', setOffsetY);

    //$('.modal').on('show.bs.modal', centerModal);

    $('.modal').on('shown.bs.modal', centerModal);

    //$('.modal').on('hidden.bs.modal', removeOffsetY);

    placeholderCustom();

    inputCustom('.input-custom input[type="text"]');

    inputCustom('.input-custom .editable');

    $(document).on('click', '.input-url', function (e) {
        var $this = $(this);
        var $editable = $this.find('.editable');
        var $target = $(e.target);
        if (!$target.hasClass('copy')) {
            $editable.focus();
            //placeCaretAtEnd($editable[0]);
        }
    });

    $(document).on('change', 'select', function () {
        var $this = $(this);

        if ($this.siblings('.bootstrap-select').length === 0 && $this.closest('.bootstrap-select').length === 0) {
            return;
        }

        if ($this.val().trim() !== '') {
            $this.addClass('active');
        } else {
            $this.removeClass('active');
        }
        $this.selectpicker('refresh');
    });

    $(document).on('click', '#site-header .navbar-toggle', function () {
        $('html').addClass('sidebar-open');
    });

    $(document).on('click', '#sidebar .close', function () {
        $('html').removeClass('sidebar-open');
    });

    monitorResize(function () {
        $('.modal:visible').each(centerModal);

        selectArea();

        if (hasContentRegion == 1) {
            selectRegionScroll.refresh();
        }

        if (hasContentArea == 1) {
            selectAreaScroll.refresh();
        }

        if (!isView.mobile()) {
            $('html').removeClass('sidebar-open');
        }
    });
});