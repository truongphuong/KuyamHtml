$(document).ready(function () {
    $('.timepicker-from').datetimepicker({
        inline: true,
        sideBySide: true,
        format: 'LT'
    });

    $('.timepicker-to').datetimepicker({
        inline: true,
        sideBySide: true,
        format: 'LT'
    });

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
});