$(document).ready(function(){
	checkCustomizeSelect('calendar-select-staff', 'select-staff', 'Add staff', 'selectStaff', 'addStaffModal');	
	
	checkExistSelect('calendar-select-status', 'select-status');
	
	$('select.select-status').change(function(){
		var thisVal = $(this).val();
		if(thisVal === "0"){
			console.log(thisVal);
			$('#cancelCalendarModal').modal('show')
		}
	});
	
	$('#addCalendarModal').on('shown.bs.modal', function (e) {
		weekRepeat();
		
		$('#txtDate').datepicker({
			format: 'D, M d',
    		todayHighlight: true,
			startDate: now
		}).on('changeDate', function(e){
			$(this).datepicker('hide');
			subfixDate($(this))
		});
		
		$('#txtTime').datepicker({
			format: 'mm/dd/yy',
    		todayHighlight: true,
			startDate: now
		}).on('changeDate', function(e){
			$(this).datepicker('hide');
			if($(this).val() != ''){
				$(this).css({"background":"#fff"});
			}
		});
	})
});

$(window).on('resize', function(){	

});