$(document).ready(function(){
    $("#slide_feature").responsiveSlides({
        pager: true,
        speed: 800,
        after: function(){
        }
    });

    $('#carousel ul').carouFredSel({
        prev: '#prev',
        next: '#next',
        auto: false
    });

    if(isMobile.any()){
        $('#categorySelect').selectpicker({
            mobile: true
        });
    }else{
        $('#categorySelect').selectpicker({
            dropupAuto: false
        });
    }
    $('#unlockModal').modal('show');
});