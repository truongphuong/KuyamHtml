$(document).ready(function () {
    if ($('#divState').length !== 0) {
        iscrollSelect('divState', 'iscrollState');
    }

    $('#chosen-select').chosen();
    $('#chosen-select1').chosen({
        isShowDropDown: true
    });
});