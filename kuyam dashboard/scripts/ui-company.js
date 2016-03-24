$(document).ready(function(){	
	if(wScreen > 1023){	
		$('.kuyam-sidebar').css({'max-width': wScreen / 7});
	}else{
		$('.kuyam-sidebar').css({'max-width': wScreen});
	}
	
	if($('#txtSMS').length !== 0){
		$('#txtSMS').mask('(000) 000 - 0000');
	}
	
	fixHeight('.dl-list', '.time-policy');	
	
	$('.dl-list .radio-mark').each(function(){
		var isChecked = $(this).is(':checked');
		if(isChecked === true){
			$(this).closest('.dl').addClass('active');
		}else{
			$(this).closest('.dl').removeClass('active');
		}
	}).on('click', function(e){
		var isChecked = $(this).is(':checked');
		$('.dl-list').find('.dl').removeClass('active');
		if(isChecked === true){
			$(this).closest('.dl').addClass('active');
		}else{
			$(this).closest('.dl').removeClass('active');
		}
	});
	
	iscrollSelect('divTimePolicy', 'iscrollTimePolicy');
	iscrollSelect('divRefundPolicy', 'iscrollRefundPolicy');
});

$(window).on('resize', function(){
	if(wScreen > 1023){	
		$('.kuyam-sidebar').css({'max-width': wScreen / 7});
	}else{
		$('.kuyam-sidebar').css({'max-width': wScreen});
	}
});