$(document).ready(function () {
    if (wScreen > 1023) {
        $('.kuyam-sidebar').css({ 'max-width': wScreen / 7 });
    } else {
        $('.kuyam-sidebar').css({ 'max-width': wScreen });
    }
});

$(window).on('resize', function () {
    if (wScreen > 1023) {
        $('.kuyam-sidebar').css({ 'max-width': wScreen / 7 });
    } else {
        $('.kuyam-sidebar').css({ 'max-width': wScreen });
    }
});