$(document).ready(function(){
	maxCol('#appointmentDetails');
	iscrollContent('#iscrollAppointmentNotes');
	
	maxCol('#classDetails');
	iscrollContent('#iscrollClassNotes');
	
	maxCol('#blockerDetails');
	iscrollContent('#iscrollBlockerNotes');
	
	iscrollContent('#iscrollAttendeeList');
});

function maxCol(section){
	var maxCol = 0;
	$(section).find('.col-title').each(function(){
		if($(this).width() > maxCol){
			maxCol = $(this).innerWidth();
		}		
	});
	$(section).find('.col-title').css({'width': maxCol});
}

$(window).on('resize', function(){	

});