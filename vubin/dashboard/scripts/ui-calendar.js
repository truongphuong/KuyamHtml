function minHeightCalendar() {
    var hScreen = $(window).height(),
        hHeader = $('.kuyam-header').outerHeight(),
        hFooter = $('.kuyam-footer').height();
    if ($('.calendar-page').length !== 0) {
        $('.calendar-page').css({ 'width': $(window).width() });
    }
    if ($('#calendarDaysWrap').length !== 0 && $(window).width() > 1023) {
        $('#calendarDaysWrap').css({ 'min-height': hScreen - hHeader - hFooter - 110 });
    }
}

function iscrollSelectTabs(tabContentID) {
    $('.txt-date').val('03/10/2016').change();

    if (tabContentID === "formAppointment") {
        iscrollSelectSearchModal('divClientAppointment', 'iscrollClientAppointment', 'addClientModal');

        iscrollSelectSearchModal('divStaffAppointment', 'iscrollStaffAppointment', 'addStaffModal');

        iscrollSelect('divCategoryAppointment', 'iscrollCategoryAppointment');

        iscrollSelect('divServiceAppointment', 'iscrollServiceAppointment');
    } else if (tabContentID === "formClass") {
        iscrollSelectSearchModal('divStaffClass', 'iscrollStaffClass', 'addStaffModal');

        iscrollSelect('divCategoryClass', 'iscrollCategoryClass');

        iscrollSelect('divClass', 'iscrollClass');
    } else {
        iscrollSelectSearchModal('divStaffBlocker', 'iscrollStaffBlocker', 'addStaffModal');
    }
}

function cssRepositionTooltipster(strCSS) {
    if ($(document).find('#styleRepositionTooltipster').length !== 0) {
        $('#styleRepositionTooltipster').remove();
    }
    $('<style id="styleRepositionTooltipster"></style>').appendTo('head');
    $('#styleRepositionTooltipster').append(strCSS);
}

function more1023() {
    if (wScreen > 1023) {
        $('.calendar-date-title, .calendar-date').css({ 'max-width': $(window).width() / 7 });

        var detailContent = $('#dataDetails').html();
        $('#dataDetails').remove();
        $('.calendar-day .calendar-block').tooltipster({
            contentAsHTML: true,
            content: detailContent,
            trigger: 'custom',
            position: 'right',
            theme: 'tooltipster-default tooltipster-details',
            offsetX: -5,
            interactive: true,
            positionTracker: true,
            autoClose: false,
            debug: false,
            functionReady: function (origin, tooltip) {
                $('.block-details .close').click(function () {
                    $('.calendar-day .calendar-block').tooltipster('hide');
                    $('#styleRepositionTooltipster').remove();
                });

                maxCol('#calendarDetails');
                iscrollContent('#iscrollDetailsNotes');

                var topCalendar = $('.calendar-section').offset().top;
                var bottomCalendar = $('.kuyam-footer').offset().top;

                var hOrigin = $(this).innerHeight();
                var hTooltip = tooltip.innerHeight();

                var topOrigin = $(this).offset().top;
                var bottomOrigin = topOrigin + hOrigin;

                var topTooltip = parseInt(tooltip.css('top'));
                var bottomTooltip = topTooltip + hTooltip;

                if (topTooltip < topCalendar) {
                    tooltip.css({ 'top': 127 });
                    $('.tooltipster-arrow span').css({ 'top': 62 });

                    var cssDefine = '';
                    cssDefine += '.tooltipster-details{top: 127px !important;}';
                    cssDefine += '.tooltipster-details .tooltipster-arrow span{top: 62px !important;}';
                    cssRepositionTooltipster(cssDefine);
                } else {
                    var totalMinus = 0;
                    if (bottomTooltip > bottomCalendar) {
                        totalMinus = hTooltip - hOrigin;
                        tooltip.css({ 'top': topOrigin - totalMinus });
                        $('.tooltipster-arrow span').css({ 'top': totalMinus + 25 });

                        var cssDefine = '';
                        cssDefine += '.tooltipster-details{top: ' + (topOrigin - totalMinus) + 'px !important;}';
                        cssDefine += '.tooltipster-details .tooltipster-arrow span{top: ' + (totalMinus + 25) + 'px !important;}';
                        cssRepositionTooltipster(cssDefine);
                    } else {
                        totalMinus = (hTooltip - hOrigin) / 2;
                        $('.tooltipster-arrow span').css({ 'top': totalMinus + 25 });

                        var cssDefine = '';
                        cssDefine += '.tooltipster-details .tooltipster-arrow span{top:' + (totalMinus + 25) + 'px !important;}';
                        cssRepositionTooltipster(cssDefine);
                    }
                }
            }
        });

        $('.calendar-day .calendar-block').click(function (e) {
            if ($('.tooltipster-default').length !== 0) {
                return;
            }
            if ($(e.target).hasClass('calendar-attendee') || $(e.target).parents().hasClass('calendar-select-status')) {
                return;
            }
            $(this).tooltipster('show');
        });

        var attendeeContent = $('#dataAttendee').html();
        $('#dataAttendee').remove();
        $('.calendar-attendee').tooltipster({
            contentAsHTML: true,
            content: attendeeContent,
            trigger: 'custom',
            position: 'right',
            theme: 'tooltipster-default tooltipster-attendee',
            offsetX: -5,
            interactive: true,
            positionTracker: true,
            autoClose: false,
            debug: false,
            functionReady: function (origin, tooltip) {
                $('.block-attendee .close').click(function () {
                    $('.calendar-attendee').tooltipster('hide');
                    $('#styleRepositionTooltipster').remove();
                });

                iscrollContent('#iscrollAttendeeList');

                var bottomCalendar = $('.kuyam-footer').offset().top;

                var hOrigin = $(this).innerHeight();
                var hTooltip = tooltip.innerHeight();

                var topOrigin = $(this).offset().top;

                var topTooltip = parseInt(tooltip.css('top'));
                var bottomTooltip = topTooltip + hTooltip;

                if (bottomTooltip > bottomCalendar) {
                    totalMinus = hTooltip - hOrigin;
                    tooltip.css({ 'top': topOrigin - totalMinus - 1 });
                    $('.tooltipster-arrow span').css({ 'top': totalMinus + 14 });

                    var cssDefine = '';
                    cssDefine += '.tooltipster-attendee .tooltipster-arrow span{top:' + (totalMinus + 14) + 'px !important;}';
                    cssRepositionTooltipster(cssDefine);
                }
            }
        });
        $('.calendar-attendee').click(function () {
            if ($('.tooltipster-default').length !== 0) {
                return;
            }
            $(this).tooltipster('show');
        });

        $('#addCalendarModal').on('click', function (e) {
            if ($(e.target).hasClass('btn-personal') || $(e.target).parent().hasClass('btn-personal')) {
                return;
            }

            if ($('.tooltipster-personal').length !== 0) {
                $('.tooltipster-personal').remove();
            }
        });

        /*if ($('#addCalendarModal').hasClass('in')) {
            if ($('.kuyam-section').find('#addCalendarModal').length === 1) {
                $('#addCalendarModal').appendTo('body');

                $('.calendar-page').removeClass('hide');

                $('body').css({ 'padding-right': 17 });
                $('body').addClass('modal-open');
                $('#addCalendarModal').css({ 'z-index': '' });
                $('<div class="modal-backdrop fade in"></div>').appendTo('body');
            }
        }*/
    }
}

function less1024() {
    if (wScreen < 1024) {
        $('.calendar-date-title, .calendar-date').css({ 'max-width': $(window).width() });

        if ($('.tooltipster-attendee').length !== 0) {
            $('.tooltipster-attendee').remove();
        }

        if ($('.tooltipster-personal').length !== 0) {
            $('.tooltipster-personal').remove();
        }

        if ($('.tooltipster-details').length !== 0) {
            $('.tooltipster-details').remove();
        }

        $('.calendar-details').click(function (e) {
            e.preventDefault();
            $('#detailsModal').modal('show');
        });

        $('.calendar-attendee').click(function (e) {
            e.preventDefault();
            $('#attendeeModal').modal('show');
        });

        /*if ($('#addCalendarModal').hasClass('in')) {
            if ($('.kuyam-section').find('#addCalendarModal').length === 0) {
                $('#addCalendarModal').appendTo('.kuyam-section');

                $('.calendar-page').addClass('hide');

                $('body').css({ 'padding-right': '' });
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
                $('#addCalendarModal').css({ 'z-index': 1000 });
            }
        }

        $('.calendar-header .btn-add').click(function () {
            if ($('.kuyam-section').find('#addCalendarModal').length === 0) {
                $('#addCalendarModal').appendTo('.kuyam-section');
            }
            $('#addCalendarModal').modal('show');

            $('.calendar-page').addClass('hide');
        });

        $('#addCalendarModal').on('shown.bs.modal', function () {
            $('body').css({ 'padding-right': '' });
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
            $('#addCalendarModal').css({ 'z-index': 1000 });
        });

        $('#addCalendarModal .close').click(function () {
            $('.calendar-page').removeClass('hide');
        });*/
    }
}

$(document).ready(function () {
	minHeightCalendar();

    iscrollSelectModal('divStaffCalendar', 'iscrollStaffCalendar', 'addStaffModal');

    existSelect('calendar-select-status');

    $('.calendar-select-status select').change(function () {

        var thisVal = $(this).val();
        if (thisVal === "0") {
            $('#cancelCalendarModal').modal('show');
        }
    });

    // btn-personal
    $(document).on('click', '.btn-personal', function (e) {
        e.stopPropagation();
    });

    more1023();
    less1024();

    $('#overwriteModal').on('shown.bs.modal', function () {
        iscrollContent('#blockList');
    });

    $('#addCalendarModal').on('shown.bs.modal', function () {
        // Repeat select
        existSelect('form-select-repeat');

        weekRepeat();

        $('.form-select-repeat select').change(function () {
            if ($(this).val() === "0") {
                $(this).parents('.repeat-section').find('.week-list').addClass('hide');
            } else {
                $(this).parents('.repeat-section').find('.week-list').removeClass('hide');
            }
        });

        // Datetimepicker
        $('.txt-date').datetimepicker({
            sideBySide: true,
            format: 'ddd, MMM Do',
            defaultDate: moment(),
            minDate: '03/10/2016'
        });

        $('.timepicker-section').datetimepicker({
            inline: true,
            sideBySide: true,
            format: 'LT'
        }).on('dp.change', function (e) {
            var dataSection = $(this).attr('data-section');
            $parent = $('#' + dataSection);
            customPickTime($parent, e.date, 30);
        });
        //$('.timepicker-section').data("DateTimePicker").defaultDate('02/19/2016 12:00 AM');

        $('.timepicker-from').datetimepicker({
            inline: true,
            sideBySide: true,
            format: 'LT'
        });
        //$('.timepicker-from').data("DateTimePicker").defaultDate('02/19/2016 12:00 AM');

        $('.timepicker-to').datetimepicker({
            inline: true,
            sideBySide: true,
            format: 'LT'
        });
        //$('.timepicker-to').data("DateTimePicker").defaultDate('02/19/2016 12:00 AM');

        // Tabs
        var tabContentID = $('#tabsCalendar li.active a[data-toggle="tab"]').attr('aria-controls'),
			iscrollActive = $('#tabsCalendar li.active a[data-toggle="tab"]').attr('aria-iscroll');
        if (iscrollActive === true) {
            return;
        }

        $('#tabsCalendar li.active a[data-toggle="tab"]').attr('aria-iscroll', 'true');

        iscrollSelectTabs(tabContentID);

    });

    $('#tabsCalendar a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var tabContentID = $(e.target).attr('aria-controls'),
			iscrollActive = $(e.target).attr('aria-iscroll');
        if (iscrollActive === true) {
            return;
        }

        $(e.target).attr('aria-iscroll', 'true');

        iscrollSelectTabs(tabContentID);
    });

    $('#detailsModal').on('shown.bs.modal', function () {
        iscrollContent('#iscrollBlockNotes');
    });

    $('#attendeeModal').on('shown.bs.modal', function () {
        iscrollContent('#iscrollBlockAttendeeList');
    });
});

$(window).on('resize', function () {
    minHeightCalendar();

    more1023();
    less1024();
});