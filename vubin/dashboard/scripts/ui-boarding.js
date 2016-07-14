function iscrollSelect(sectionID, scrollName) {
    var $sectionID = $('#' + sectionID),
		scrollID = '#' + scrollName;
    if ($sectionID.length === 0) {
        return;
    }
    if ($sectionID.find('.bootstrap-select').length === 0) {
        if (!isMobile.any()) {
            $sectionID.find('select').selectpicker({ liveSearch: true });
            $sectionID.find('.form-control').attr('readonly', 'true');
        } else {
            $sectionID.find('select').selectpicker();
        }

        $sectionID.find('select').on('hide.bs.select', function () {
            $sectionID.find('.form-control').trigger('blur');
        });
		
		if (!isMobile.Windows()) {
			$sectionID.find('.dropdown-menu.inner').wrap("<div class='wrap-dropdown-menu-inner'></div>").wrap("<div class='wrap-dropdown-menu-inner-content'></div>");
			$('#' + sectionID + ' select').on('shown.bs.select', function (e) {
				var heightOfUL = $('#' + sectionID + ' ul.inner').height();
				$('#' + sectionID + ' .wrap-dropdown-menu-inner-content').height(heightOfUL);
				$('#' + sectionID + ' .wrap-dropdown-menu-inner').niceScroll('#' + sectionID + ' .wrap-dropdown-menu-inner-content', 
					{
						bouncescroll: false
					});
			});
		}
    }
}

function existSelect(sectionClass) {
    var $sectionClass = $('.' + sectionClass);
    if ($sectionClass.length !== 0) {
        $sectionClass.find('select').selectpicker();
    }
}

function adjustboardingHeight(modalID){
	$(modalID).find('.modal-body').css({'min-height' : ''});
	if ($(modalID).length && $(window).width() < 768) {
		var sectionHeight = $(modalID).find('.modal-dialog').height();
		if(sectionHeight < $(window).height()){
			var windowHeight = $(window).height();				
			var headerHeight = 0;
			if($(modalID).find('.modal-header').length){
				headerHeight =$(modalID).find('.modal-header').outerHeight();
			}
			var introHeight = $(modalID).find('.modal-intro').outerHeight();
			var footerHeight = $(modalID).find('.modal-footer').innerHeight();
			var footerSiteHeight = $(modalID).find('.site-footer').outerHeight();
			var adjustHeight = windowHeight - headerHeight - introHeight - footerHeight - footerSiteHeight;
			$(modalID).find('.modal-body').css({'min-height' : adjustHeight});
		}
	}
}

$(document).ready(function () {

	/*apply select*/
	existSelect('form-select-time');
	$('.form-select-time').selectpicker();
	if (!isMobile.Windows()) {
        $('html').addClass('on-nicescroll');
    }
	
	$('.modal-boarding').on('show.bs.modal', function () {
		adjustboardingHeight($(this));
	});
		
	$(window).resize(function(){
		adjustboardingHeight('#boardingInfoModal');	
		adjustboardingHeight('#boardingTimeModal');	
		adjustboardingHeight('#boardingProfileModal');	
		adjustboardingHeight('#boardingCompleteModal');		
	});
	
	$('#boardingInfoModal').on('show.bs.modal', function () {
		if ($('#divState').length !== 0) {
			iscrollSelect('divState', 'iscrollState');
		}
	});
	
	$('#boardingTimeModal').on('show.bs.modal', function () {
		existSelect('form-select-time');
		
		adjustboardingHeight('#boardingTimeModal');
	});
	
	$('.working-section .cb-mark').each(function () {
        var isChecked = $(this).is(':checked');
        if (isChecked === true) {
            $(this).closest('.tr').addClass('active');
        } else {
            $(this).closest('.tr').removeClass('active');
        }
    }).on('click', function () {
        var isChecked = $(this).is(':checked');
        if (isChecked === true) {
            $(this).closest('.tr').addClass('active');
        } else {
            $(this).closest('.tr').removeClass('active');
        }
    });	
	
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
			width: 183,
			height: 183
			//type: 'circle' //default 'square'
		},
		boundary: {
			width: '100%',
			height: 183
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
	
	$('#boardingProfileModal').on('shown.bs.modal', function (){
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
	});
	//End Photo
});