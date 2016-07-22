$(document).ready(function () {

    existSelect('form-select-time');

    $('.working-section .cb-mark').each(function () {
        var isChecked = $(this).is(':checked');
        if (isChecked === true) {
            $(this).closest('.tr').addClass('active');
        } else {
            $(this).closest('.tr').removeClass('active');
        }
    }).on('click', function () {
        var isChecked = $(this).is(':checked');
        if (isChecked === true) {
            $(this).closest('.tr').addClass('active');
        } else {
            $(this).closest('.tr').removeClass('active');
        }
    });

    iscrollSelectK('#selectServiceProvide', '#iscrollServiceProvide');
    iscrollSelectK('#selectClassTeach', '#iscrollClassTeach');

    $('#chosenServicePerson').chosen();

    $('#chosenServicePerson1').chosen({
        isShowDropDown: true
    });

    $('#chosenClassTeacher').chosen();

    $('#chosenClassTeacher1').chosen({
        isShowDropDown: true
    });
});