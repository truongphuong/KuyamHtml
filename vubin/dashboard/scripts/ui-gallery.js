$(document).ready(function () {

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

});

$(window).on('resize', function () {
});