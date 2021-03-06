$(document).ready(function () {
    if ($('#divCategoryClass').length !== 0) {
        iscrollSelectModal('divCategoryClass', 'iscrollCategoryClass', 'editCategoryModal');
    }
    if ($('#divClassClass').length !== 0) {
        iscrollSelect('divClassClass', 'iscrollClassClass');
    }

    $('#editCategoryModal').on('shown.bs.modal', function () {
        if ($('#selectionCaterogy').length !== 0) {
            iscrollContent('#selectionCaterogy');
        }
    });

    iscrollSelectK('#selectWhoTeach', '#iscrollWhoTeach');

    $('#chosenClassTeacher').chosen();

    $('#chosenClassTeacher1').chosen({
        isShowDropDown: true
    });

    $('#mobileListAccordion').on('show.bs.collapse', function () {
        $('#mobileList .wrap-dropdown-menu-inner-content').css({'height': ''});
    });

    $('#mobileListAccordion').on('shown.bs.collapse', function () {
        refreshNiceScroll('#mobileList');
    });
});