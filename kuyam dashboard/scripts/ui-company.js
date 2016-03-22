$(document).ready(function(){	
	if(wScreen > 1023){	
		$('.kuyam-sidebar').css({'max-width': wScreen / 7});
	}else{
		$('.kuyam-sidebar').css({'max-width': wScreen});
	}
	
	$('.contact-company-form .check-section').on('click', function(e){
		var isActive = $(this).closest('.tr').hasClass('active');
		if(isActive === true){
			$(this).closest('.tr').removeClass('active');
		}else{
			$(this).closest('.tr').addClass('active');
		}
	});
	
	if($('#txtSMS').length !== 0){
		$('#txtSMS').mask('(000) 000 - 0000');
	}
});

$(window).on('resize', function(){
	if(wScreen > 1023){	
		$('.kuyam-sidebar').css({'max-width': wScreen / 7});
	}else{
		$('.kuyam-sidebar').css({'max-width': wScreen});
	}
});