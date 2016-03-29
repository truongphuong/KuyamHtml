$(document).ready(function(){	
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
	
	if($('#divState').length !== 0){
		iscrollSelect('divState', 'iscrollState');
	}
	
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
	
	//iscrollSelectK('#selectSearchTags', '#iscrollSearchTags');
});