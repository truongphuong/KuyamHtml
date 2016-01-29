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

function more1023(){
	if(wScreen > 1023){
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
			autoClose: false,
			functionReady: function(origin, tooltip){
				$('.block-details .close').click(function(){
					$('.calendar-block').tooltipster('hide');
				});
				
				maxCol('#calendarDetails');
				iscrollContent('#iscrollDetailsNotes');
				
				var topCalendar = $('.calendar-section').offset().top;
				var bottomCalendar = $('.kuyam-footer').offset().top;
				
				var topOrigin = $(this).offset().top;
				var bottomOrigin = topOrigin + $(this).innerHeight();
				
				var topTooltip = parseInt(tooltip.css('top'));
				var bottomTooltip = topTooltip + tooltip.innerHeight();
				
				if(topTooltip < topCalendar){
					tooltip.css({'top': 127});
					$('.tooltipster-arrow span').css({'top' : 62});
				}else{
					var totalMinus = '';
					if(bottomTooltip > bottomCalendar){
						totalMinus = tooltip.innerHeight() - $(this).innerHeight();
						tooltip.css({'top': topOrigin - totalMinus});
					}else{
						totalMinus = (tooltip.innerHeight() - $(this).innerHeight()) / 2;
					}
					$('.tooltipster-arrow span').css({'top' : totalMinus + 25});
				}
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
			autoClose: false,
			functionReady: function(origin, tooltip){
				$('.block-attendee .close').click(function(){
					$('.calendar-attendee').tooltipster('hide');
				});	
				
				iscrollContent('#iscrollAttendeeList');
				
				var bottomCalendar = $('.kuyam-footer').offset().top;
				
				var topOrigin = $(this).offset().top;
				
				var topTooltip = parseInt(tooltip.css('top'));
				var bottomTooltip = topTooltip + tooltip.innerHeight();				
				
				if(bottomTooltip > bottomCalendar){
					totalMinus = tooltip.innerHeight() - $(this).innerHeight();
					tooltip.css({'top': topOrigin - totalMinus - 1});
					$('.tooltipster-arrow span').css({'top' : totalMinus + 14});
				}
			}
		});	
		$('.calendar-attendee').click(function(e){	
			if($('.tooltipster-default').length !== 0){
				return;
			}
			$(this).tooltipster('show');
		});
				
		$('#addCalendarModal').on('click', function(e){
			if($(e.target).hasClass('btn-personal') || $(e.target).parent().hasClass('btn-personal')){
				return;
			}
					
			if($('.tooltipster-personal').length !== 0){
				$('.tooltipster-personal').remove();
			}
		});	
		
		if($('#addCalendarModal').hasClass('in')){
			if($('.kuyam-section').find('#addCalendarModal').length === 1){
				$('#addCalendarModal').appendTo('body');
				
				$('.calendar-page').removeClass('hide');
				
				$('body').css({'padding-right': 17});
				$('body').addClass('modal-open');	
				$('#addCalendarModal').css({'z-index': ''});			
				$('<div class="modal-backdrop fade in"></div>').appendTo('body');
			}
		}
	}
}

function less1024(){
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
		
		$('.calendar-details').click(function(e){
			e.preventDefault();
			$('#detailsModal').modal('show');
		});
		
		$('.calendar-attendee').click(function(e){
			e.preventDefault();
			$('#attendeeModal').modal('show');
		});
		
		if($('#addCalendarModal').hasClass('in')){
			if($('.kuyam-section').find('#addCalendarModal').length === 0){
				$('#addCalendarModal').appendTo('.kuyam-section');
				
				$('.calendar-page').addClass('hide');
				
				$('body').css({'padding-right': ''});
				$('body').removeClass('modal-open');
				$('.modal-backdrop').remove();
				$('#addCalendarModal').css({'z-index': 1000});
			}
		}
		
		$('.calendar-header .btn-add').click(function(){
			if($('.kuyam-section').find('#addCalendarModal').length === 0){
				$('#addCalendarModal').appendTo('.kuyam-section');
			}
			$('#addCalendarModal').modal('show');
			
			$('.calendar-page').addClass('hide');
		});	
		
		$('#addCalendarModal').on('shown.bs.modal', function(e){		
			$('body').css({'padding-right': ''});
			$('body').removeClass('modal-open');
			$('.modal-backdrop').remove();
			$('#addCalendarModal').css({'z-index': 1000});
		});

		$('#addCalendarModal .close').click(function(){			
			$('.calendar-page').removeClass('hide');
		});	
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
	
	// btn-personal
	$(document).on('click', '.btn-personal', function(e){
		e.stopPropagation();
	});
	
	more1023();
	less1024();
	
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
		iscrollContent('#iscrollBlockNotes');
	});
	
	$('#attendeeModal').on('shown.bs.modal', function(e){
		iscrollContent('#iscrollBlockAttendeeList');
	});
});

$(window).on('resize', function(){
	more1023();
	less1024();
});