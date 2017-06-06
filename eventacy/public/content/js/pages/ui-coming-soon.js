'use strict';

$(document).ready(function () {

    $('.coming-soon-page').css({ 'height': getWindowHeight() });

    monitorResize(function () {
        $('.coming-soon-page').css({ 'height': getWindowHeight() });
    });
});