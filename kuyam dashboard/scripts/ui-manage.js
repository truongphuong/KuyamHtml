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
	
	$('.timepicker-from').datetimepicker({
		inline: true,
		sideBySide: true,
		format: 'LT'
	});
	
	$('.timepicker-to').datetimepicker({
		inline: true,
		sideBySide: true,
		format: 'LT'
	});	
	
	$('#txtFrom').datetimepicker({
		sideBySide: true,
		format: 'ddd, MMM Do',
		defaultDate: moment(),
		minDate: '03/10/2016'
	});
	
	$('#txtTo').datetimepicker({
		sideBySide: true,
		format: 'ddd, MMM Do',
		defaultDate: moment(),
		minDate: '03/10/2016'
	});
	
	iscrollSelect('divPayment', 'iscrollPayment');
	
	$('.working-section .cb-mark').each(function(){
		var isChecked = $(this).is(':checked');
		if(isChecked === true){
			$(this).closest('.tr').addClass('active');
		}else{
			$(this).closest('.tr').removeClass('active');
		}
	}).on('click', function(e){
		var isChecked = $(this).is(':checked');
		if(isChecked === true){
			$(this).closest('.tr').addClass('active');
		}else{
			$(this).closest('.tr').removeClass('active');
		}
	});
	
	iscrollSelectK('#selectWhoTeach', '#iscrollWhoTeach');
	iscrollSelectK('#selectWhoProvide', '#iscrollWhoProvide');
	iscrollSelectK('#selectServiceProvide', '#iscrollServiceProvide');
	iscrollSelectK('#selectClassTeach', '#iscrollClassTeach');
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