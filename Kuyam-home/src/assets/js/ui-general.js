$(document).ready(function(){
    if (!isMobile.Windows()) {
        $('html').addClass('on-nicescroll');
    }

    $('.btn_sub_item').addClass('sub_menu_icon_down');

    $('.btn_sub_item').click(function () {
        //$('.dropmenu-item-content').slideUp();
        $(this).parent().find('.dropmenu-item-content').slideToggle();
        $(this).toggleClass('sub_menu_icon_up', 'sub_menu_icon_down');
    });

    $('.menu__level2, .menu__level3').hide();

    $('.menu__level2').show();

    $('.btn_menu_dashboard').click(function () {

        $('.menu__level2, .menu__level3 li').hide();
        $('.menu__level3').show();

        $($('.menu__level3 li').get()).each(function (i) {
            var $li = $(this);
            setTimeout(function () {

                $li.addClass('fadeInRight').show();
            }, i * 50); // delay 100 ms
        });

    });

    $('.btn_menu_back').click(function () {

        $('.menu__level3, .menu__level2 li').hide();
        $('.menu__level2').show();

        $($('.menu__level2 li').get()).each(function (i) {
            var $li = $(this);
            setTimeout(function () {
                $li.addClass('fadeInLeft').show();
            }, i * 50); // delay 100 ms
        });

    });

    /* .menu__wrap */
    $(".menu__wrap").niceScroll({
        touchbehavior:false,
        cursorcolor:"#8ab21e",
        cursoropacitymax:.8,
        cursorwidth:6,
        cursorborder:"0px solid #8ab21e",
        railpadding:{top:0,right:10,left:0,bottom:0},
        cursorborderradius:"8px",
        background:"transparent",
        autohidemode:"scroll"
    });
    /* /.menu__wrap */

    /* #nav-account */
    var temp = 0;
    var widthScreen;
    $( window ).resize(function() {
        widthScreen = $( window ).width();
        if(widthScreen < 768){
            $( ".site-banner" ).animate({ "margin-top": "50px" }, 500 );
            $( "#nav-account" ).hide();
            temp = 0;
        }else if(widthScreen > 768){
            $( ".site-banner" ).animate({ "margin-top": "58px" }, 500 );
            $( "#nav-account" ).hide();
            $( "#bs-navbar-collapse" ).removeClass("in");
            temp = 0;
        }
    });

    function showNavAccount(){
        if(temp == 0){
            $( ".site-banner" ).animate({ "margin-top": "58px" }, 500 );
            temp = 1;
        }else{
            $( ".site-banner" ).animate({ "margin-top": "58px" }, 500 );
            temp = 0;
        }

        $( "#nav-account" ).toggle('blind', 500);
    }

    $( ".link-account" ).click(function(){
        showNavAccount();
    });
    /* #nav-account */

    /* #terms-tabs */
    var termActive;
    $('.link-terms').click(function (e) {
        e.preventDefault();
        termActive = $(this).attr('href');
        $('#termsModal').modal('show');
    });

    $('#termsModal').on('show.bs.modal', function (e) {
        $('.terms-tabs').tab('show');
        $('.terms-tabs a[href="' + termActive + '"]').tab('show');
    });

    $('#termsModal').on('shown.bs.modal', function (e) {
        iscrollContent('#tabTerms');
        iscrollContent('#tabPrivacy');
        iscrollContent('#tabServices');
    });

    $('.terms-tabs').on('shown.bs.tab', function (e) {
        refreshNiceScroll('#tabTerms');
        refreshNiceScroll('#tabPrivacy');
        refreshNiceScroll('#tabServices');
    });
    /* /#terms-tabs */

    /* show and hide #ml-menu*/
    $('div.navbar-toggle').click(function () {
        $('.menu__wrap').addClass('menu-slide-right');
        $('.bg-fading').addClass('show-bg-fading');
        $('.icon_mobile_close_menu').show();

        $('.menu__level3, .menu__level2 li').hide();
        $('.menu__level2').show();

        $($('.menu__level2 li').get()).each(function (i) {
            var $li = $(this);
            setTimeout(function () {
                $li.addClass('fadeInLeft').show();
            }, i * 50); // delay 100 ms
        });


    });

    $('.bg-fading, .icon_mobile_close_menu').click(function () {
        $('.menu__wrap').removeClass('menu-slide-right');
        $('.bg-fading').removeClass('show-bg-fading');
        $('.icon_mobile_close_menu').hide();
    });
    /* /show and hide #ml-menu*/

});