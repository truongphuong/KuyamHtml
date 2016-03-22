$(document).ready(function(){	
	if(wScreen > 1023){	
		$('.kuyam-sidebar').css({'max-width': wScreen / 7});
		$('.kuyam-subnav').css({'max-width': wScreen / 7});
	}else{
		$('.kuyam-sidebar').css({'max-width': wScreen});
		$('.kuyam-subnav').css({'max-width': wScreen});
	}
		
	iscrollContent('#subnavList');
	if($('#divCategoryClass').length !== 0){
		iscrollSelect('divCategoryClass', 'iscrollCategoryClass');
	}
	if($('#divClassClass').length !== 0){
		iscrollSelect('divClassClass', 'iscrollClassClass');
	}
	if($('#divCategoryService').length !== 0){
		iscrollSelect('divCategoryService', 'iscrollCategoryService');
	}
	if($('#divServiceService').length !== 0){
		iscrollSelect('divServiceService', 'iscrollServiceService');
	}
});

$(window).on('resize', function(){
	if(wScreen > 1023){	
		$('.kuyam-sidebar').css({'max-width': wScreen / 7});
		$('.kuyam-subnav').css({'max-width': wScreen / 7});
	}else{
		$('.kuyam-sidebar').css({'max-width': wScreen});
		$('.kuyam-subnav').css({'max-width': wScreen});
	}
});