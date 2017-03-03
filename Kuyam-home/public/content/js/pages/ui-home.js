'use strict';

function logoCarousel() {
    var liWidth = '';
    var carouselWidth = $('#carousel').width();
    if (isView.mobile()) {
        liWidth = carouselWidth / 2;
    } else {
        liWidth = carouselWidth / 4;
    }
    $('#carousel ul li').css({ 'width': liWidth });
    console.log(carouselWidth);
    console.log(liWidth);
}

$(document).ready(function () {
    $("#slide_feature").responsiveSlides({
        pager: true,
        speed: 800,
        after: function after() {}
    });

    logoCarousel();
    $('#carousel ul').carouFredSel({
        prev: '#prev',
        next: '#next',
        auto: false
    });

    monitorResize(function () {
        logoCarousel();
        $('#carousel ul').trigger('updateSizes');
    });

    if (isMobile.any()) {
        $('#categorySelect').selectpicker({
            mobile: true
        });
    } else {
        $('#categorySelect').selectpicker({
            dropupAuto: false
        });
    }
    $('#unlockModal').modal('show');
});