$(document).ready(function () {
    iscrollSelectSearch('divServicePromo', 'iscrollServicePromo');

    $('#txtStartDate').datetimepicker({
        sideBySide: true,
        format: 'MM/DD/YYYY',
        defaultDate: moment(),
        minDate: '03/10/2016'
    });

    $('#txtEndDate').datetimepicker({
        sideBySide: true,
        format: 'MM/DD/YYYY',
        defaultDate: moment(),
        minDate: '03/10/2016'
    });

    $('#selectStartTime').selectpicker();
    $('#selectEndTime').selectpicker();
});

$(window).on('resize', function () {

});