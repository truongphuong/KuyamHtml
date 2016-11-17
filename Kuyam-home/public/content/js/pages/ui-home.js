'use strict';

$(document).ready(function () {
    $("#slide_feature").responsiveSlides({
        pager: true,
        speed: 800,
        after: function after() {}
    });

    $('#carousel ul').carouFredSel({
        prev: '#prev',
        next: '#next',
        auto: false
    });
});