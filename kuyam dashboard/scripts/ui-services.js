$(document).ready(function(){	
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
	
	iscrollSelectK('#selectWhoProvide', '#iscrollWhoProvide');
});