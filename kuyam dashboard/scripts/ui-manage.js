$(document).ready(function(){	
	if(wScreen > 1023){	
		$('.kuyam-sidebar').css({'max-width': wScreen / 7});
		$('.kuyam-subnav').css({'max-width': wScreen / 7});
	}else{
		$('.kuyam-sidebar').css({'max-width': wScreen});
		$('.kuyam-subnav').css({'max-width': wScreen});
	}
	
	if($('#subnavList').length !== 0){
		iscrollContent('#subnavList');
	}
	
	if($('#divCategoryClass').length !== 0){
		iscrollSelectModal('divCategoryClass', 'iscrollCategoryClass', 'editCategoryModal');		
	}
	if($('#divClassClass').length !== 0){
		iscrollSelect('divClassClass', 'iscrollClassClass');
	}
	if($('#divCategoryService').length !== 0){
		iscrollSelectModal('divCategoryService', 'iscrollCategoryService', 'editCategoryModal');		
	}
	if($('#divServiceService').length !== 0){
		iscrollSelect('divServiceService', 'iscrollServiceService');
	}
	
	$('#editCategoryModal').on('shown.bs.modal', function(){		
		if($('#selectionCaterogy').length !== 0){
			iscrollContent('#selectionCaterogy');
		}
	});
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