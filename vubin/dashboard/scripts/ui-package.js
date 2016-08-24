$(document).ready(function () {
    if ($('#divQuantityPackage').length !== 0) {
        iscrollSelect('divQuantityPackage', 'iscrollQuantityPackage');
    }

    $('#photoList li').on('click', function(){
        var isAdded = $(this).hasClass('added')
        if(isAdded){
            $(this).removeClass('added');
        }else{
            $(this).addClass('added');
        }
    });

    $('#chosenServicePerson').chosen();

    $('#chosenServicePerson1').chosen({
        isShowDropDown: true
    });

    var owl = $("#serchPhotoOwl");

    owl.owlCarousel({
        pagination : false,
        items : 5,
        itemsDesktop : [1199,5], //5 items between 1000px and 901px
        itemsDesktopSmall : [991,5], // betweem 900px and 601px
        itemsTablet: [767,2], //2 items between 600 and 0
        itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
    });

      // Custom Navigation Events
    $("#searchSection .next").click(function(){
        owl.trigger('owl.next');
    });

    $("#searchSection .prev").click(function(){
        owl.trigger('owl.prev');
    });

    var owl = $("#viewPackageOwl");

    owl.owlCarousel({
        pagination : true,
        items : 1,
        itemsDesktop : [1199,1], //5 items between 1000px and 901px
        itemsDesktopSmall : [991,1], // betweem 900px and 601px
        itemsTablet: [767,1], //2 items between 600 and 0
        itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
    });

    $('#subnavAccordion').on('shown.bs.collapse', function () {
        refreshNiceScroll('#subnavList');
    });

    $('#mobileListAccordion').on('show.bs.collapse', function () {
        $('#mobileList .wrap-dropdown-menu-inner-content').css({'height': ''});
    });

    $('#mobileListAccordion').on('shown.bs.collapse', function () {
        refreshNiceScroll('#mobileList');
    });
});

$(window).on('resize', function () {

});