$(document).ready(function(){
	checkCustomizeSelect('calendar-select-staff', 'Add staff', 'selectStaff', 'addStaffModal');	
	
	checkExistSelect('calendar-select-status');
	
	$('select.select-status').change(function(){
		var thisVal = $(this).val();
		if(thisVal === "0"){
			$('#cancelCalendarModal').modal('show')
		}
	});
	
	$('#addCalendarModal').on('shown.bs.modal', function (e) {
		checkExistSelect('form-select');
		
		weekRepeat();
		
		$('#txtDate').datetimepicker({
			format: 'ddd, MMM Do'
		});
		
		$('.timepicker-section').datetimepicker({
			inline: true,
			sideBySide: true,
			format: 'LT'
		}).on('dp.change', function(e){
			var thisVal = e.date.format("h:mm A"),
				dataSection = $(this).attr('data-section');
				$parent = $('#' + dataSection);
			customPickTime($parent, thisVal);
		});
		
		$('.form-timepicker .dropdown-menu').click(function(event){
			event.stopPropagation();
		});
	});
});

$(window).on('resize', function(){	

});