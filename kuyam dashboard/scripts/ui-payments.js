$(document).ready(function(){
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