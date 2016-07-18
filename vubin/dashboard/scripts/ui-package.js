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
});

$(window).on('resize', function () {

});