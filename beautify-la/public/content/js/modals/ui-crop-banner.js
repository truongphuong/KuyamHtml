'use strict';

function readFile(input, $croppieID) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var result = e.target.result;
            var arrTarget = result.split(';');
            var tipo = arrTarget[0];
            if (tipo == 'data:image/jpeg' || tipo == 'data:image/png') {
                var objImage = $croppieID.croppie('bind', {
                    url: e.target.result,
                    enableExif: true
                });
            } else {
                alert('Accept only .jpg o .png image types');
            }
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function crop(section, file, modal, croppie, type) {
    // Begin crop general
    var $croppieSlider = $('<a class="croppie-zoom croppie-zoom-in">-</a><a class="croppie-zoom croppie-zoom-out">+</a>');
    var $croppieCaption = $('<div id="croppie-caption" class="croppie-caption"><span><span class="icon icon-move"></span>Drag to crop</span></div>');
    // End crop general

    // Begin Banner
    var $file = $(file);
    var $modal = $(modal);
    var $file2 = $modal.find('input[type="file"]');
    var $change = $modal.find('.change');
    var $btn = $modal.find('.btn-positive');
    var $section = $(section);
    var $croppie = $(croppie);

    var isUpload = false;
    $file.on('change', function (e) {
        var size = $file[0].files[0].size;
        var type = $file[0].files[0].type;
        if (type == 'image/jpeg' || type == 'image/png') {
            if (size <= 1048576 * 3) {
                isUpload = true;
                $modal.modal('show');
            } else {
                alert('File size is larger than 3Mb.');
            }
        } else {
            alert('Please upload .jpg, .jpeg or .png image format!');
        }
    });

    $modal.on('show.bs.modal', function () {
        var viewportH = 0;
        var boundaryH = 0;
        var boundaryW = 0;
        if (type === 1) {
            if (!isView.mobile()) {
                viewportH = 218;
                boundaryH = 297;
                boundaryW = 624;
            } else {
                viewportH = 121;
                boundaryH = 176;
                boundaryW = $croppie.width();
            }
        }

        $croppie.html('');

        $croppie.croppie({
            viewport: {
                width: '100%',
                height: viewportH,
                type: 'square' //default 'square'
            },
            boundary: {
                width: boundaryW,
                height: boundaryH
            },
            customClass: ''
            //enableExif: true
        });

        $croppie.find('.cr-slider-wrap').append($croppieSlider);
    }).on('shown.bs.modal', function () {
        if (isUpload) {
            readFile($file[0], $croppie);
            $croppie.find('.cr-viewport').append($croppieCaption);
            isUpload = false;
        } else {
            var orginalImage = $section.data('image');
            if (typeof orginalImage !== 'undefined' && orginalImage.length) {
                var objImage = $croppie.croppie('bind', {
                    url: orginalImage
                }, function () {
                    $croppie.find('.cr-viewport').append($croppieCaption);
                });
            }
        }

        $file2.on('change', function (e) {
            var size = $file[0].files[0].size;
            var type = $file[0].files[0].type;
            if (type == 'image/jpeg' || type == 'image/png') {
                if (size <= 1048576 * 3) {
                    readFile(this, $croppie);
                } else {
                    alert('File size is larger than 3Mb.');
                }
            } else {
                alert('Please upload .jpg, .jpeg or .png image format!');
            }
        });
    }).on('hide.bs.modal', function () {
        $croppie.croppie('bind', { url: "" });
    });

    $change.on('click', function (e) {
        e.preventDefault();
        $file2.click();
    });

    $btn.on('click', function () {
        $('.header-banner').removeClass('default');
        $croppie.croppie('result', 'canvas', 'viewport').then(function (result) {});
    });
    //End Banner
}

$(document).ready(function () {
    var $sectionBanner = $('#companyBanner');
    var $fileBanner = $('#fileBanner');
    var $modalBanner = $('#cropBannerModal');
    var $croppieBanner = $('#croppieBanner');

    $(document).on('click', '.header-banner:not(.default)', function (e) {
        var $this = $(this);
        var $target = $(e.target);
        var obj = $target.attr('class');
        if (obj === 'logo' || $target.parents('.logo').length || obj === 'company-name' || obj === 'dropdown-toggle' || $target.parents('.li-account').length || obj === 'control' || $target.parents('.control').length) {
            return;
        } else {
            $fileBanner.click();
        }
    }).on('click', '.header-banner .upload', function (e) {
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