function minHeightSubNav() {
    if ($('#subnavList').length === 0) {
        return;
    }
    var hScreen = $(window).height();
    var hHeader = $('.kuyam-header').outerHeight();
    var hFooter = $('.kuyam-footer').height();
    var hAdd = $('#addSection').innerHeight();
    var hSearch = $('#searchSection').innerHeight() > 0 ? $('#searchSection').innerHeight() : 0;

    if ((hScreen - hHeader - hFooter) > $('.kuyam-content form').height()) {
        $('#subnavList').css({ 'height': hScreen - hHeader - hFooter - hAdd - hSearch });
    } else {
        $('#subnavList').css({ 'height': $('.kuyam-content form').innerHeight() });
    }
}

function minHeightMobileList() {
    if($('#mobileList').length === 0){
        return;
    }
    var hScreen = $(window).height();
    var hHeader = $('.kuyam-header').outerHeight();
    var hFooter = $('.kuyam-footer').height();
    var formHeader = $('.kuyam-form .legend').outerHeight();
    var formFooter = $('.kuyam-form footer').innerHeight();
    var hSearch = $('#mobileSearchSection').outerHeight() > 0 ? $('#mobileSearchSection').innerHeight() : 0;
    var mobileSection = hScreen - hHeader - hFooter - formHeader - formFooter - hSearch;

    if (mobileSection > 300) {
        $('#mobileList').css({ 'height': mobileSection });
    } else {
        $('#mobileList').css({ 'height': '' });
    }
}

$(document).ready(function () {

    $('.mobile-ul a').on('click', function (e) {
        e.preventDefault();
        var dataDropdown = $(this).closest('ul').data('dropdown');
        var ulClass = $(this).closest('ul').attr('class');
        if (ulClass === 'mobile-ul' && dataDropdown === true) {
            thisOpen = $(this).closest('li').hasClass('open');
            hasOpen = $(this).parents('.mobile-ul').find('.open');

            if (hasOpen.length !== 0) {
                if (thisOpen === true) {
                    $(this).siblings('ul').slideToggle(300);
                    $(this).closest('li').removeClass('open');
                } else {
                    $(this).closest('ul').find('.open ul').slideToggle(300);
                    $(this).closest('ul').find('li').removeClass('open');

                    $(this).closest('li').addClass('open');
                    $(this).siblings('ul').slideToggle(300);
                }
            } else {
                $(this).closest('li').addClass('open');
                $(this).siblings('ul').slideToggle(300);
            }

            refreshNiceScroll('#mobileList');

        }
    });

    minHeightSubNav();

    maxWidthSideSub();

    if ($('#subnavList').length !== 0) {
        iscrollContent('#subnavList');
    }

    minHeightMobileList();

    if ($('#mobileList').length !== 0) {
        iscrollContent('#mobileList');
    }
});

$(window).on('resize', function () {
    minHeightSubNav();

    maxWidthSideSub();

    minHeightMobileList()
});