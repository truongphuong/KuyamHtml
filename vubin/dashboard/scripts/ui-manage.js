function minHeightSubNav() {
    var hScreen = $(window).height(),
        hHeader = $('.kuyam-header').outerHeight(),
        hFooter = $('.kuyam-footer').height();

    if ($('#subnavList').length !== 0) {
        var hAdd = hSearch = 0
        if ($('#subnavList').length !== 0) {
            hAdd = $('#addSection').innerHeight();
        }
        if ($('#subnavList').length !== 0) {
            hSearch = $('#searchSection').innerHeight() > 0 ? $('#searchSection').innerHeight() : 0;
        }
        if ((hScreen - hHeader - hFooter) > $('.kuyam-content form').height()) {
            $('#subnavList').css({ 'height': hScreen - hHeader - hFooter - hAdd - hSearch });
        } else {
            $('#subnavList').css({ 'height': $('.kuyam-content form').innerHeight() });
        }
    }
}

$(document).ready(function () {
    minHeightSubNav();

    maxWidthSideSub();

    if ($('#subnavList').length !== 0) {
        iscrollContent('#subnavList');
    }
});

$(window).on('resize', function () {
    minHeightSubNav();

    maxWidthSideSub();
});