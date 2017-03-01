'use strict';

function readFile(input, $croppieID) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            result = e.target.result;
            arrTarget = result.split(';');
            tipo = arrTarget[0];
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

function cropBanner(section, file, modal, croppie) {
    // Begin crop general
    var $croppieSlider = $('<a class="croppie-zoom croppie-zoom-in">-</a><a class="croppie-zoom croppie-zoom-out">+</a>');
    var $croppieCaption = $('<div id="croppie-caption" class="croppie-caption"><span><span class="icon icon-move"></span>Drag to crop</span></div>');
    // End crop general

    // Begin Banner
    var $file = $(file);
    var $modal = $(modal);
    var $btn = $modal.find('.btn-positive');
    var $deleteSection = $modal.find('.delete-section');
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
        $croppie.html('');

        var viewportH = 0;
        var boundaryH = 0;
        var boundaryW = 0;
        if (!isView.mobile()) {
            viewportH = 218;
            boundaryH = 297;
            boundaryW = 624;
        } else {
            viewportH = 121;
            boundaryH = 176;
            boundaryW = $croppie.width();
        }

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

        $deleteSection.removeClass('hide');

        if (isUpload) {
            readFile($file[0], $croppie);
            $croppie.find('.cr-viewport').append($croppieCaption);
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
    }).on('hide.bs.modal', function () {
        isUpload = false;
        $croppie.croppie('bind', { url: "" });
    });

    $btn.on('click', function (e) {
        $section.croppie('result', 'canvas', 'viewport').then(function (result) {});
    });
    //End Banner
}

$(document).ready(function () {
    $('.header-banner').on('click', function (e) {
        var $this = $(this);
        var $target = $(e.target);
        var obj = $target.attr('class');
        if (obj === 'logo' || $target.parents('.logo').length || obj === 'company-name' || obj === 'dropdown-toggle' || $target.parents('.li-account').length || obj === 'control' || $target.parents('.control').length) {
            return;
        } else {
            $('#fileBanner').click();
        }
    });

    $('.header-banner .change').on('click', function (e) {
        $('#cropBannerModal').modal('show');
    });

    cropBanner('#companyBanner', '#fileBanner', '#cropBannerModal', '#croppieBanner');
});