function iscrollSelectTabs(tabContentID){	
	if(tabContentID === "formAppointment"){
		iscrollSelectSearchModal('divClientAppointment', 'iscrollClientAppointment', 'addClientModal');
		iscrollSelectSearchModal('divStaffAppointment', 'iscrollStaffAppointment', 'addStaffModal');
		iscrollSelect('divCategoryAppointment', 'iscrollCategoryAppointment');
		iscrollSelect('divServiceAppointment', 'iscrollServiceAppointment');
	}else if(tabContentID === "formClass"){		
		iscrollSelectSearchModal('divClientClass', 'iscrollClientClass', 'addClientModal');
		iscrollSelectSearchModal('divStaffClass', 'iscrollStaffClass', 'addStaffModal');
		iscrollSelect('divCategoryClass', 'iscrollCategoryClass');
		iscrollSelect('divClass', 'iscrollClass');
	}else{		
		iscrollSelectSearchModal('divStaffBlocker', 'iscrollStaffBlocker', 'addStaffModal');
	}
}

$(document).ready(function(){
	
	iscrollSelectModal('divStaffCalendar', 'iscrollStaffCalendar', 'addStaffModal');	
	
	existSelect('calendar-select-status');
	
	$('.calendar-select-status select').change(function(){
		
		var thisVal = $(this).val();
		if(thisVal === "0"){
			$('#cancelCalendarModal').modal('show');
		}
	});
	
	$('#addCalendarModal').on('shown.bs.modal', function(e){
	
		// Repeat select
		existSelect('form-select-repeat');
		
		weekRepeat();
		
		$('.form-select-repeat select').change(function(){
			if($(this).val() === "0"){
				$(this).parents('.repeat-section').find('.week-list').addClass('hide');
			}else{
				$(this).parents('.repeat-section').find('.week-list').removeClass('hide');
			}
		});
		
		// Datetimepicker
		$('.txt-date').datetimepicker({
			format: 'ddd, MMM Do'
		});
		
		$('.timepicker-section').datetimepicker({
			inline: true,
			sideBySide: true,
			format: 'LT'
		}).on('dp.change', function(e){
			var dataSection = $(this).attr('data-section');
				$parent = $('#' + dataSection);
			customPickTime($parent, e.date, 30);
		});
		
		// Tabs
		var tabContentID = $('#tabsCalendar li.active a[data-toggle="tab"]').attr('aria-controls'),
			iscrollActive = $('#tabsCalendar li.active a[data-toggle="tab"]').attr('aria-iscroll');
		if(iscrollActive === true){
			return;
		}
		
		$('#tabsCalendar li.active a[data-toggle="tab"]').attr('aria-iscroll', 'true');
		
		iscrollSelectTabs(tabContentID);
		
	});
		
	$('#tabsCalendar a[data-toggle="tab"]').on('shown.bs.tab', function (e){
		var tabContentID = $(e.target).attr('aria-controls'),
			iscrollActive = $(e.target).attr('aria-iscroll');
		if(iscrollActive === true){
			return;
		}
		
		$(e.target).attr('aria-iscroll', 'true');
		
		iscrollSelectTabs(tabContentID);
	});
	
	$('#detailsModal').on('shown.bs.modal', function(e){
		maxCol('#blockDetails');
		iscrollContent('#iscrollBlockNotes');
	});
	
	$('#attendeeModal').on('shown.bs.modal', function(e){
		iscrollContent('#iscrollAttendeeList');
	});
	
	if(wScreen < 1024){
	
		$('.calendar-details').click(function(e){
			e.preventDefault();
			$('#detailsModal').modal('show');
		});
		
		$('.calendar-attendee').click(function(e){
			e.preventDefault();
			$('#attendeeModal').modal('show');
		});
	}else{
		var detailContent = $('#dataDetails').html();		
		$('.calendar-block').tooltipster({
			contentAsHTML: true,
			content: detailContent,
			trigger: 'click',
			position: 'right',
			offsetX: -5,
			interactive: true,
			positionTracker: true,
			functionReady: function(){
				$('.block-details .close').click(function(){
					$('.calendar-block').tooltipster('hide');
				});	
				maxCol('#calendarDetails');
				iscrollContent('#iscrollDetailsNotes');
			}
		});	

		$('.calendar-block').click(function(e){			
			if($(e.target).hasClass('calendar-attendee') || $(e.target).parents().hasClass('calendar-select-status')){	
				$('.calendar-block').tooltipster('hide');
				return;
			}
		});	
		
		var attendeeContent = $('#dataAttendee').html();
		$('.calendar-attendee').tooltipster({
			contentAsHTML: true,
			content: attendeeContent,
			trigger: 'click',
			position: 'right',
			offsetX: -5,
			interactive: true,
			positionTracker: true,
			functionReady: function(){
				$('.block-attendee .close').click(function(){
					$('.calendar-attendee').tooltipster('hide');
				});	
			}
		});	
	}
});

$(window).on('resize', function(){		
	if(wScreen < 1024){
		$('.tooltipster-default').remove();
	}
});