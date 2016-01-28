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
		$('#dataDetails').remove();
		$('.calendar-block').tooltipster({
			contentAsHTML: true,
			content: detailContent,
			trigger: 'custom',
			position: 'right',
			theme: 'tooltipster-default tooltipster-details',
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
			if($('.tooltipster-default').length !== 0){
				return;
			}
			if($(e.target).hasClass('calendar-attendee') || $(e.target).parents().hasClass('calendar-select-status')){	
				return;
			}
			$(this).tooltipster('show');
		});	
		
		var attendeeContent = $('#dataAttendee').html();
		$('.calendar-attendee').tooltipster({
			contentAsHTML: true,
			content: attendeeContent,
			trigger: 'custom',
			position: 'right',
			theme: 'tooltipster-default tooltipster-attendee',
			offsetX: -5,
			interactive: true,
			positionTracker: true,
			functionReady: function(){
				$('.block-attendee .close').click(function(){
					$('.calendar-attendee').tooltipster('hide');
				});	
			}
		});	
		$('.calendar-attendee').click(function(e){	
			if($('.tooltipster-attendee').length !== 0){
				return;
			}
			$(this).tooltipster('show');
		});
	}
	
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
		
		// btn-personal
		$(document).on('click', '.btn-personal', function(e){
			e.stopPropagation();
		});
		
		if(wScreen > 1023){	
			$(document).click(function(e){	
				if($(e.target).hasClass('btn-personal') === true || $(e.target).parent().hasClass('btn-personal') === true){
					return;
				}
						
				if($('.tooltipster-personal').length !== 0){
					$('.tooltipster-personal').remove();
				}
			});
		}
		
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
		
		if(wScreen > 1023){			
			if($('.tooltipster-personal').length !== 0){
				$('.tooltipster-personal').remove();
			}
		}
		
		var tabContentID = $(e.target).attr('aria-controls'),
			iscrollActive = $(e.target).attr('aria-iscroll');
		if(iscrollActive === true){
			return;
		}
		
		$(e.target).attr('aria-iscroll', 'true');
		
		iscrollSelectTabs(tabContentID);
	});
	
	$('#detailsModal').on('shown.bs.modal', function(e){
		iscrollContent('#iscrollBlockNotes');
	});
	
	$('#attendeeModal').on('shown.bs.modal', function(e){
		iscrollContent('#iscrollAttendeeList');
	});
});

$(window).on('resize', function(){		
	if(wScreen < 1024){
		if($('.tooltipster-attendee').length !== 0){
			$('.tooltipster-attendee').remove();
		}
		
		if($('.tooltipster-personal').length !== 0){
			$('.tooltipster-personal').remove();
		}
		
		if($('.tooltipster-details').length !== 0){
			$('.tooltipster-details').remove();
		}
	}
});