$(document).ready(function () {
    if ($('#divCategoryService').length !== 0) {
        iscrollSelectModal('divCategoryService', 'iscrollCategoryService', 'editCategoryModal');
    }
    if ($('#divServiceService').length !== 0) {
        iscrollSelect('divServiceService', 'iscrollServiceService');
    }

    $('#editCategoryModal').on('shown.bs.modal', function () {
        if ($('#selectionCaterogy').length !== 0) {
            iscrollContent('#selectionCaterogy');
        }
    });

    iscrollSelectK('#selectWhoProvide', '#iscrollWhoProvide');

    $('#chosenServicePerson').chosen();

    $('#chosenServicePerson1').chosen({
        isShowDropDown: true
    });

    $('#mobileListAccordion').on('show.bs.collapse', function () {
        $('#mobileList .wrap-dropdown-menu-inner-content').css({'height': ''});
    });

    $('#mobileListAccordion').on('shown.bs.collapse', function () {
        refreshNiceScroll('#mobileList');
    });
});