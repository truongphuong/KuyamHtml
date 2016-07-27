$(document).ready(function () {
    maxWidthSideSub();

    /*$('.kuyam-sidebar li  a[data-dropdown="true"]').click(function(e){
        e.preventDefault();
        var thisOpen = $(this).closest('li').hasClass('open');
        $('.kuyam-sidebar li  a[data-dropdown="true"]').closest('li').removeClass('open');
        if(thisOpen){
            $(this).closest('li').removeClass('open');
        }else{
            $(this).closest('li').addClass('open');
        }
    });*/
});

$(window).on('resize', function () {
    maxWidthSideSub();
});