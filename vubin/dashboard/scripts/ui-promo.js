$(document).ready(function () {
    $('#chosenServicePromo').chosen();

    $('#chosenServicePromo1').chosen({
        isShowDropDown: true
    });

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

    $('#subnavAccordion').on('show.bs.collapse', function () {
        $('#subnavList .wrap-dropdown-menu-inner-content').css({'height': ''});
    });

    $('#subnavAccordion').on('shown.bs.collapse', function () {
        refreshNiceScroll('#subnavList');
    });

    $('#mobileListAccordion').on('show.bs.collapse', function () {
        $('#mobileList .wrap-dropdown-menu-inner-content').css({'height': ''});
    });

    $('#mobileListAccordion').on('shown.bs.collapse', function () {
        refreshNiceScroll('#mobileList');
    });

    $('#invitationModal').on('shown.bs.modal', function () {
        iscrollContent('#clientsList');
    });
});

$(window).on('resize', function () {

});