$(document).ready(function () {
    // Begin Photo
    var $croppieCaption = $('<div class="croppie-caption"><div class="drag-section"><div class="icon icon-move"></div>Drag to crop</div></div>');
    var $croppieSlider = $('<a class="croppie-zoom croppie-zoom-in"></a><a class="croppie-zoom croppie-zoom-out"></a>');

    function readFile(input, $croppieID) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                result = e.target.result;
                arrTarget = result.split(';');
                tipo = arrTarget[0];
                if (tipo == 'data:image/jpeg' || tipo == 'data:image/png') {
                    $croppieID.croppie('bind', {
                        url: e.target.result
                    });
                    $('.upload-demo').addClass('ready');
                } else {
                    alert('Accept only .jpg o .png image types');
                }
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    var $croppiePhoto = $('#croppiePhoto');

    $croppiePhoto.croppie({
        viewport: {
            width: 176,
            height: 176
            //type: 'circle' //default 'square'
        },
        boundary: {
            width: '100%',
            height: 176
        },
        customClass: '',
        update: function (cropper) {

        }
    });

    $('#cropPhoto').on('click',function(e){
        $croppiePhoto.croppie('result', 'canvas').then(function (result) {
           //$('#resultPhoto').attr('src', result);
        });
    });

    $('.upload-photo').on('click',function(e){
        e.preventDefault();
        $('#filePhoto').click();
    });

    $('#filePhoto').on('change',function(e){
        if($(this).val().length){
            $(this).closest('.boarding-avatar').addClass('crop-show');
            $(this).closest('.avatar').addClass('invisible');
            $croppiePhoto.closest('.croppie-section').removeClass('invisible');

            //$croppiePhoto.find('.croppie-caption').remove();
            var size = $('#filePhoto')[0].files[0].size;
            var type = $('#filePhoto')[0].files[0].type;
            if(type=='image/jpeg' || type=='image/png'){
                if(size <= 1048576*3){
                    readFile(this, $croppiePhoto);
                }else{
                    $('#error_message').html('File size is larger than 3Mb.');

                $('#ErrorModal').modal('show');
                }
            }else{
                $('#error_message').html('Accept only .jpg o .png image types');

                $('#ErrorModal').modal('show');
            }
        }else{
            $(this).closest('.boarding-avatar').removeClass('crop-show');
        }
    });

    $croppiePhoto.find('.cr-slider-wrap').append($croppieSlider);
    //var srcImg = 'content/images/ui/Dollarphotoclub_73717743.jpg';
    var srcImg = '';
    $croppiePhoto.croppie('bind', srcImg);
    if(srcImg === ''){
        $croppiePhoto.find('.cr-viewport').append($croppieCaption);
    }
    $('#croppiePhoto').find('.croppie-zoom-in').on('click',function(e){
        var objCurrent = $('#croppiePhoto').croppie('get');
        var step = $('#croppiePhoto').find('.cr-slider').attr('step');
        step = step * 10;
        var zoom_in = 0;
        if(objCurrent.zoom - step > 0){
            zoom_in = objCurrent.zoom-step;
        }
        $('#croppiePhoto').croppie('setZoom',zoom_in);
        $('#croppiePhoto').croppie('refresh');
    });
    $('#croppiePhoto').find('.croppie-zoom-out').on('click',function(e){
        var objCurrent = $('#croppiePhoto').croppie('get');
        var step = $('#croppiePhoto').find('.cr-slider').attr('step');
        step = step * 10;
        var max = $('#croppiePhoto').find('.cr-slider').attr('max');
        var zoom_out = max;
        if(objCurrent.zoom + step < max){
            zoom_out = objCurrent.zoom + step;
        }
        $('#croppiePhoto').croppie('setZoom',zoom_out);
        $('#croppiePhoto').croppie('refresh');
    });
    //End Photo
});

$(window).on('resize', function () {
    if (wScreen > 1023) {
        $('.kuyam-sidebar').css({ 'max-width': wScreen / 7 });
    } else {
        $('.kuyam-sidebar').css({ 'max-width': wScreen });
    }
});