'use strict';

$(document).ready(function () {
    var $sectionBanner = $('#companyBanner');
    var $fileBanner = $('#fileBanner');
    var $modalBanner = $('#cropBannerModal');
    var $croppieBanner = $('#croppieBanner');

    /*$(document).on('click', '.header-banner:not(.default)', function(e){
        var $this = $(this);
        var $target = $(e.target);
        var obj = $target.attr('class');
        if(obj === 'logo' || $target.parents('.logo').length || obj === 'company-name' || obj === 'dropdown-toggle' || $target.parents('.li-account').length || obj === 'control' || $target.parents('.control').length){
            return;
        } else{
            $fileBanner.click();
        }
    }).on('click', '.header-banner .upload', function(e){
        $fileBanner.click();
    });*/

    $(document).on('click', '.header-banner .upload, .header-banner .camera', function (e) {
        $fileBanner.click();
    });

    $('.header-banner .change').on('click', function (e) {
        $modalBanner.modal('show');
    });

    $('.header-banner .delete').on('click', function (e) {
        $('.header-banner').addClass('default');
    });

    crop($sectionBanner, $fileBanner, $modalBanner, $croppieBanner, 1);
});