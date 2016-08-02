$(document).ready(function () {
    fixHeight('.dl-list', '.time-policy');

    $('.dl-list.contact-info-checkbox').find('.time-policy').css('height', 'auto');
    $('.dl-list .radio-mark').each(function () {
        var isChecked = $(this).is(':checked');
        if (isChecked === true) {
            $(this).closest('.dl-item-item').addClass('active');
        } else {
            $(this).closest('.dl-item').removeClass('active');
        }
    }).on('click', function () {
        var isChecked = $(this).is(':checked');
        $('.dl-list').find('.dl-item').removeClass('active');
        if (isChecked === true) {
            $(this).closest('.dl-item').addClass('active');
        } else {
            $(this).closest('.dl-item').removeClass('active');
        }
    });

    iscrollSelect('divTimePolicy', 'iscrollTimePolicy');
    iscrollSelect('divRefundPolicy', 'iscrollRefundPolicy');

    mobilePolicy();
});

function mobilePolicy(){
    if($(window).width() < 1024){
        $('.dl-list .dl-item').on('click', function (e) {
            var carouselControl = $(e.target).hasClass('carousel-control');
            if(carouselControl){
                return;
            }
            $('.dl-list').find('.dl-item').removeClass('active');
            $('.dl-list').find('.radio-mark').prop('checked', 'false');
            $(this).addClass('active');
            $(this).find('.radio-mark').prop('checked', 'true');;
        });
    }
}

$(window).resize(function(){
    fixHeight('.dl-list', '.time-policy');

    mobilePolicy();
});