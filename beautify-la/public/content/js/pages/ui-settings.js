'use strict';

$(document).ready(function () {
    $('.select-settings').selectpicker();
    $('.selectpicker-settings').selectpicker();
    $('.btn-settings').click(function (e) {
        var slideNext = "#" + $(this).attr("slideNext"),
            slideCurrent = "#" + $(this).attr("slideCurrent"),
            navClass = "." + $(this).attr("slideNext");
        $(slideCurrent).addClass("hide");
        $(slideNext).removeClass("hide");
        $('#settings-steps li').removeClass("active");
        $('#settings-steps').find(navClass).addClass("active");
    });

    $('#select-payment').change(function (e) {
        var optValue = $(this).val(),
            paymentID = '#payment-' + optValue;

        console.log(paymentID);
        $('.payment-section').addClass("hide");
        $(paymentID).removeClass("hide");
    });

    $('.popover-delete').click(function (e) {
        $(this).siblings('.popover-confirm').show();
    });

    $('.popover-confirm .icon-no').click(function (e) {
        $(this).parents('.popover-confirm').hide();
    });

    $('.popover-confirm .icon-yes').click(function (e) {
        $(this).parents('.popover-confirm').hide();
    });

    var listGuest = new IScroll('#list-guest', {
        scrollbars: true,
        mouseWheel: true,
        interactiveScrollbars: true,
        shrinkScrollbars: 'scale',
        fadeScrollbars: true,
        click: true
    });

    var tabTerm = new IScroll('#tab-term', {
        scrollbars: true,
        mouseWheel: true,
        interactiveScrollbars: true,
        shrinkScrollbars: 'scale',
        fadeScrollbars: true,
        click: true
    });

    var tabPolicy = new IScroll('#tab-policy', {
        scrollbars: true,
        mouseWheel: true,
        interactiveScrollbars: true,
        shrinkScrollbars: 'scale',
        fadeScrollbars: true,
        click: true
    });

    var tabServices = new IScroll('#tab-services-list', {
        scrollbars: true,
        mouseWheel: true,
        interactiveScrollbars: true,
        shrinkScrollbars: 'scale',
        fadeScrollbars: true,
        click: true
    });

    var listServices = new IScroll('#list-services', {
        scrollbars: true,
        mouseWheel: true,
        interactiveScrollbars: true,
        shrinkScrollbars: 'scale',
        fadeScrollbars: true,
        click: true
    });

    var listClasses = new IScroll('#list-classes', {
        scrollbars: true,
        mouseWheel: true,
        interactiveScrollbars: true,
        shrinkScrollbars: 'scale',
        fadeScrollbars: true,
        click: true
    });

    var listYourServices = new IScroll('#list-your-services', {
        scrollbars: true,
        mouseWheel: true,
        interactiveScrollbars: true,
        shrinkScrollbars: 'scale',
        fadeScrollbars: true,
        click: true
    });

    var listOfferingServices = new IScroll('#list-offering-services', {
        scrollbars: true,
        mouseWheel: true,
        interactiveScrollbars: true,
        shrinkScrollbars: 'scale',
        fadeScrollbars: true,
        click: true
    });

    $('#modal-terms-privacy').on('show.bs.modal', function (e) {
        setTimeout(function () {
            tabTerm.refresh();
        }, 300);
    });

    $('#tab-rule a[data-toggle="tab"]').on('show.bs.tab', function (e) {
        var tabID = $(e.target).attr("href");
        if (tabID == "#tab-term") {
            setTimeout(function () {
                tabTerm.refresh();
            }, 300);
        } else if (tabID == "#tab-policy") {
            setTimeout(function () {
                tabPolicy.refresh();
            }, 300);
        } else if (tabID == "#tab-services-list") {
            setTimeout(function () {
                tabServices.refresh();
            }, 300);
        }
    });

    $('#tab-settings a[data-toggle="tab"]').on('show.bs.tab', function (e) {
        var tabID = $(e.target).attr("href");
        if (tabID == "#tab-settings-2") {
            setTimeout(function () {
                listServices.refresh();
            }, 300);
        }
    });

    $('#tab-categories a[data-toggle="tab"]').on('show.bs.tab', function (e) {
        var tabID = $(e.target).attr("href");
        if (tabID == "#tab-services") {
            setTimeout(function () {
                listServices.refresh();
            }, 300);
        } else if (tabID == "#tab-classes") {
            setTimeout(function () {
                listClasses.refresh();
            }, 300);
        }
    });

    $('#modal-offerings').on('show.bs.modal', function (e) {
        setTimeout(function () {
            listYourServices.refresh();
        }, 300);
    });
});